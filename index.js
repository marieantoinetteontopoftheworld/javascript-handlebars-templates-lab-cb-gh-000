function createRecipe() {
  var name = document.getElementsByName('name')[0].value;
  alert(name);
}

function init() {
  //put any page initialization/handlebars initialization here

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
