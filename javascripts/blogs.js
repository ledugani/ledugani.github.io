var blogs = [
    {
      id: "blog1", 
      title: "Best First Day Ever!!!", 
      date: "02/12/2018", 
      post: "Boy, these first two weeks have made my brain hurt. The first week teased me by making me think I was ahead of the game. We went over html, replicated a static page, and discussed how we should go about completing these first projects. The latter being a helpful lesson that, while we will spend a lot of time coding, 80% of the initial work will be planning. After finishing CSS on Saturday, I still felt pretty confident in my abilities, however, my naivity has swiftly come back to bite me. The second week we really hit the ground running. Learning the ins, outs, and throughs of the command line, followed promptly by the basics of using git. I had some experience with the linux command line before, so it wasn't terribly indecipherable to figure out the commands on my macbook's terminal. Learning GitHub and how it interacts with git was where I ran into trouble. Understanding how these two work in conjunction with each other was my equivalent of learning theoretically physics. Time is a straight line (the local master continues on its own path), which can branch into multiple realities (creating a branch and making changes) but can then merge back into the parallel reality (the origin master). It sounds ridiculous, but it makes sense to me. And, hey, if it makes sense to me, I can't be doing too shabby, right?",
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