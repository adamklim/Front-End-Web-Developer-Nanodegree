/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test ensures ensures each feed in allFeeds
         * has a URL defined and that the URL is not empty.
         */
        it('have a URL defined and URL is not empty', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url).toBeTruthy();
          });
        });

        /* This test ensures each feed in allFeeds has
         * a name defined and that the name is not empty.
         */
        it('have name defined and name not empty', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name).toBeTruthy();
          });
        });
    });


    /* Test suite "The menu" */
    describe('The menu', function() {
        // variables
        var body,
            click;

        beforeEach(function() {
            body = document.body;
            click = document.querySelector('.menu-icon-link');
        });

        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden', function(){
            expect(body.classList).toContain('menu-hidden');
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it('is visible', function(){
            click.click();
            expect(body.classList).not.toContain('menu-hidden');
            click.click();
            expect(body.classList).toContain('menu-hidden');
        });
    });

    /* Test suite "Initial Entries" */
    describe('Initial Entries', function(){

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         it('have at least one feed', function(){
            var feed = document.querySelector('.feed')
                .getElementsByClassName('entry');
            expect(feed).toBeTruthy();
        });
    });

    /* Test suite "New Feed Selection" */
    describe('New Feed Selection', function(){
        var initialFeed,
            loadedFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                // get the initialFeed
                initialFeed = document.querySelector('.feed').innerHTML;
                loadFeed(1, done);
            });
        });

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('loads new content', function(){
          loadedFeed = document.querySelector('.feed').innerHTML;
          expect(loadedFeed).not.toBe(initialFeed);
        });
    });
}());
