window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//window.SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webiktSpeechRecognitionEvent

// Pobieramy elemetow DOM z htmla
const BUTTON = document.querySelector('input');
const RESULT = document.querySelector('#result');
const CONFIDENCE = document.querySelector('#confidence');
const STAN = document.querySelector('#stan');

// Create Speech Recognition
const ALEXA = new SpeechRecognition();
//ALEXA.maxAlternatives = 10;
ALEXA.lang = 'pl-PL';

// Ustawienie Event Handlerów Speech Recogniton
ALEXA.addEventListener('start', function(){
    STAN.innerHTML = 'Nasłuchuje';
});

ALEXA.addEventListener('result', function(event){
    const text = event.results[0][0].transcript;
    RESULT.innerHTML = text;
    CONFIDENCE.innerHTML = (event.results[0][0].confidence * 100) + '%';
    execute(text)
});

ALEXA.addEventListener('end', function(){
    STAN.innerHTML = 'Koniec nasłuchiwania'
})

// Event Handler Przycisku
BUTTON.addEventListener('click',function(){
    ALEXA.start();
})







