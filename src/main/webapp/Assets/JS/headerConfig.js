// Edit here
var domainName = "Dueinator";
var name = "Michael Due Pedersen";
// Links (leave links blank to remove icons from webpage)
var github = "https://github.com/mich561d";
var stackoverflow = "https://www.google.dk/";
var linkedin = "https://www.google.dk/";
var facebook = "https://www.google.dk/";
var twitter = "https://www.google.dk/";

// Don't touch this!
var domainNameElement = document.getElementById("domain");
var nameElement = document.getElementById("name");
domainNameElement.innerHTML = domainName;
nameElement.innerHTML = name;

var socialMedia = document.getElementById("socialMedia");
if (github !== "") {
    socialMedia.innerHTML += "<a href=" + github + " target=\"_blank\"><img class=\"socialIcon\" src=\"Assets/Images/mark-github.svg\" alt=\"github\" /></a>";
}
if (stackoverflow !== "") {
    socialMedia.innerHTML += "<a href=" + stackoverflow + " target=\"_blank\"><img class=\"socialIcon\" src=\"Assets/Images/mark-stackoverflow.svg\" alt=\"stackoverflow\" /></a>";
}
if (linkedin !== "") {
    socialMedia.innerHTML += "<a href=" + linkedin + " target=\"_blank\"><img class=\"socialIcon\" src=\"Assets/Images/mark-linkedin.svg\" alt=\"linkedin\" /></a>";
}
if (facebook !== "") {
    socialMedia.innerHTML += "<a href=" + facebook + " target=\"_blank\"><img class=\"socialIcon\" src=\"Assets/Images/mark-facebook.svg\" alt=\"facebook\" /></a>";
}
if (twitter !== "") {
    socialMedia.innerHTML += "<a href=" + twitter + " target=\"_blank\"><img class=\"socialIcon\" src=\"Assets/Images/mark-twitter.svg\" alt=\"twitter\" /></a>";
}

// Need more links? add them in under here: