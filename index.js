function createRecipe() {
  var details = document.getElementsByName('details');
  var name = details[0].value;
  var description = details[1].value;

  var ingredients = document.getElementsByName('ingredient');
}

function init() {
  //put any page initialization/handlebars initialization here

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
