function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses)
}

function ModelLoaded() {
   console.log("Model Loaded");
}

function draw() {
    background("#f2e6ff");
    fill("#F90093");
    stroke("#F90093");
    square(nosex, nosey, Difference);
    document.getElementById("square_side").innerHTML = "Width and Hieght are of a square = " + Difference + "px";
}

function gotPoses(results) {
   if (results.length > 0) {
    console.log(results)
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("nosex" + nosex + "nosey" + nosey);
    Leftwristx = results[0].pose.leftWrist.x;
    Rightwristx = results[0].pose.rightWrist.y;
    Difference = floor(Leftwristx - Rightwristx);
    console.log("leftwristx = " + Leftwristx + "rightwristy = " + Rightwristx + "Difference = " + Difference);
   } 
}

nosex = 0;
nosey = 0;
Difference = 0;
Leftwristx = 0;
Rightwristy = 0;


