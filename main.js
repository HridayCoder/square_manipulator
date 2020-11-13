noseX=0;
noseY=0;
RwristX=0;
LwristX=0;
difference=0;

function setup()
{
canvas=createCanvas(550,500);
canvas.position(700,100);
video=createCapture(VIDEO);
video.size(550,550);
video.position(80,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX= "+noseX+ " noseY= "+noseY);
RwristX=results[0].pose.rightWrist.x;
LwristX=results[0].pose.leftWrist.x;
difference=floor(LwristX-RwristX);
console.log("RwristX= "+RwristX +" LwristX= "+LwristX +" difference= "+difference);
}
}



function draw()
{
background('#F5F5F5');
stroke('#e75480');
fill('#e75480');
square(noseX,noseY,difference);
document.getElementById("display_size").innerHTML="width & height of the square :"+difference +" px";
}

function modelLoaded()
{
console.log("model Loaded !");
}

