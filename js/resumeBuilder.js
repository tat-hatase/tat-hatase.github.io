var bio = {
	"name" : "tat hatase",
	"role" : "Math Instructor",
	"contacts" : {
      "mobile": "541-908-4483",
      "email": "hataset@onid.orst.edu",
      "github": "tat-hatase",
      "twitter": "@TweetForTat",
      "location": "Corvallis, OR"
	},
	"welcomeMessage": "Welcome to my resume page!",
	"skills": ["strategic problem solving", "teaching", "some computer stuff"],
	"biopic": "images/profile.jpg",
	"display": function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);

		if (bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for (var skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			};
		};
	}
}


var education = {
	"schools": [{
      "name": "Oregon State University",
      "location": "Corvallis, OR",
      "degree": "BS",
      "majors": "Mathematics",
      "dates": 2004,
      "url": "http://oregonstate.edu/"
	  },
	  {
      "name": "Oregon State University",
      "location": "Corvallis, OR",
      "degree": "MS",
      "majors": "Mathematics",
      "dates": 2006,
      "url": "http://oregonstate.edu/"
	  },
	  {
      "name": "Oregon State University",
      "location": "Corvallis, OR",
      "degree": "PhD",
      "majors": "Mathematics",
      "dates": 2011,
      "url": "http://oregonstate.edu/"
	  }],
	"onlineCourses": [{
      "title": "Intro to Programming Nanodegree",
      "school": "Udacity",
      "date": 2015,
      "url": "https://www.udacity.com"
	  }],
	"display": function(){
		for (var school in education.schools){
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		};
		
		if (education.onlineCourses.length > 0){
			$("#education").append(HTMLonlineClasses);
			
			for (var course in education.onlineCourses){
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				
				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDate);
				
			};
		};
	}
}

var work = {
	"jobs": [{
      "employer": "Oregon State University Department of Mathematics",
      "title": "Instructor",
      "location": "Corvallis, OR",
      "dates": "2011-Present",
      "description": "Teaching lower to mid level math courses.",
	  "url": "http://www.math.oregonstate.edu/"
	  },
	  {
	  "employer": "Oregon State University Department of Mathematics",
      "title": "Graduate Teaching Assistant",
      "location": "Corvallis, OR",
      "dates": "2004-2011",
      "description": "Assisting the instructors of lower to mid level math courses by facilitating recitations, grading homework, quizzes, and worksheets, proctoring exams, and answering questions the students may have. Taking on the teaching position for smaller classes about once a year.",
	  "url": "http://www.math.oregonstate.edu/"
	  }],
	"display": function(){
		for (var job in work.jobs){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		};
	}
}

var projects = {
	"projects": [{
      "title": "PhD Thesis",
      "dates": "Completed Summer 2011",
      "description": "Algebraic Pappus Curves",
      "images": ["images/Excellent.jpg", "images/logo.jpg", "images/Photobomb.jpg"],
	  "url": "https://ir.library.oregonstate.edu/xmlui/bitstream/handle/1957/23320/Tatsuhiko%20Hatase%20-%20Thesis.pdf?sequence=1"
	  }],
	"display": function(){
		for (var project in projects.projects){
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#",projects.projects[project].url);
			var formattedProjectDates= HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			
			$("#projects").append(HTMLprojectStart);
			$(".project-entry").append(formattedProjectTitle);
			$(".project-entry").append(formattedProjectDates);
			$(".project-entry").append(formattedProjectDescription);
			for (image in projects.projects[project].images){
				$(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
			};
			
		};
	}
}

bio.display();
education.display();
work.display();
projects.display();

function inName() {
	var name = $("#name").text();
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	
	return name[0] + " " + name[1];
};


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);