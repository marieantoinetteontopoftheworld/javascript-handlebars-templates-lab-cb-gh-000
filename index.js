function createRecipe() {
  var details = document.getElementsByName('details');

  var data = {
    name: details[0].value,
    description: details[1].value
  };

  var ingredientsNodes = document.getElementsByName('ingredient');

  data['ingredients'] = [];
  for (i = 0; i < ingredientsNodes.length; i++) {
    data[ingredients[i]] = ingredientsNodes[i].value;
  }

  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var result = template(data);

  document.getElementsByTagName('main')[0].innerHTML = result;
}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
