/*====ViewModel====*/
var ViewModel = function(){
    var self = this;

    self.locArray=ko.observableArray([]);
    self.filteredLocArray = ko.observableArray([]);
    self.filteredLocArray = self.locArray;
    self.searchLoc=ko.observable('');


/*====Map====*/
// self-initializing map
    (function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 48.2084114, lng: 16.3734707},
            zoom: 14,
            disableDefaultUI: true,
            styles: mapstyle,
            info: new google.maps.InfoWindow()
        });
    })();

// keep map centered on resize
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

// set default infowindow width
    var infoWindow = new google.maps.InfoWindow({
        maxWidth: 200
    });

// initial populate locArray from items in model
    (self.makeLocArray = function(){
        locs.forEach(function(elem){
            self.locArray.push(new loc(elem));
        });
    })();

// add click listener
    (self.markerClick = function(){
        self.locArray().forEach(function(elem){
            google.maps.event.addListener(elem.marker, 'click', function() {
                self.markerSet(elem);
            });
        });
    })();

// add marker bouce
    self.markerBounce = function(elem){
        elem.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){
            elem.marker.setAnimation(null);
        }, 720);
    }

// add marker visibility
    self.markerShow = function(elem){
        // console.log(elem);
    }

// set marker properties
    self.markerSet = function(elem){
        // console.log(elem);

        self.markerShow();
        self.markerBounce(elem);
        self.wikiInfo(elem);
    }

    // on search, rebuild location list
    self.updateList = function(elem){
        elem.filteredLocArray().forEach(function(elem){
            elem.marker.setVisible(false);
        });

        // reset list
        self.locArray([]);

        var search = self.searchLoc().toLowerCase();

        // full list if search imput blank
        if (search ==''){
            self.makeLocArray();
            self.markerClick();
        }
        else{
            locs.forEach(function(elem){
                if(elem.name.toLowerCase().indexOf(search) >= 0){
                    self.locArray.push(new loc(elem));
                }
            self.markerClick();
        });
    }


    }
    google.maps.event.addDomListener(window, 'click', function() {

      });

    // wikipedia API - fetch content and populate infowindow
    self.wikiInfo = function(elem){

        // reset infowindow
        infoWindow.setContent("")
        this.getWikiInfo = (function() {
            // Wikipedia Information
            var wikiUrl = "https://en.wikipedia.org/w/api.php?&format=json&action=opensearch&search=" + elem.marker.title;
            var wikiRequestTimeout = setTimeout(function(){alert("failed to get wikipedia resources")},8000)
            // Ajax Call
            $.ajax({
                url: wikiUrl,
                dataType: 'jsonp',
                success: function(response) {
                    // reset timeout on success
                    clearTimeout(wikiRequestTimeout);
                    // add content to infowindow
                    infoWindow.setContent("<p>from Wikipedia:</p><br><h3>"+response[0]+"</h3>"+"<p>"+response[2][0]+"<p>");
                }
            });
        })();
        // open info window
        google.maps.event.addListener(map, "click", function(event) {
            infoWindow.close();
        });
        infoWindow.open(map, elem.marker);
    }
}

// constructor function
var loc = function(locs){
    this.position=ko.observable(locs.location);
    this.name=ko.observable(locs.name);

    // create marker bound to location
    var marker = new google.maps.Marker({
        map: map,
        position: this.position(),
        title: this.name(),
        visible:true
    });
    this.marker = marker;
        google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(map.center);
    });
}

/*====Errors and initialize====*/
    // google API error handler
    function showError() {
        alert("There was a problem loading Google Maps");
    };

    // initialize
    function initialize(){
        ko.applyBindings(new ViewModel());
    }