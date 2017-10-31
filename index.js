function createRecipe() {
  var name = document.getElementsByName('details')[0].value;
  var desciption = document.getElementsByName('details')[1].value;

  var ingredient#1 = document.getElementsByName('recipe')[0].value;
  var ingredient#2 = document.getElementsByName('recipe')[1].value;
  var ingredient#3 = document.getElementsByName('recipe')[2].value;
  var ingredient#4 = document.getElementsByName('recipe')[3].value;
  var ingredient#5 = document.getElementsByName('recipe')[4].value;


  alert(ingredient#4);
}

function init() {
  //put any page initialization/handlebars initialization here

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
