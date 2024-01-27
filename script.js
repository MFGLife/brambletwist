
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
  
// Set the date we're counting down to
var countDownDate = new Date("Mar 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
    
  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

    function loadIframe() {
      var iframe = document.getElementById("augment");
      iframe.src = "ar/index.html";
      iframe.style.display = "block";
      document.getElementById("realityB").style.display = "none";
      document.getElementById("realityL").style.display = "block";
    }

