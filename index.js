var data = {};

function createRecipe() {
  var details = document.getElementsByName('details');

  data = {
    name: details[0].value,
    description: details[1].value
  };

  var ingredientsNodes = document.getElementsByName('ingredient');

  var ingredients = [];
  for (i = 0; i < ingredientsNodes.length; i++) {
    if (ingredientsNodes[i].value) {
      ingredients[i] = ingredientsNodes[i].value;
    }
  }

  data['ingredients'] = ingredients;

  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var result = template(data);

  document.getElementsByTagName('main')[0].innerHTML = result;
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById('recipe-edit-form-template').innerHTML);
  var result = template(data);

  document.getElementsByTagName('main')[0].innerHTML += result;
}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString('<li>' + this + '</li>');
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
