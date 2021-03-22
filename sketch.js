let classifier;

let label = "listening";

let soundModelURL = 'https://teachablemachine.withgoogle.com/models/cPSqEFmpW/model.json';

function preload() {
  classifier = ml5.soundClassifier(soundModelURL);
}

function setup() {
  createCanvas(640,520);
  //Continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);

  let emoji = '🦻'
  if (label == 'Classical'){
    emoji = '🎹'
  } else if (label == 'Jazz') {
    emoji = '🎷'
  } else if (label == 'Rock'){
    emoji = '🎸'
  }

  textSize(256);
  text(emoji, width / 2, height / 2);
}


function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  label = results[0].label;
}