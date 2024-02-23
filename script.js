
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

    if (command.toLowerCase() === 'the botanist'){
        document.querySelector('#botanist').checked = true;
        document.getElementById('players').src = 'https://the-profane.com/player1.html';
        window.scrollBy(0, -600);
    } else if (command.toLowerCase() === 'the mechanic'){
      document.querySelector('#mechanic').checked = true;
      document.getElementById('players').src = 'https://the-profane.com/player2.html';
      window.scrollBy(0, -600);
    } else if (command.toLowerCase() === 'the assessor'){
      document.querySelector('#assessor').checked = true;
      document.getElementById('players').src = 'https://the-profane.com/player3.html';
      window.scrollBy(0, -600);
    }
    else if (command.toLowerCase() === 'the purifier'){
      document.querySelector('#purifier').checked = true;
      document.getElementById('players').src = 'https://the-profane.com/player4.html';
      window.scrollBy(0, -600);
    }
    else if (command.toLowerCase() === 'the historian'){
      document.querySelector('#historian').checked = true;
      document.getElementById('players').src = 'https://the-profane.com/player5.html';
      window.scrollBy(0, -600);
    }
    else if (command.toLowerCase() === 'the sanitizer'){
      document.querySelector('#sanitizer').checked = true;
      document.getElementById('players').src = 'https://the-profane.com/player6.html';
      window.scrollBy(0, -600);
    }
    else if (command.toLowerCase() === 'the chemist'){
      document.querySelector('#chemist').checked = true;
      document.getElementById('players').src = 'https://the-profane.com/player7.html';
      window.scrollBy(0, -600);
    }
    else if (command.toLowerCase() === 'the blender'){
      document.querySelector('#blender').checked = true;
      document.getElementById('players').src = 'https://the-profane.com/player8.html';
      window.scrollBy(0, -600);
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
  document.getElementById("countdown").innerHTML = "opens in " + days + "d " + hours + "h";
    
  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

    function loadIframe() {
      var iframe = document.getElementById("augment");
      iframe.src = "test.html";
      iframe.style.display = "block";
      document.getElementById("realityB").style.display = "none";
    }


    

    const snacks = [
      {
        name: "10 Pretzel Balls",
        ingredients: ["Flour", "Water", "Salt", "Honey", "Butter", "Yeast", "Backing Soda", "Milk"],
      },
      {
        name: "6 Donuts",
        ingredients: ["Flour", "Eggs", "Milk", "Honey", "Veg Oil", "Vanilla Extract", "Cinnamon", "Nutmeg", "Allspice"],
      },
      {
        name: "20 Pina Colada Gummies",
        ingredients: ["Gelatin", "Honey", "Pineapple Juice", "Coconut Milk"],
      },
      {
        name: "10oz Kale Chips",
        ingredients: ["Kale, Olive Oil, Sea Salt"],
      },
    ];
    const snackItems = document.querySelectorAll(".snack-item");
const ingredientList = document.getElementById("ingredient-list");

// Function to display ingredients based on clicked item's text content
const showIngredients = (snackName) => {
  // Find the matching snack object based on the name
  const selectedSnack = snacks.find((snack) => snack.name === snackName);

  if (selectedSnack) {
    ingredientList.innerHTML = `<h2>${selectedSnack.name} Ingredients:</h2><p>`;
    ingredientList.innerHTML += selectedSnack.ingredients.join(", ");
    ingredientList.innerHTML += "</p>";
  } else {
    ingredientList.innerHTML = "No ingredient information available.";
  }
};

// Loop through each snack item and add click event listener
snackItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Extract snack name from the clicked item's text content
    const snackName = item.textContent.trim();
    showIngredients(snackName);
  });
});