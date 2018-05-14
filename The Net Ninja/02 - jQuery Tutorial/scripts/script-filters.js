// first and last - go to the header, find the nav, li's within that nav and get me the first/last one
$("header nav li:first").css({border: "2px solid red"});
$("header nav li:last").css({border: "2px solid red"});

// first-child and last-child
$("#contact h2:first-child").css({border: "2px solid magenta"});
$("#contact p:last-child").css({border: "2px solid magenta"});

// even and odd
$("header nav li:even").css({background: "blue"});
$("header nav li:odd").css({background: "orange"});

// not - give me all section elements that do not match this selector :not('selector')
$("section:not('#contact')").css({border: "2px solid green"});

// less than (lt) and greater than (gt) - go to the social-nav, get the li's within it then return any li's that is less/greater than index 3/2
$("#social-nav li:lt(3)").css({border: "2px solid lightblue"});
$("#social-nav li:gt(2)").css({border: "2px solid blue"});

// attribute filter - go after all the div's on the page which has a class (it doesn't matter what class that is)
$("div[class]").css({border: "2px solid pink"});

// attribute with specific value - get all the images with alt attribute equal "quote"
$("img[alt=quote]").css({border: "2px solid purple"});