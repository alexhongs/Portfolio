// last updated: 02/18/19

$(window).on("load",function () {
  console.log("loaded");
  resize_navblock();
});


$(window).on("resize",function () {
  console.log("resizing");
  resize_navblock();
});

//Resize navigation-bar block
function resize_navblock(){
  $("#navblock").height($("nav").outerHeight(true));
}


$("p").on("click", function(){
  alert("The paragraph was clicked.");
});


var x = "Total Height: " + screen.height;





//Hiding and unhiding navbar
var prevScrollpos = window.pageYOffset;
$(window).on("scroll", function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-10%";
  }
  prevScrollpos = currentScrollPos;
});

$(document).ready(function(){
  // Looks nice to have scrolling to top, 
  // but if its lagging, we can make it href=# method
  $(".navbar-brand").click(function() {
    console.log("navbar clicked");
    $('html,body').animate({
        scrollTop: $("html").offset().top},
        'fast');
  });

  //Scroll to the projects section
  $("#nextbutton").click(function() {
    $('html,body').animate({
        scrollTop: $(".project-list").offset().top},
        'slow');
  });

  //Scroll to specific projects
  //Could make this less redudant, but later
  $("#table-myo").click(function(e){
    $('html,body').animate({
        scrollTop: $("#project-myo").offset().top},
    'slow');
  });

  $("#table-baxter").click(function(e){
    $('html,body').animate({
        scrollTop: $("#project-baxter").offset().top},
    'slow');
  });

  $("#table-fortress").click(function(e){
    $('html,body').animate({
        scrollTop: $("#project-fortress").offset().top},
    'fast');
  });

  $("#table-tap").click(function(e){
    $('html,body').animate({
        scrollTop: $("#project-tap").offset().top},
    'fast');
  });

})
