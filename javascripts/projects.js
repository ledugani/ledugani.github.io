console.log("projects");

var projects = [
  {
    image: "http://placeimg.com/500/500/animals",
    id: "project1", 
    title: "Cool Project", 
    imageUrl: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project",
    githubUrl: "https://github.com/nss-evening-cohort-7/jsArrays"
    },
  {
    image: "http://placeimg.com/500/500/animals",
    id: "project2", 
    title: "Awesome Project", 
    imageUrl: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the second best project",
    githubUrl: "https://github.com/nss-evening-cohort-7/jsArrays"
    },
  {
    image: "http://placeimg.com/500/500/animals",
    id: "project3", 
    title: "Great Project", 
    imageUrl: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the third best project",
    githubUrl: "https://github.com/nss-evening-cohort-7/jsArrays"
    },
  {
    image: "http://placeimg.com/500/500/animals",
    id: "project4", 
    title: "Super Project", 
    imageUrl: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the fourth best project",
    githubUrl: "https://github.com/nss-evening-cohort-7/jsArrays"
    },
  {
    image: "http://placeimg.com/500/500/animals",
    id: "project5", 
    title: "Sweet Project", 
    imageUrl: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the fifth best project",
    githubUrl: "https://github.com/nss-evening-cohort-7/jsArrays"
    },
  {
    image: "http://placeimg.com/500/500/animals",
    id: "project6", 
    title: "Rad Project", 
    imageUrl: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the sixth best project",
    githubUrl: "https://github.com/nss-evening-cohort-7/jsArrays"
    }
];

function printToDom(stringToPrint){
    // take string and innerHTML to the divID
    var getId = document.getElementById('my-projects');
    getId.innerHTML += stringToPrint;
}

function createProjectCards() {
    projects.forEach((project, index) => {
        var card = "";
        if (index % 2 === 0) {
            card += "<main class='flex'>"
        }
        card += ("<div class='card'>"
        + "<img src='" + project.image + "' alt='project 6 screenshot' class='profile-image'>"
        + "<h2>" + project.id + "</h2>"
        + "<p>" + project.description + "</p>"
        + "<a href='" + project.githubUrl + "'>" + "Click Here </a>"
        + "</div>");
        if (index % 2 !== 0) {
            card += "</main>";
        }
        printToDom(card);
    });
}

createProjectCards();