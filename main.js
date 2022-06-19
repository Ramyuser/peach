function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#ff0000");
    stroke("#ff0000");
    song_variable.isPlaying()
    if (scoreleftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        song_variable.stop("music2.mp3")
    }
    if (music.mp3 == false) {
        song_variable.isPlaying()
    }
}
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

scoreleftWrist = 0;

function preload() {
    song = loadSound("music2.mp3");
    song = loadSound("music.mp3");
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPose(results) {
    if (results.length > 0) {
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist = " + scoreleftWrist);
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

    }
}