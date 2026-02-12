// Album data
const albums = {
  "photobooth": ["Photos/pb1.jpg"],
  "1st-anniv": ["Photos/1.jpg"],
  "2nd-anniv": ["Photos/2.jpg"],
  "3rd-anniv": ["Photos/3.jpg"],
  "4th-anniv": ["Photos/4.jpg"],
  "dates": [""]
};

const albumCards = document.querySelectorAll(".album-card");
const photosContainer = document.getElementById("photos-container");
const albumsGrid = document.querySelector(".albums-grid");
const backBtn = document.getElementById("back-btn");

let currentView = "albums"; // track current view

// Click album → show photos
albumCards.forEach(card => {
  card.addEventListener("click", () => {
    const albumName = card.dataset.album;
    const photos = albums[albumName];

    // Hide albums
    albumsGrid.style.display = "none";

    // Create photo grid
    const photoGrid = document.createElement("div");
    photoGrid.className = "photo-grid";
    photoGrid.style.display = "grid";
    photoGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    photoGrid.style.gap = "20px";
    photoGrid.style.maxWidth = "900px";
    photoGrid.style.margin = "20px auto";

    photos.forEach(photo => {
      const card = document.createElement("div");
      card.className = "photo-card";
      card.style.background = "rgba(255, 240, 240, 0.8)";
      card.style.padding = "10px";
      card.style.borderRadius = "20px";
      card.style.transition = "transform 0.3s ease";

      const img = document.createElement("img");
      img.src = photo;
      img.style.width = "100%";
      img.style.borderRadius = "15px";

      card.appendChild(img);
      photoGrid.appendChild(card);
    });

    photosContainer.innerHTML = "";
    photosContainer.appendChild(photoGrid);
    photosContainer.style.display = "block";

    // Update view and back button text
    currentView = "photos";
    backBtn.style.display = "inline-block";
    backBtn.textContent = "♡ Back to Albums ♡";
  });
});

// Back button logic
backBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (currentView === "photos") {
    // Show albums, hide photos
    albumsGrid.style.display = "grid";
    photosContainer.style.display = "none";
    photosContainer.innerHTML = "";
    currentView = "albums";
    backBtn.textContent = "♡ Back to Valentine Invitation ♡";
  } else if (currentView === "albums") {
    // Go back to Valentine invitation page
    window.location.href = "index.html";
  }
});
