var bio = {name: "Troy Lamerton",
           role: "Junior Web Developer",
           email: "troy.lamerton@gmail.com",
           picture: "http://www.gravatar.com/avatar/0eb38fc6ee95b244b8d45757ee242763",
           welcome: "Kia ora! This is my professional resume.",
           skills: ["collaborating", "building websites", "analysis"]
         };
var allSkills = HTMLskillsStart;

// add list item for each skill in array
for (var i in bio["skills"]) {
  allSkills += HTMLskills.replace('%data%', bio["skills"][i]);
};
/* End of bio */

var work = {
  position: "Content Loader",
  employer: "Education Review Office",
  dates: "February 2016 to Present",
  city: "Wellington"
};

var education = {
  "schools":[
      {
        "name": "Victoria University",
        "dates": "2014 to 2015",
        "city": "Wellington"
      },
      { 
        "name": "Hutt Internationl Boys School",
        "dates": "2007 to 2013",
        "city": "Upper Hutt",
        "qualification": "NCEA Level 3 with Merit endorsement"
      }
  ]
};

/* Bio replacements and updating html */
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var myPicture = HTMLbioPic.replace('%data%', bio.picture);
var myEmail = HTMLemail.replace('%data%', bio.email);
var myWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcome);

$('#header').prepend(formattedName);
$('#header').append(formattedRole);
$('#header').append(myWelcomeMessage);

$('#topContacts').append(myEmail);
$('#header').append(myPicture);
$('#header').append(allSkills);

/* Work replacements and updating html */
var myWorkStart = HTMLworkStart;
var myWorkEmployer = HTMLworkEmployer.replace('%data%', work["employer"]);
var myWorkTitle = HTMLworkTitle.replace('%data%', work["position"]);
var myWorkDates = HTMLworkDates.replace('%data%', work["dates"]);
var myWorkLocation = HTMLworkLocation.replace('%data%', work["city"]);
$('#workExperience').append(myWorkStart);
$('#workExperience').append(myWorkEmployer + myWorkTitle);
$('#workExperience').append(myWorkDates);
$('#workExperience').append(myWorkLocation);

/* School replacements and updating html */
$('#education').append(HTMLschoolStart);
var mySchoolName = HTMLschoolName.replace('%data%', education.schools[0].name);
var mySchoolDates = HTMLschoolDates.replace('%data%', education.schools[0].dates);
var mySchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[0].city);

$('#education').append(mySchoolName);
$('#education').append(mySchoolDates);
$('#education').append(mySchoolLocation);