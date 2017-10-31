function createRecipe() {
  var details = document.getElementsByName('details');

  var data = {
    name: details[0].value,
    description: details[1].value
  };

  var ingredients = document.getElementsByName('ingredient');

  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var result = template(data);

  document.getElementById('main') += result;
}

function init() {
  //put any page initialization/handlebars initialization here

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
