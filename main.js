function startclassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xgxu1Sh3s/model.json", modelloaded)
}
function modelloaded() {
    classifier.classify(gotresults)
}
function gotresults(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r);
        document.getElementById("resultlabel").innerHTML = "i can hear- " + r[0].label
        document.getElementById("resultconfidence").innerHTML = "accuracy- " + (r[0].confidence * 100).toFixed(2) + " %"
        if (r[0].label == 'Cat') {
            document.getElementById("animal").src = "cat.jpg"
        } else if (r[0].label == 'Dog') {
            document.getElementById("animal").src = "Dog.png"
        } else if (r[0].label == 'Parrot') {
            document.getElementById("animal").src = "parrot.jpg"
        } else {
            document.getElementById("animal").src = "ear.jpg"
        }
    }
}