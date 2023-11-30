function generateInfo(event) {
  event.preventDefault();

  let infoElement = document.querySelector("#info");

  new Typewriter("#info", {
    strings: "Information will be here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let generatorFormElement = document.querySelector("#ai-generator");
generatorFormElement.addEventListener("submit", generateInfo);
