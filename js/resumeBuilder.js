/* bio contains a name, role, welcomeMessage, contacts object 
and skills array. The contacts object should contain 
(but doesn't have to) a mobile number, email address, github username, 
twitter handle and location. */
var bio = {
  "name": "Troy Lamerton",
  "role": "Junior Web Developer",
  "welcomeMessage": "Kia ora! This is my partially fictional resume.",
  "contacts": {"email": "troy.lamerton@gmail.com"},
  "skills": ["collaborating", "building websites", "analysis"]
};
/* valid JSON */

/* WORK EXPERIENCE */
var work = {
  "jobs":[
    {
      "employer": "Education Review Office",
      "title": "Content Loader",
      "location": "Wellington",
      "dates": "February 2016 to Present",
      "description": "Ensuring content being moved from one web platform to another is complete and accurate for an upcoming go live date."
    },
    {
      "employer": "Statistics New Zealand",
      "title": "Web Development Contract",
      "location": "Wellington",
      "dates": "December 2015 to January 2016",
      "description": "Developed a web application with a team of Statistics New Zealand employees and university students."
    } 
  ]
};
/* valid JSON */

/* EDUCATION */
/*education contains an array of schools. 
Each school object 
in schools contains a 
name, 
location, 
degree,
majors array, 
dates attended
and a url for the school's website. 
education also contains an onlineCourses array. 
Each onlineCourse object in onlineCourses should contain 
a title, school, dates attended and a url for the course.*/
var education = {
  "schools":[
      {
        "name": "Victoria University",
        "location": "Wellington",
        "dates": "2014 to 2015",
        "degree": "First year of Bachelor of Science",
        "majors": ["Computer Science"],
        "url": "http://www.hibs.school.nz/"
      },
      { 
        "name": "Hutt Internationl Boys School",
        "location": "Upper Hutt",        
        "dates": "2007 to 2013",
        "degree": "NCEA Level 3 with Merit endorsement",
        "majors": ["Mathematics"],
        "url": "http://www.victoria.ac.nz/"
      }
  ],
  "onlineCourses": []
};
/* valid JSON */

/* PROJECTS
projects contains an array of projects. 
Each project object in projects should contain a 
title, 
dates worked, 
description, 
and an images array with 
URL strings for project images. **/
var projects = [
  {
    "title": "One Rule - Arcade Game",
    "dates": "Weekend in September 2015",
    "description": "48-hour game design competition. We created a ball shooting puzzle game with various levels and powerups.",
    "images": ["https://raw.githubusercontent.com/Cambis/Pixel_Jam/master/Pixel_Jam/src/game/assets/start960by540.png"]
  },
  {
    "title": "CommuniMe",
    "dates": "December 2015 to January 2016",
    "description": "A web app that helps people move within or to Wellington suburbs.",
    "images": ["https://pbs.twimg.com/profile_images/617497627303608320/qGImfjHJ.png",
    "https://i.ytimg.com/vi/axEZqMBjiPI/maxresdefault.jpg"]
  }
];
/* valid JSON */

projects.display = function () {
  for (var proj in projects) {
    $("#projects").append(HTMLprojectStart);
    var projTitle = HTMLprojectTitle.replace('%data%', projects[proj].title);
    var projDates = HTMLprojectDates.replace('%data%', projects[proj].dates);
    var projDescription = HTMLprojectDescription.replace('%data%', projects[proj].description);
    var projImages = function () {
      var projImagesHTML = "";
      for (var imageIndex in projects[proj].images){
        projImagesHTML += HTMLprojectImage.replace('%data%', projects[proj].images[imageIndex]);
      };
      return projImagesHTML;
    };

    $(".project-entry:last").append(projTitle);
    $(".date-text:last").append(projDates);
    $(".project-entry:last").append(projDescription);
    $(".project-entry:last").append(projImages());
  }
};
projects.display();

/* Append bio except for skills to the HTML */
var formattedName = HTMLheaderName.replace('%data%', bio["name"]);
var formattedRole = HTMLheaderRole.replace('%data%', bio["role"]);
$("#header").append(formattedName);
$("#header").append(formattedRole);

/* Append bio.skills to the HTML */
//check if there are any skills in bio object
if (bio.skills.length > 0) {
  //if there are, append HTMLskillsStart to section.
  $("#header").append(HTMLskillsStart);
  //for each skills in array, append the formatted skill
  for (var i = 0; i < bio.skills.length; i++){
    var skillString = HTMLskills.replace('%data%', bio.skills[i]);
    $("#skills").append(skillString);
  };
}
else {
  console.log('No skills in bio.skills array');
};

function displayWork () {
  /* Append work object.jobs to the HTML */
  $("#workExperience").append(HTMLworkStart);
  for (jobIndex in work.jobs) {
    var thisEmployer = HTMLworkEmployer.replace('%data%', work.jobs[jobIndex].employer);
    var thisJobTitle = HTMLworkTitle.replace('%data%', work.jobs[jobIndex].title);
    var thisJob = thisEmployer + thisJobTitle;
    var thisDates = HTMLworkDates.replace('%data%', work.jobs[jobIndex].dates);
    var thisLocation = HTMLworkLocation.replace('%data%', work.jobs[jobIndex].location);
    var thisDescription = HTMLworkDescription.replace('%data%', work.jobs[jobIndex].description);

    $(".work-entry:last").append(thisJob);
    $(".work-entry:last").append(thisDates);
    $(".work-entry:last").append(thisLocation);
    $(".work-entry:last").append(thisDescription);
  }
}

displayWork();


/* Name internationalizer - formats name capitalisation and cardinality of names */
$("#main").append(internationalizeButton);

function inName (firstName, lastName) {
  var names = bio.name.split(' ');
  names[1] = names[1].toUpperCase();
  names[0] = names[0].toLowerCase();
  names[0] = names[0][0].toUpperCase() + names[0].slice(1);

  bio.name = names[0] + " " + names[1];
  console.log(bio.name);
  return bio.name;
}