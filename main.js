function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  mymodal=ml5.imageClassifier("MobileNet",modelLoaded)
  
}

function draw()
{
image(video,0,0,300,300)
mymodal.classify(video,gotResult)





}

function modelLoaded(){

console.log("MODEL IS LOADED");

}

function gotResult(error,results)
{
if(error){

console.log(error);

}
else{

console.log(results);
document.getElementById("on").innerHTML=results[0].label;
document.getElementById("ac").innerHTML=results[0].confidence.toFixed(2); 

}



}