var data = {};

function initialRender() {
  data['function_call'] = 'createRecipe()';

  data['name'] = '';
  data['description'] = '';
  data['ingredients'] = [];
  data['ingredients'][0] = '';
  data['ingredients'][1] = '';
  data['ingredients'][2] = '';
  data['ingredients'][3] = '';
  data['ingredients'][4] = '';

  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var result = template(data);

  document.getElementsByTagName('main')[0].innerHTML += result;
}

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

  document.getElementsByTagName('main')[0].innerHTML += result;
}

function displayEditForm() {
  data['function_call'] = 'updateRecipe()';

  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var result = template(data);

  document.getElementsByTagName('recipe')[0].innerHTML += result;
}

function updateRecipe() {
  if (document.getElementsByName('details')[0].value) {
    data['description'] = document.getElementsByName('details')[0].value;
  }

  if (document.getElementsByName('details')[1].value) {
    data['name'] = document.getElementsByName('details')[1].value;
  }

  var ingredientsNodes = document.getElementsByName('ingredient');

  for (i = 0; i < ingredientsNodes.length; i++) {
    if (ingredientsNodes[i].value) {
      data['ingredients'][i] = ingredientsNodes[i].value;
    }
  }

  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var result = template(data);

  document.getElementById('recipe-form').remove();
  document.getElementById('recipe').innerHTML = result;
}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString('<li>' + this + '</li>');
  });

  //
  initialRender();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
