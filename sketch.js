function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
const speech = new SpeechSynthesisUtterance();
speech.text = "xuxu";
speech.lang = "pt br";

window.speechSynthesis.speak(speech);