function displayRecipe(response) {
  const container = document.querySelector("#typewriter");
  if (!response || !response.data || !response.data.answer) {
    console.error("Invalid response format");
    return;
  }

  new Typewriter("#typewriter", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    loop: false,
    cursor: "|",
  }).start();
}
function generateRecipe(event) {
  event.preventDefault();

  let recipeInput = document.querySelector("#recipe-input");
  let recipeValue = recipeInput.value.trim();

  let apiKey = "6b0de8c4f230fd2bf4t68daf5046oe9a";

  let prompt = `Create a recipe for ${recipeValue} that includes <h3>ingredients</h3>, <h3>instructions</h3>, <h3>cooking time</h3> and <h3>serving</h3>. `;

  let context =
    "You are a professional chef with expertise in creating delicious recipes. Your task is to generate a complete recipe based on the given input. Make sure to include all necessary details such as ingredients, instructions, image and cooking time. Make the recipe easy to follow and suitable for home cooks.Write the recipe in <li> tags, with each instruction in a separate <li> tag. Do not include any additional text or explanations outside of the recipe steps.Seperate each step with a <br> tag.Add margins to the heading and the steps. Use a font size of 20px for the heading and 16px for the steps. Use a sans-serif font for both the heading and the steps. The heading should be bold and centered. The steps should be left-aligned.Sepatate the steps topic with a <h2> tag and the steps with a <ul> tag. Use a sans-serif font for both the heading and the steps. The heading should be bold and centered. Sign with  `SheCodes AI` at the end of the recipe make it bold. ";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = `<div class="generating ">🍲🍲🍲</div>`;

  axios
    .get(apiUrl)
    .then(displayRecipe)
    .catch((error) => {
      console.error("Error fetching recipe:", error);
    });
}

let recipeForm = document.querySelector("#recipe-form");
recipeForm.addEventListener("submit", generateRecipe);
