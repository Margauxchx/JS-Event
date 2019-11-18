var imgcard = document.querySelectorAll(".card-img-top");
var textcard = document.querySelectorAll(".card-text");
var view = document.querySelectorAll("button.btn.btn-sm.btn-success");
console.log(view[0]);

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
  console.log("Ca marche");
  
 if (imgcard[i+1].style.width != "20%") {
    imgcard[i+1].style.width = "20%"
    textcard[i+1].hidden = true
  } else {
    imgcard[i+1].style.width = "100%";
    textcard[i+1].hidden = false;
  }

};
};