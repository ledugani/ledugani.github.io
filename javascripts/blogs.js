var blogs = [
    {
      id: "blog1", 
      title: "Best First Day Ever!!!", 
      date: "02/12/2018", 
      post: "Today was the first day of class and it was the BEST!!!!!!!"
    },
    {
      id: "blog2", 
      title: "JavaScript is great", 
      date: "02/23/2018", 
      post: "Today was the first day of class and it was the BEST!!!!!!!"
    },
    {
      id: "blog3", 
      title: "JavaScript is terrible", 
      date: "03/4/2018", 
      post: "Today was the first day of class and it was the BEST!!!!!!!"
    }
];

function writeToDom(stringToPrint){
var getId = document.getElementById('my-blogs');
getId.innerHTML += stringToPrint;
}

function createBlogPosts() {
    blogs.forEach((blog, index) => {
      var card = "";
        card += ("<div class='card'>"
        + "<h2>" + blog.id + "</h2>"
        + "<h1 id='card-title'>" + blog.title + "</h1>"
        + "<h3>" + blog.date + "</h3>"
        + "<p id='blogposts'>" + blog.post + "</p>"
        + "</div>");
      writeToDom(card);
    });
}

createBlogPosts();