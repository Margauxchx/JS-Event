// Fonction 1

var footerClick = document.querySelector("footer");
i = 1

var onFooterClick = function(){
  console.log("clique n°" + i)
  i++
};

footerClick.addEventListener("click",onFooterClick);

// Fonction 2

var hamburgerMenu = document.getElementById("navbarHeader");
var hamburgerbtn = document.querySelector(".navbar-toggler");

var onMenuClick = function() {
 hamburgerMenu.classList.toggle("collapse")
};

hamburgerbtn.addEventListener("click", onMenuClick);

// Fonction 3

var edit = document.getElementsByClassName("card")[0];
var editbtn = edit.getElementsByClassName("btn")[1];

var onEditClick = function() {
  editbtn.style = "color: red"
};

editbtn.addEventListener("click", onEditClick);

// Fonction 4

var edit2 = document.getElementsByClassName("card")[1];
var editbtn2 = edit2.getElementsByClassName("btn")[1];

var onEditClick2 = function() {
  if (editbtn2.style.color === 'green'){ 
editbtn2.style.color = '' ; 
}else editbtn2.style.color = 'green'
};

editbtn2.addEventListener("click", onEditClick2);

// Fonction 5

var navbarDblClick = document.getElementsByClassName("navbar")[0];
var bootstrap = document.getElementsByTagName("head")[0].getElementsByTagName("link")[0];


var onNavbarDblClick = function() {
  if (bootstrap.disabled) {
    bootstrap.disabled = false;
  } else {
    bootstrap.disabled = true;
  }
};

navbarDblClick.addEventListener("dblclick", onNavbarDblClick);


// Fonction 6

var imgcard = document.querySelectorAll(".card-img-top")[0];
console.log(imgcard);
var textcard = document.querySelectorAll(".card-text")[0];
console.log(textcard);
var view = document.querySelectorAll("button.btn.btn-sm.btn-success")[0];
console.log(view);

var viewmouse = function() {
  console.log("Ca marche");
  
  if (imgcard.style.width != "20%") {
    imgcard.style.width = "20%"
    textcard.hidden = true
  } else {
    imgcard.style.width = "100%";
    textcard.hidden = false;
  }

};

view.addEventListener("mouseover", viewmouse);

// Fonction 7

var greybtn = document.querySelector(".btn-secondary");
console.log(greybtn);
var cards = document.querySelectorAll(".col-md-4");
var firstcard = cards[0];
var lastcard = cards[cards.length - 1];

var insert = function() {
  var insertedNode = firstcard.parentNode.insertBefore(lastcard, firstcard);
};

greybtn.addEventListener("click", insert);


