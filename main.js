Webcam.attach('#camera');

camera= document.getElementById('camera')

Webcam.set({

image_format : 'png',
png_quality:90    
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML='<img id ="selfie_image" src="'+data_uri+'"/>'; 
});
}
console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier('/model.json', modelLoaded)



function check(){

}

function gotResult(error,results) {
if (error) {
console.error(error);
} else {
console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
}}
   