function createRecipe() {
  var details = document.getElementsByName('details');

  //BTW
  var name = details[0].value;
  var description = details[1].value;

  var ingredients = document.getElementsByName('ingredient');

  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var result = template(details);

  document.getElementByTagName('main')[0] += result; 
}

function init() {
  //put any page initialization/handlebars initialization here

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
