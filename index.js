function createRecipe() {
  var name = document.getElementsByName('details')[0].value;
  var description = document.getElementsByName('details')[1].value;
  var ingredients = document.getElementsByName('ingredient');


  alert(ingredients[4].value);
}

function init() {
  //put any page initialization/handlebars initialization here

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
