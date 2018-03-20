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
      post: "This week we were introduced to the wonders of JavaScript, which makes the web interactive and responsive! I didn't think I knew much JS or understood it at all, but after the first few challenges, I was feeling confident in my abilities. We only covered the basics (variables, arrays, and calling them), but I can safely say I am ready for more challenging material over the next week or two. <br> We "
    },
    {
      id: "blog3", 
      title: "JavaScript is terrible", 
      date: "03/4/2018", 
      post: "This week, we covered iteration methods and using them to simplify code. We started off going over how everyone accomplished the challenges assigned from the previous week, which was eye opening just to see how many different ways you can accomplish a single task. Then, our instructor went over much simpler methods to use which accomplished the same tasks using a lot less code. At first, I was completely lost and confused about how any of it worked and this continued through the remainder of class. I went home feeling like I'd been pushed off the ledge into the murky depths of JS. After struggling all evening attempting to completely understand everything that had been presented, I decided to sleep on it and tackle it the next day. Praises to Treehouse and their amazingly helpful videos. I covered iteration methods and callback functions through Treehouses courses and practiced them repeatedly. It was really difficult to grasp certain concepts in the beginning, but eventually (after lots and lots of practice), I was able to move through problems utilizing JavaScript's multitude of methods and functions. More specifically, I had a really hard time conceptualizing the functionality of the forEach, map, and filter methods, which seemed counterintuitive initially. As I continued to use them, I found the more I wrote the code, the more it made sense. I will definitely remember that from here on out."
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