const body = document.body;
const content = document.querySelector('.js-content');
const blocks = document.querySelectorAll('.block');

var searchInput = document.getElementById('search');


const updateOffset = () => {
  requestAnimationFrame(updateOffset);
  body.style.setProperty('--y', content.scrollTop);
  updateProps();
};

const updateProps = () => {
  let i = -1;
  for (let block of blocks) {
    i += 1;
    let top = blocks[i].getBoundingClientRect().top;
    if (top < window.innerHeight * 1.3 && top > window.innerHeight * -1.3) {
      body.style.setProperty(`--yBlock-${i + 1}`, top);
    } else {
      body.style.setProperty(`--yBlock-${i + 1}`, 0);
    }
  }
};

updateProps();
updateOffset();

var currentFrame = 3;
var totalFrames = 5; // Change this to the total number of frames you have

function itemChange() {
    // Get the iframe element
    var iframe = document.getElementById('auctionFrame');

    // Increment the current frame number
    currentFrame = (currentFrame % totalFrames) + 1;

    // Construct the new source URL
    var newSrc = 'auction/' + currentFrame + '.html';

    // Set the new source URL
    iframe.src = newSrc;
}

// Add event listener for keydown event
searchInput.addEventListener('keydown', function(event) {
  // Check if Enter key is pressed (key code 13)
  if (event.keyCode === 13) {
      // Prevent default behavior (form submission)
      event.preventDefault();
      // Call the input event to trigger the search
      this.dispatchEvent(new Event('input'));
  }
});

document.getElementById('search').addEventListener('input', function() {
  var inputText = this.value.toLowerCase();
  var keywords = inputText.match(/\b\w{3,}\b/g); // Match words with at least 3 characters

  // Arrays containing keywords for each case
  var possibleKeywords = {
      '#AntiLawn': ['#AntiLawn','Sustainable','landscaping','practices','Reduce','carbon','emissions','Eco-friendly','business','Kansas','City','businesses','Anti-lawn','movement','benefits','Environmental','impact','of','traditional','lawn','Green','solutions','Carbon','footprint','reduction','tips','Native','flora','in','Eco-conscious','commercial','properties','Urban','sustainability','initiatives','office','park','environmental','stewardship','lawn','care','complexes','ideas','Natural','growth','maintenance','companies','Climate-friendly','techniques','Greener','plants','for','management','landscapes','trends','products','case','studies','Environmentally','responsible','space','development','design','principles','infrastructure','grasses','offsetting','through','alternatives','certification','architecture','building', 'yard'],
      '#liveSoil': ['#liveSoil','live soil', 'worms', 'compost', 'cover crops', 'crop rotation', 'organic matter', 'microorganisms', 'soil fertility', 'biodynamic farming', 'permaculture', 'mulching', 'soil amendments', 'compost tea', 'vermicompost', 'soil health', 'no-till farming', 'soil structure', 'green manure', 'microbial diversity', 'soil testing'],
      '#SavetheBees': ['#SavetheBees','pollinators', 'honeybees', 'native bees', 'beekeeping', 'bee-friendly gardens', 'pollinator-friendly plants', 'wildflower meadows', 'nectar sources', 'bee habitat', 'colony collapse disorder', 'bee conservation', 'pesticide-free gardening', 'bee-friendly farming', 'pollinator decline', 'bee diversity', 'urban beekeeping', 'bee-friendly pesticides', 'bee health', 'pollinator corridors', 'bee-friendly landscaping'],
      '#NoMowMay': ['#NoMowMay','lawn', 'no mow', 'may', 'wildflowers', 'biodiversity', 'conservation', 'habitat', 'pollinators', 'bees', 'native', 'growing', 'movement', 'towards', 'climate-conscious', 'lawns', 'spring', 'gardening', 'season', 'homeowners', 'lawn', 'care', 'No', 'Mow', 'Low', 'campaigns', 'bees', 'butterflies', 'neighbors', 'Homeowner', 'associations', 'brown', 'wild', 'court', 'Democratic', 'lawmakers', 'regulations', 'green', 'California', 'gas-powered', 'mowers', 'leaf', 'blowers', 'Towns', 'No', 'May', 'grass', 'citations', 'Yard', 'sign', 'wars', 'country', 'turf', 'political', 'displays', 'election', 'battleground', 'yard'],
      '#EdibleLawn': ['#EdibleLawn','lawn', 'edible', 'gardening', 'vegetables', 'permaculture', 'food', 'harvest', 'nutrition', 'sustainability', 'self-sufficiency', 'Growing', 'food', 'not', 'grass', 'Exploring', 'the', 'principles', 'of', 'permaculture', 'Permanent', 'Agriculture', 'sustainable', 'living', 'environmental', 'consciousness', 'sustainable', 'design', 'ecological', 'design', 'productive', 'ecosystems', 'organic', 'gardening', 'agroforestry', 'food', 'forests', 'diverse', 'plant', 'species', 'fruit', 'nut', 'trees', 'natural', 'ecosystems', 'environmental', 'resilience', 'collaboration', 'with', 'nature', 'self-sustaining', 'systems', 'ecological', 'ethics', 'Earth', 'Care', 'People', 'Care', 'Fair', 'Share', 'sustainable', 'living', 'regenerative', 'design', 'holistic', 'coexistence', 'environmental', 'challenges', 'thriving', 'ecosystems', 'yard'],
      '#BreatheBetter': ['#BreatheBetter','air quality', 'pollution', 'breathe', 'health', 'respiratory', 'wellness', 'exercise', 'clean air', 'lung', 'oxygen', 'PRIORITIZING', 'AIR', 'QUALITY', 'IN', 'AN', 'INDUSTRIALIZED', 'METROPOLITAN', 'Kansas', 'City', 'urban', 'development', 'sustainable', 'growth', 'native', 'greenery', 'improving', 'pollution', 'renewable', 'energy', 'eco-friendly', 'manufacturing', 'indigenous', 'plants', 'landscaping', 'air', 'pollution', 'noxious', 'particulates', 'greenhouse', 'gasses', 'volatile', 'organic', 'compounds', 'public', 'health', 'environment', 'concrete', 'jungle', 'nature', 'Native', 'Plants', 'Air', 'Purifiers', 'Indigenous', 'plants', 'climate']
  };

  // Count matching keywords for each case
  var matchingCounts = {};
  for (var caseKey in possibleKeywords) {
      var caseKeywords = possibleKeywords[caseKey];
      var count = 0;
      caseKeywords.forEach(function(keyword) {
          // Check if any part of the keyword is included in the input text
          if (keywords && keywords.some(function(k) { return keyword.includes(k); })) {
              count++;
          }
      });
      matchingCounts[caseKey] = count;
  }

  // Sort cases based on matching counts
  var sortedCases = Object.keys(matchingCounts).sort(function(a, b) {
      return matchingCounts[b] - matchingCounts[a];
  });

  // Generate clickable buttons based on sorted cases
  var keywordList = document.getElementById('keyword-list');
  keywordList.innerHTML = '';

  sortedCases.forEach(function(caseKey) {
      if (matchingCounts[caseKey] > 0) {
          var button = document.createElement('button');
          button.className = 'blog-button';
          button.textContent = caseKey + ' (' + matchingCounts[caseKey] + ')';
          button.onclick = function() {
              // Redirect to corresponding blog based on caseKey
              switch (caseKey) {
                  case '#AntiLawn':
                      window.location.href = 'blog/antilawn.html';
                      break;
                  case '#NoMowMay':
                      window.location.href = 'blog/nomowmay.html';
                      break;
                  case '#EdibleLawn':
                      window.location.href = 'blog/edible.html';
                      break;
                  case '#BreatheBetter':
                      window.location.href = 'blog/breathebetter.html';
                      break;
                  case '#liveSoil':
                      window.location.href = 'blog/liveSoil.html';
                      break;
                  case '#SavetheBees':
                      window.location.href = 'blog/savethebees.html';
                      break;
                  default:
                      break;
              }
          };
          keywordList.appendChild(button);
      }
  });
});

