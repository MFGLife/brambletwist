function populateGallery(foldersWithCaptions, imageCountPerFolder) {
  const gallery = document.getElementById("gallery");

  for (const [folder, caption] of Object.entries(foldersWithCaptions)) {
    for (let i = 1; i <= imageCountPerFolder; i++) {
      const figure = document.createElement("figure");

      const img = document.createElement("img");
      img.src = `pics/${folder}/${folder} (${i}).jpg`;
      img.alt = "https://brambletwist.com/";
      img.title = "https://brambletwist.com/";
      img.style.width = '100%'; // Ensures the image takes the full width of the figure
      img.style.height = 'auto'; // Maintains the aspect ratio of the image
      img.style.objectFit = 'cover';
      img.style.objectPosition = 'top';
      figure.appendChild(img);

      const figcaption = document.createElement("figcaption");
      figcaption.textContent = caption;
      figure.appendChild(figcaption);

      gallery.appendChild(figure);
    }
  }
}


populateGallery({
  'collective':'Collective',
  'faxium':'Faxium',
  'abzimuth':'Abzimuth',
	'mercado':'Mercado',
  'ventura':'Ventura',
  'occidentica':'Occidentica',
  'eventus':'Eventus',
  'ironcoast':'Iron Coast',
  'trantum':'Trantum'
  // ... add other folders and captions as necessary
}, 10); // Modify the image count as needed



"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();
