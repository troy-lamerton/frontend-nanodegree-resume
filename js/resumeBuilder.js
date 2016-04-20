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
  years: 1,
  city: "Wellington"
};

var education = {
  name: "Victoria University",
  years: 1.5,
  city: "Wellington"
};


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
