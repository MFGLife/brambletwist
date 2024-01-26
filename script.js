
const targetY = window.scrollY + 2600;
let currentY = window.scrollY;

function scrollAnimation() {
  if (currentY < targetY) {
    currentY += Math.min(targetY - currentY, 20); // Scroll in increments of 20px for smoother animation
    window.scrollTo(0, currentY);
    requestAnimationFrame(scrollAnimation);
  }
}


var message = document.querySelector('#message');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    message.textContent = 'Voice Input: ' + command + '.';

    if(command.toLowerCase() === 'code unveiled puzzle cracked follow the path truth unstacked'){
        document.querySelector('#chkSteve').checked = true;
        document.getElementById('hidden').style.display = "block";
        scrollToAbsoluteBottom();
    }
 
};

recognition.onspeechend = function() {
    recognition.stop();
};

recognition.onerror = function(event) {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}        

document.querySelector('#btnGiveCommand').addEventListener('click', function(){
    recognition.start();
    
});

  
  // Function for scrolling to the absolute bottom
  function scrollToAbsoluteBottom() {
    const targetY = document.body.scrollHeight; // Get actual content height
    let currentY = window.scrollY; // Get current scroll position
  
    function scrollAnimation2() {
      if (currentY < targetY) {
        currentY += Math.min(targetY - currentY, 20);
        window.scrollTo(0, currentY);
        requestAnimationFrame(scrollAnimation2);
      }
    }
  
    scrollAnimation2();
  }
  
