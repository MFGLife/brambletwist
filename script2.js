const instagramUrl = "https://www.instagram.com/bramble_twist"; // Replace with your desired username

// Function to fetch Instagram photos
async function getPhotos(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.graphql.user.edge_owner_to_timeline_media.edges.slice(0, 20); // Get first 20 photos
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to display photos
function displayPhotos(photos) {
  const container = document.getElementById("photos");
  container.innerHTML = ""; // Clear previous content

  photos.forEach((photo) => {
    const imageSrc = photo.node.display_url;
    const imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = "";

    const photoContainer = document.createElement("div");
    photoContainer.className = "photo";
    photoContainer.appendChild(imageElement);

    container.appendChild(photoContainer);
  });
}

// Get photos and display them
getPhotos(instagramUrl).then((photos) => displayPhotos(photos));
