function generateRecipe(event) {
  event.peventDefault();

  new Typewriter("#typewriter", {
    strings: [
      "Welcome to Mo's Recipe Generator!",
      "Let's create a delicious recipe together.",
      "What ingredients do you have?",
      "Cooking is an art, let's paint a masterpiece!",
      "Your culinary adventure starts here!",
    ],
    autoStart: true,
    delay: 75,
    loop: true,
  });
}

let formElement = document.querySelector("#recipe-form");
formElement.addEventListener("submit", generateRecipe);
alert(
  "Welcome to Mo's Recipe Generator! Please fill out the form to get started."
);
