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

