let voices;
const msg = new SpeechSynthesisUtterance()
const skille = [
    {
        prefix: 'youtube',
        skill: function(){
            document.body.style.backgroundColor = 'red'
            msg.text = "costam"
            window.speechSynthesis.speak(msg)
            location.href = "https://www.youtube.com/?gl=PL&hl=pl"
        }
    },
    {
        prefix: 'facebook',
        skill: function(){
            document.body.style.backgroundColor = 'blue'
            msg.text = "costam"
            window.speechSynthesis.speak(msg)
            window.open("https://pl-pl.facebook.com")
        }
    }
];

function execute(command){
    const run = skille.find( (skill)=> command.includes(skill.prefix) );
    run.skill()
}


window.speechSynthesis.addEventListener('voiceschanged', (e)=>{
    voices = window.speechSynthesis.getVoices();
    console.dir(voices)
    msg.voice = voices[0];
})