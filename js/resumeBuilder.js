/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
	"jobs": [{
		"employer": "Geekskool",
		"title": "Student",
		"location": "Bangalore",
		"dates": "March 2016 to present",
		"description": "Learning Javascript"
	}, {
		"employer": "Tata Consultancy Services",
		"title": "Associate System Engineer",
		"location": "Bangalore",
		"dates": "November 2008 to March 2011",
		"description": "Web developer working on C# .Net"
	}]
};


var projects = {
	"projects": [{
		"title": "Voice Response Card Replacement",
		"dates": "October 2010 to Mar 2011",
		"description": "Designed and developed a Web Application that handles credit card replacement for various reasons (lost, stolen, damaged etc.,)"+
						" through voice response depending upon various conditions. Like, whether the customer is authenticated or not.",
		"images": ["URL1","URL2"]
	}, {
		"title": "ECCO (Extra-ordinary Customer Care Online)",
		"dates": "October 2009 to September 2010",
		"description": "Successfully designed and developed a web page to maintain port links with search options and integrated it to a maintenance tool" + 
						" Also removal of port URLs which are hardcoded in the code and moving them to a SQL table."+
						" And, by doing so, reduced the tight coupling of URLs with the code.",
		"images": ["URL1","URL2"]
	}, {
		"title": "Open Savings Migration Transformation",
		"dates": "June 2009 to September 2009",
		"description": "Successfully developed a web page in an application to store the information of various vendors "+
						"(like, last 10 months information about ongoing savings for each vendor.)",
		"images": ["URL1","URL2"]
	}]
};


var bio = {
	"name": "Shruthi",
	"role": "Web Developer",
	"contacts": {
		"mobile": "9916277438",
		"email": "lakshmi.shruthi@live.com",
		"github": "lakshmishruthi",
		"twitter": "",
		"location": "Bangalore, India"
	},
	"welcomeMessage": "Hello there!",
	"skills": ["Javascript", "HTML and CSS", "C#", ".Net"],
	"biopic": "images/myimg.jpg"
};


var education = {
	"schools": [{
		"name": "Sarvodaya Pre-University College",
		"location": "Tumkur",
		"degree": "PUC",
		"majors": ["Physics", "Chemistry", "Mathematics", "Biology"],
		"dates": 2004,
		"url": ""
		}, {
		"name": "Siddaganga Institute Of Technology",
		"location": "Tumkur",
		"degree": "Bachelor Of Engineering",
		"majors": ["Computer Science"],
		"dates": 2008,
		"url": ""
		}],
	"onlineCourses": [{
			"title": "Javascript Basics",
			"school": "Code Academy",
			"date": 2016,
			"url": "https://www.codecademy.com/learn/javascript"
		}, {
			"title": "Diplomo in Interior Decoration",
			"school": "Pennfoster",
			"date": 2013,
			"url": "http://www.pennfoster.edu/programs-and-degrees/home-and-garden/interior-decorator-career-diploma"
		}]
};


//document.getElementById("name").innerHTML = bio.name;

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedSkillsStart = HTMLskillsStart;


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedBiopic);
$("#header").append(formattedWelcomeMsg);

$("#header").append(formattedSkillsStart);

function displaySkills()
{
	for(var skill in bio.skills)
	{
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkills);
	}
}
displaySkills();

work.display = function (){
	for(var job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
	
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);	
		$(".work-entry:last").append(formattedWorkDescription);
	}
}
work.display();

projects.display = function (){
	for(var project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		//var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);		
		//$(".project-entry:last").append(formattedProjectImage);
	}
};
projects.display();

education.display = function (){
	for(var school in education.schools)
	{
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);

	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for(var course in education.onlineCourses)
	{
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
education.display();

$("#main").append(internationalizeButton);

function inName(name)
{
	name = bio.name.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0 , 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);


$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);