// Function to count pretzels
function countPretzels() {
  var count = 0;
  var targetCount = 1765;
  var interval = 20;

  var timer = setInterval(function() {
      count++;
      document.getElementById('pretzelcounter').innerHTML = "Pretzels Made: " + count;
      if (count >= targetCount) {
          clearInterval(timer);
      }
  }, interval);
}

// Call the function to start counting when the page loads
document.addEventListener("DOMContentLoaded", function() {
  countPretzels();
});

function scrollDown() {
  window.scrollTo({
    top: 1000, // Specify the desired vertical scroll position
    behavior: 'smooth' // Optionally, add smooth scrolling behavior
  });
}






const words = ['#SaveTheBees', 'sod-free', 'eco-rebel', '#TurfWar', 'grass-roots', 'nature-first', 'lawn-defiant', 'bio-diverse', 'green-future', 'planet-friendly', 'lawn-liberation', 'turf-resistance', 'yard-revolution', 'no-mow', 'native-nurture', 'permaculture-proud', '#AntiLawn', '#BreatheBetter', 'NoMowMay'];

function createWord() {
  const word = document.createElement('div');
  word.classList.add('word');
  word.innerText = words[Math.floor(Math.random() * words.length)];
  
  const startPosition = Math.random() * window.innerWidth;
  word.style.left = startPosition + 'px';

  const speed = Math.random() * 4 + 1; // Adjust the range for desired speed
  let currentPosition = 0;

  const fallInterval = setInterval(() => {
    if (currentPosition < 900) {
      currentPosition += speed;
      word.style.top = currentPosition + 'px';
      const opacity = 0.6 - (currentPosition / 900);
      word.style.opacity = opacity;
    } else {
      clearInterval(fallInterval);
      word.remove();
    }
  }, 50); // Adjust interval for smoothness

  document.getElementById('word-container2').appendChild(word);
}

setInterval(createWord, 4000); // Adjust interval for new words



function calculatePrice() {
  var slider = document.getElementById("soil");
  var gallons = parseInt(slider.value); // Convert to integer for comparison
  var pricePerGallon = 3;
  
  // Calculate price without any discount
  var price = pricePerGallon * gallons;

  // Apply discounts based on the amount ordered
  if (gallons > 100) {
      // Apply 40% discount for orders over 100 gallons
      price *= 0.6; // 40% discount
  } else if (gallons > 50) {
      // Apply 25% discount for orders over 50 gallons
      price *= 0.75; // 25% discount
  } else if (gallons > 10) {
      // Apply 10% discount for orders over 10 gallons
      price *= 0.9; // 10% discount
  }

  // Update price and gallons display
  document.getElementById("price").textContent = "$" + price.toFixed(2); // Round to 2 decimal places
  document.getElementById("gallons").textContent = gallons;
}

// Call the function initially to set the default price
calculatePrice();


function orderEmail() {
  var gallons = document.getElementById('gallons').innerText;
  var price = document.getElementById('price').innerText;

  var subject = encodeURIComponent('Live Soil from Bramble Twist');
  var body = encodeURIComponent('Order Total: ' + gallons + ' Gallons\nPrice: ' + price + '\n\nPlease replace this text with your address, phone number, and indicate if you would like to opt into our newsletter.');

  var mailtoLink = 'mailto:brambletwist@gmail.com?subject=' + subject + '&body=' + body;
  window.location.href = mailtoLink;
}