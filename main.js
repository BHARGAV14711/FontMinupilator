LeftWristX = "";
RightWristX = "";
Difference = "";

function setup(){
    video = createCapture(VIDEO);
      video.size(550,500);

      canvas = createCanvas(550,500);
      canvas.position(560,150)

      poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on('poses', gotPoses)
}

function modelLoaded(){
console.log('PoseNet is initilized');
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results)
    }
}

function draw(){
 LeftWristX = results[0].pose.leftWrist.x;   
 RightWristX = results[0].pose.rigthWrist.x;
 Difference = floor(LeftWristX - RightWristX);background("red");

 
    textSize(DIfference);
    fill("orange");
    text("hi",50,50);
}