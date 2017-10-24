// HEADER
// bio information
var bio = {
  "name": "Adam Klimiuk",
  "role": "Web Developer",
  "welcomeMessage": "Hello, at this point the information entered in this resume is just placeholders.",
  "biopic": "images/face.svg",
  "skills": ["Python", "HTML", "CSS", "JS"],
  "contacts": {
    "mobile": "+43 123 456 789",
    "email": "adamklim@gmail.com",
    "github": "adamklim",
    "twitter": "@adam_klim",
    "location": "Vienna, Austria"
  },
  "display": function(){
    // include header information
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    // include contact information in header
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    // include contact info in footer
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    // include skills, if any
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var i = 0;
      while (i < bio.skills.length) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
        i++;
      }
    }
  }
};
// SECTIONS:
// work history
var work = {
  "jobs": [{
      "employer": "ACME Vienna",
      "title": "Coffee machhine operator",
      "location": "Vienna, Austria",
      "dates": "2016 - 2017",
      "description": "Just bodies. I need your clothes, your boots, and your motorcycle. Grant me revenge! And if you do not listen, then to HELL with you. Make it quick because my horse is getting tired. Come on don't bullshit me. Into the tunnel. Bring your toy back to the carpet."
    },
    {
      "employer": "ACME Vienna",
      "title": "Printer and stapler operator",
      "location": "Vienna, Austria",
      "dates": "2012 - 2016",
      "description": "Just bodies. I need your clothes, your boots, and your motorcycle. Grant me revenge! And if you do not listen, then to HELL with you. Make it quick because my horse is getting tired. Come on don't bullshit me. Into the tunnel. Bring your toy back to the carpet."
    },
    {
      "employer": "ACME Ireland",
      "title": "Data entry expert",
      "location": "Dublin, Ireland",
      "dates": "2009 - 2012",
      "description": "Just bodies. I need your clothes, your boots, and your motorcycle. Grant me revenge! And if you do not listen, then to HELL with you. Make it quick because my horse is getting tired. Come on don't bullshit me. Into the tunnel. Bring your toy back to the carpet."
    }
  ],
  // display work section
  "display": function() {
    work.jobs.forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    });
  }
};
// completed relevant projects
var projects = {
  "projects": [{
      "title": "Project 1",
      "dates": "2016-2017",
      "description": "Just bodies. I need your clothes, your boots, and your motorcycle. Grant me revenge! And if you do not listen, then to HELL with you. Make it quick because my horse is getting tired. Come on don't bullshit me. Into the tunnel. Bring your toy back to the carpet.",
      "images": ["images/logo_chilli.png", "images/project.jpg"]
    },
    {
      "title": "Project 2",
      "dates": "2015-2016",
      "description": "Just bodies. I need your clothes, your boots, and your motorcycle. Grant me revenge! And if you do not listen, then to HELL with you. Make it quick because my horse is getting tired. Come on don't bullshit me. Into the tunnel. Bring your toy back to the carpet.",
      "images": ["images/panels.jpg","images/leaves.jpg"]
    }
  ],
  // display projects section
  "display": function() {
    projects.projects.forEach(function projectDisplay(project) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);

      if (project.images.length > 0) {
        project.images.forEach(function(image) {
          var formattedImage = HTMLprojectImage.replace("%data%", image);
          $(".project-entry:last").append(formattedImage);
        });
      }
    });
  }
};
// detailes of education
var education = {
  // university education
  "schools": [{
      "name": "University of Vienna",
      "location": "Vienna, Austria",
      "degree": "PhD",
      "majors": ["marine biology"],
      "dates": "2016",
    },
    {
      "name": "University of Wroclaw",
      "location": "Wroclaw, Poland",
      "degree": "MSc",
      "majors": ["medical biochemistry", " biotechnology"],
      "dates": "2016",
    }
  ],
  // relevant online courses
  "onlineCourses": [{
      "title": "Data Analyst Nanodegree",
      "school": "Udacity",
      "dates": "2017",
      "url": "https://www.udacity.com/course/data-analyst-nanodegree--nd002"
    },
    {
      "title": "Front-End Developer Nanodegree",
      "school": "Udacity",
      "dates": "2016-2017",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  // diaplay education section
  "display": function() {
    education.schools.forEach(function(school) {
      var formattedName = HTMLschoolName.replace("%data%", school.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedNameDegree = formattedName + formattedDegree;
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedNameDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajor);
    });
     $(HTMLonlineClasses).insertAfter(".education-entry:last");
      education.onlineCourses.forEach(function(course) {
      var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
      var formattedTitleSchool = formattedTitle + formattedSchool;
      var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedURL = HTMLonlineURL.replace("%data%", course.url);

      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedTitleSchool);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedURL);
    });
  }
};
// display sections
var displaySections = function() {
  bio.display();
  work.display();
  projects.display();
  education.display();
};
displaySections();
// initialize map
$("#mapDiv").append(googleMap);

// EXTRAS
// change header picture on mouse over the header
$(function() {
  $("#header").mouseenter(function() {
    $(".biopic").attr("src", "images/face_side.svg");
  });
  $("#header").mouseleave(function() {
    $(".biopic").attr("src", "images/face.svg");
  });
});


// // include button to trigger the inName function to internationalize name
// $("#header").append(internationalizeButton);
// // capitalize 1st name and all caps on last name
// function inName(name){
//   name = name.trim().split(" ");
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//   name[1] = name[1].toUpperCase();
//   return name[0]+" "+name[1];
// }
// inName(bio.name);
// // return click locations to console
// $(document).click(function(loc) {
// var x = loc.pageX;
// var y = loc.pageY;
// logClicks(x,y);
// });