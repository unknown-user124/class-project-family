function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0H2cwSjgT/model.json',modelLoaded);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error, results);
    } else {
        console.log(error,results);
        document.getElementById("itsSPANtag").innerHTML=results[0].label;
        document.getElementById("itsSPANtag1").innerHTML=results[0].confidence.toFixed(5);
    }
    
}
