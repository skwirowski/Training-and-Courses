// next - go after contact-methods id and get the next element in line
$("#contact-methods").next().css({border: "3px solid rgba(255, 0, 0, 0.3)"});

// prev - get pinterest class within social-nav id then get me a previous one
$("#social-nav .pinterest").prev().css({border: "3px dotted rgba(0, 255, 0, 0.5)"});

// parent - get me the banner-title class then go and get me parent element
$(".banner-title").parent().css({border: "3px solid pink"});

// parents - give me all the parents of this banner-title class until the body tag
$(".banner-title").parents().css({backgroundColor: "rgba(0, 255, 0, 0.1)"});

// children - get the contact-methods id and find me all the children within it
$("#contact-methods").children().css({border: "3px dotted rgba(255, 165, 0, 0.8)"});

// find - grab an element with id contact, find within selected element, a class called facebook and if facebook class exists within contact id bring that back to me (for performance issues find method is quicker than ("#contact .facebook")
$("#contact").find(".facebook").css({border: "3px dotted rgba(255, 0, 255, 0.5)"});

// closest - move up the DOM to find the nearest parent to match whichever element we choose, in this case go get me social-nav id then get me the closest parent which is the wrapper class
$("#social-nav").closest(".wrapper").css({border: "3px dotted rgba(255, 105, 180, 0.9)"});