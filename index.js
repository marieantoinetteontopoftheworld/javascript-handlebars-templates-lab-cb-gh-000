function createRecipe() {
  var name = document.getElementsByName('details')[0].value;
  var description = document.getElementsByName('details')[1].value;

  var ingredient_1 = document.getElementsByName('ingredient')[0].value;
  var ingredient_2 = document.getElementsByName('ingredient')[1].value;
  var ingredient_3 = document.getElementsByName('ingredient')[2].value;
  var ingredient_4 = document.getElementsByName('ingredient')[3].value;
  var ingredient_5 = document.getElementsByName('ingredient')[4].value;


  alert(ingredient_4);
}

function init() {
  //put any page initialization/handlebars initialization here

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
