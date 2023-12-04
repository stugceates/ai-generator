function displayInfo(response) {
  console.log(response.data.answer);
  new Typewriter("#info", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

function generateInfo(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fa2f0ab0044e0f6ed0fo3e30511f6tbc";
  let prompt = `User instructions: give advices about ${instructionsInput.value}`;
  let context =
    "You are an intelligent world traveller and love give advices to people who on vacation. Your mission is give advices about touristic places. It must contain a must see historical place, a good coffee, breakfast and dinner place, with some historical info about the city. Make it a short, in basic HTML, use <strong> element only and separate each line with a <br>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let infoElement = document.querySelector("#info");
  infoElement.style.display = "block";
  infoElement.innerHTML = `<div class="generating"> ⏳ Geneterating infromation about ${instructionsInput.value}... `;
  axios.get(apiUrl, { timeout: 30000 }).then(displayInfo);
}

let generatorFormElement = document.querySelector("#ai-generator");
generatorFormElement.addEventListener("submit", generateInfo);
