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

var imgcard = document.querySelectorAll(".card-img-top");
var textcard = document.querySelectorAll(".card-text");
var view = document.querySelectorAll("button.btn.btn-sm.btn-success");

var solo = function() {
  
  if (imgcard[0].style.width != "20%") {
    imgcard[0].style.width = "20%"
    textcard[0].hidden = true
  } else {
    imgcard[0].style.width = "100%";
    textcard[0].hidden = false;
  }

};

view[0].addEventListener("mouseover", solo);


for (let i = 0; i < view.length; i++) {
  view[i].addEventListener("mouseover", viewmouse);

var viewmouse = function() {
  
 if (imgcard[i+1].style.width != "20%") {
    imgcard[i+1].style.width = "20%"
    textcard[i+1].hidden = true
  } else {
    imgcard[i+1].style.width = "100%";
    textcard[i+1].hidden = false;
  }

};
};

// Fonction 7

var greybtn = document.querySelector(".btn-secondary");
var cards = document.querySelectorAll(".col-md-4");
var firstcard = cards[0];
var lastcard = cards[cards.length - 1];

var insert = function() {
  var insertedNode = firstcard.parentNode.insertBefore(lastcard, firstcard);
};

greybtn.addEventListener("click", insert);


