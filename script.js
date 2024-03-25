const body = document.body;
const content = document.querySelector('.js-content');
const blocks = document.querySelectorAll('.block');

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

var currentFrame = 1;
var totalFrames = 3; // Change this to the total number of frames you have

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

function spawnHashtags() {
  var container = document.getElementById("hashtag-buttons");
  document.getElementById('explore').style.display = 'none';
  document.getElementById('exploretext').style.display = 'none';

  container.innerHTML = `
    <button onclick="window.open('blog/antilawn.html')"> #AntiLawn </button>
    <button onclick="window.open('blog/nomowmay.html')"> #NoMowMay </button>
    <button onclick="window.open('blog/edible.html')"> #EdibleLawn </button>
    <button onclick="window.open('blog/breathebetter.html')"> #BreatheBetter </button>

  `;
}

document.getElementById('search').addEventListener('input', function() {
  var inputText = this.value.toLowerCase();
  var keywords = inputText.match(/\b\w{3,}\b/g); // Match words with at least 3 characters

  // Arrays containing keywords for each case
  var possibleKeywords = {
      '#AntiLawn': ['Sustainable','landscaping','practices','Reduce','carbon','emissions','Eco-friendly','business','Kansas','City','businesses','Anti-lawn','movement','benefits','Environmental','impact','of','traditional','lawns','Green','solutions','Carbon','footprint','reduction','tips','Native','flora','in','Eco-conscious','commercial','properties','Urban','sustainability','initiatives','office','park','environmental','stewardship','lawn','care','complexes','ideas','Natural','growth','maintenance','companies','Climate-friendly','techniques','Greener','plants','for','management','landscapes','trends','products','case','studies','Environmentally','responsible','space','development','design','principles','infrastructure','grasses','offsetting','through','alternatives','certification','architecture','building'],
      '#NoMowMay': ['lawn', 'no mow', 'may', 'wildflowers', 'biodiversity', 'conservation', 'habitat', 'pollinators', 'bees', 'native', 'growing', 'movement', 'towards', 'climate-conscious', 'lawns', 'spring', 'gardening', 'season', 'homeowners', 'lawn', 'care', 'No', 'Mow', 'Low', 'campaigns', 'bees', 'butterflies', 'neighbors', 'Homeowner', 'associations', 'brown', 'wild', 'court', 'Democratic', 'lawmakers', 'regulations', 'green', 'California', 'gas-powered', 'mowers', 'leaf', 'blowers', 'Towns', 'No', 'May', 'grass', 'citations', 'Yard', 'sign', 'wars', 'country', 'turf', 'political', 'displays', 'election', 'battleground'],
      '#EdibleLawn': ['lawn', 'edible', 'gardening', 'vegetables', 'permaculture', 'food', 'harvest', 'nutrition', 'sustainability', 'self-sufficiency', 'Growing', 'food', 'not', 'grass', 'Exploring', 'the', 'principles', 'of', 'permaculture', 'Permanent', 'Agriculture', 'sustainable', 'living', 'environmental', 'consciousness', 'sustainable', 'design', 'ecological', 'design', 'productive', 'ecosystems', 'organic', 'gardening', 'agroforestry', 'food', 'forests', 'diverse', 'plant', 'species', 'fruit', 'nut', 'trees', 'natural', 'ecosystems', 'environmental', 'resilience', 'collaboration', 'with', 'nature', 'self-sustaining', 'systems', 'ecological', 'ethics', 'Earth', 'Care', 'People', 'Care', 'Fair', 'Share', 'sustainable', 'living', 'regenerative', 'design', 'holistic', 'coexistence', 'environmental', 'challenges', 'thriving', 'ecosystems'],
      '#BreatheBetter': ['air quality', 'pollution', 'breathe', 'health', 'respiratory', 'wellness', 'exercise', 'clean air', 'lung', 'oxygen', 'PRIORITIZING', 'AIR', 'QUALITY', 'IN', 'AN', 'INDUSTRIALIZED', 'METROPOLITAN', 'Kansas', 'City', 'urban', 'development', 'sustainable', 'growth', 'native', 'greenery', 'improving', 'pollution', 'renewable', 'energy', 'eco-friendly', 'manufacturing', 'indigenous', 'plants', 'landscaping', 'air', 'pollution', 'noxious', 'particulates', 'greenhouse', 'gasses', 'volatile', 'organic', 'compounds', 'public', 'health', 'environment', 'concrete', 'jungle', 'nature', 'Native', 'Plants', 'Air', 'Purifiers', 'Indigenous', 'plants', 'climate']
  };

  // Count matching keywords for each case
  var matchingCounts = {};
  for (var caseKey in possibleKeywords) {
      var caseKeywords = possibleKeywords[caseKey];
      var count = 0;
      caseKeywords.forEach(function(keyword) {
          if (keywords && keywords.includes(keyword)) {
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
  var count = 900;
  var targetCount = 1765;
  var interval = 0.002;

  var timer = setInterval(function() {
      count++;
      document.getElementById('pretzelcounter').innerHTML = "Pretzels Enjoyed: " + count;
      console.log("Pretzels counted: " + count);
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
