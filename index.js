function createRecipe() {
  var name = document.getElementsByName('details')[0].value;
  var description = document.getElementsByName('details')[1].value;

  var ingredient_1 = document.getElementsByName('recipe')[0].value;
  var ingredient_2 = document.getElementsByName('recipe')[1].value;
  var ingredient_3 = document.getElementsByName('recipe')[2].value;
  var ingredient_4 = document.getElementsByName('recipe')[3].value;
  var ingredient_5 = document.getElementsByName('recipe')[4].value;


  alert(ingredient_4);
}

function init() {
  //put any page initialization/handlebars initialization here

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
