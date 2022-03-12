function preload()
{

}

function setup()
{
canvas=createCanvas(640, 480);
canvas.position(150, 150);
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
}

function draw()
{
image(video, 230, 150, 220, 200);
fill(255, 0, 0);
stroke(255, 0, 0);
circle(50, 50, 80);
circle(50, 430, 80);
circle(590, 50, 80);
circle(590, 430, 80);
fill(0, 128, 0);
stroke(0, 128, 0);
rect(90, 40, 460, 20);
rect(90, 420, 460, 20);
rect(40, 90, 20, 300);
rect(580, 90, 20, 300);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}


function take_snapshot()
{
    save('student_name.png');
}