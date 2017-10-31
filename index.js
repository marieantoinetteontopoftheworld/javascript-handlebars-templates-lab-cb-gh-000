function createRecipe() {
  var details = document.getElementsByName('details');
  var ingredients = document.getElementsByName('ingredient');


  alert(ingredients[4].value);
}

function init() {
  //put any page initialization/handlebars initialization here

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
