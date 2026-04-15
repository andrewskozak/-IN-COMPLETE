


/* BUILDING DATA */

var buildings = [


{
  name: "Eiffel Tower",
  id:"0",
  location: "Paris, France",
  status: "open",
  restoration: "Restoring",
  coords: [48.8584, 2.2945],

    buttonText: "View Timeline",

  image: "Archive Images/Eiffel Tower/fcd0b1a1fb9df1168b59edacc1c4c574778e76ad-2215x1477.avif",


},

  {
    name: "Notre-Dame",
    id:"1",
    location: "Paris, France",
    status: "RESTORING",
    restoration: "Restoring",
    coords: [48.8530, 2.3499],
    image: "Archive Images/Notre Dame/960x0.jpg",

  
  },

    {
    name: "Parthenon",
    id:"2",
    location: "Athens, Greece",
    status: "Open",
    restoration: "open",
    coords: [37.9715, 23.7267],
    image: "Archive Images/Parthenon/restoration_work_parthenon_facade_acropolis_athens_greece.webp",
  },

    {
    name: "Arc de Triomphe",
    id:"3",
    location: "Paris, France",
    status: "RESTORING",
    restoration: "open",
    coords: [48.8738, 2.2950],
    image: "Archive Images/Arc de Triomphe/eac9c4f9-c4f9-45f7-9940-b2c54e37f3d2.jpeg",

}
  ,

    {
    name: "Cologne Cathedral",
    id:"4",
    location: "Cologne, Germany",
    status: "RESTORING",
    restoration: "Under constant restoration",
    coords: [50.9413, 6.9583],
    image: "Archive Images/Cologne Cathedral/motion-array-4033805-gag7qiU51c-high_0009.avif",
  },

  {
    name: "Dom Tower",
    id:"5",
    location: "Utrecht, the Netherlands",
    status: "OPEN",
    restoration: "OPEN",
    coords: [52.0908, 5.1213],
    image: "Archive Images/Dom Tower/Utrecht_Centrum_Domtoren_JelleVerhoeks_600x480-e1649756902467.jpg",
  },

  {
    name: "Hagia Sophia",
    id:"6",
    location: "Istanbul, Turkey",
    status: "RESTORING",
    restoration: "EXTENSIVE RESTORATION",
    coords: [41.0086, 28.9802],
    image: "Archive Images/Hagia Sophia/xbIHT76Ade5USjgz.jpeg",
  },

    {
    name: "HEYDAR ALIYEV CENTER",
    id:"7",
    location: "Baku, Azerbaijan",
    status: "Completed",
    restoration: "open",
    coords: [40.3959, 49.8678],
    image: "Archive Images/Heydar Aliyev Centre/add04.jpg",
  },

      {
    name: "Church of the Assumption of the Blessed Virgin Mary",
    id:"8",
    location: "Krakow, Poland",
    status: "RESTORING",
    restoration: "open",
    coords: [50.06152, 19.93968],
    image: "Archive Images/Krakow Basilica/original_8b6f0ecf371672f3d71a3dd0c13fb481.jpg",
  },

      {
    name: "Pantheon",
    id:"9",
    location: "Rome, Italy",
    status: "RESTORING",
    restoration: "open",
    coords: [41.8986, 12.4769],
    image: "Archive Images/Pantheon/Restoration_of_the_Pantheon_in_Rome_sightseing_tours.jpg",
  },

       {
    name: "Leaning Tower of Pisa",
    id:"10",
    location: "Pisa, Italy",
    status: "RESTORING",
    restoration: "open",
    coords: [43.7230, 10.3966],
    image: "Archive Images/Pisa Tower/f252bbe5151e2ce90947744148fc9f85.jpg",
  },

       {
    name: "Sagrada Familia",
    id:"11",
    location: "Barcelona, Spain",
    status: "RESTORING",
    restoration: "Under construction since 1882",
    coords: [41.4036, 2.1744],
    image: "Archive Images/Sagrada Familia/e2859a6a-9691-4e83-9172-b0b19c4a62b3.jpg",
  },

       {
    name: "Saint Peter's Basilica",
    id:"12",
    location: "Vatican City",
    status: "RESTORING",
    restoration: "Extensive restorations",
    coords: [41.9022, 12.4539],
    image: "Archive Images/St Peters Basilica/CNS-20240222T0850-BASILICA-BALDACHIN-SCAFFOLDING-1773079.jpg",
  },

       {
    name: "Fallingwater",
    id:"13",
    location: "Uniontown, Pennsylvania",
    status: "RESTORING",
    restoration: "Restoring",
    coords: [39.9061, -79.4668],
    image: "Archive Images/Fallingwater/7NU4DZRFMFG6DPT2M6ZG4HLWOI.jpeg",
  },

      {
    name: "TAJ MAHAL",
    id:"14",
    location: "Agra, Uttar Pradesh, India",
    status: "RESTORING",
    restoration: "Restoring",
    coords: [27.1751, 78.0421],
    image: "Archive Images/Taj Mahal/00tajmahal-7-articleLarge.webp",
  },

        {
    name: "Colosseum",
    id:"15",
    location: "Rome, Italy",
    status: "RESTORING",
    restoration: "Restoring",
    coords: [41.8902, 12.4922],
    image: "Archive Images/Colosseum/01_Tod-s_For_Colosseum_view_02.webp",
      },
  

        {
    name: "Casa Rosada",
    id:"16",
    location: "Buenos Aires, Argentina",
    status: "Open",
    restoration: "Open",
    coords: [-34.6081 , -58.3703],
    image: "Archive Images/Casa Rosada/casa-rosada-in-buenos-aires-argentina-inaugurated-in-1898-v0-wmnqywkbryja1.webp",
      },

            {
    name: "Royal Ontario Museum",
    id:"17",
    location: "Toronto, Canada",
    status: "RESTORING",
    restoration: "Restoring",
    coords: [43.6677 , -79.3948],
    image: "Archive Images/Royal Ontario Museum/IMG_3313.JPG",
      },
];



var map = L.map('map', {
  minZoom: 3,
  maxZoom: 18,
  zoomControl: false,
}).setView([48, 15], 4);

L.maptiler.maptilerLayer({
  style: "https://api.maptiler.com/maps/019d8ad3-8310-7ad1-80aa-f8404070f06a/style.json?key=Ru9Ui7nEqrvBXHONb8nN"
}).addTo(map);

  // Constrain map bounds
  var southWest = L.latLng(-90, -180),
      northEast = L.latLng(90, 180),
      bounds = L.latLngBounds(southWest, northEast);
  map.setMaxBounds(bounds);
  map.on('drag', function() {
      map.panInsideBounds(bounds, { animate: false });
  });

  // Custom marker
  var leafletIcon = L.icon ({
      iconUrl: 'marker/2marker.png',
      iconSize: [38,38],
      iconAnchor: [19,38]
  });
  


/* CREATE MARKERS */

buildings.forEach(function(building) {

  // Create marker
var marker = L.marker(building.coords, {icon: leafletIcon}).addTo(map);

var popupContent = `
  <div class="popup-content">
    <div class="status ${building.status}">${building.status}</div>

    <div class="popup-header">
      <h2>${building.name}</h2>
    </div>

    <div class="popup-body">
      <img src="${building.image}" alt="${building.name}">
      <h3>${building.location}</h3>
      <h3>${building.restoration}</h3>

      <a href="#" class="teaser-button" data-building="${building.name}">
        View Timeline
      </a>

    </div>
  </div>
`;



  // Bind popup
  marker.bindPopup(popupContent, {
    maxWidth: 310,
    minWidth: 300,
    className: "teaser-popup"

  });


marker.on('popupopen', function(e) {
  const popupNode = e.popup.getElement();

  const btn = popupNode.querySelector('.teaser-button');

  if (btn) {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      openTimeline(building.id);
    });
  }
});

  marker.on('popupopen', function(e) {
    const popupNode = e.popup.getElement();
    if (!popupNode) return;

    const iframe = popupNode.querySelector('iframe');
    if (!iframe) return;


    
    }
  )});
  

  const timelinePanel = document.getElementById('timeline-panel');
  const timelineFrame = document.getElementById('timeline-frame');

  // Listen for messages from iframe trigger
  window.addEventListener('message', function(event) {
    if (event.data.action === 'openTimeline') {
      openTimeline(event.data.building.id);
    }
  });

  // Close timeline when clicking outside the iframe
  timelinePanel.addEventListener('click', function(e) {
    if (e.target === timelinePanel) { // only clicks on the overlay background
      timelinePanel.style.display = 'none';
      timelineFrame.src = '';
    }
  });

  // Optional: close timeline with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && timelinePanel.style.display === 'block') {
      timelinePanel.style.display = 'none';
      timelineFrame.src = '';
    }
  });

  function openTimeline(id) {
    
    timelinePanel.style.display = 'block';
    timelineFrame.src = `timeline-${id}.html`;
  }



function setStatus(text, color) {
    const status = document.getElementById("status-text");
    status.textContent = text;


}

/*ABOUT*/

document.addEventListener("DOMContentLoaded", () => {
  const aboutBtn = document.getElementById("about-btn");
  const aboutComponent = document.getElementById("about-component");

  if (!aboutBtn || !aboutComponent) return;

  // OPEN
  aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    aboutComponent.style.display = "block";
  });

  // CLOSE button OR background click
  aboutComponent.addEventListener("click", (e) => {
    if (e.target === aboutComponent) {
      aboutComponent.style.display = "none";
    }
  });

    // CLICK OUTSIDE CONTENT CLOSES
  aboutComponent.addEventListener("click", (e) => {
    if (e.target === map) 
    aboutComponent.style.display = "none";
  });

  // OPTIONAL: ESC key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      aboutComponent.style.display = "none";
    }
  });
});




document.addEventListener("click", (e) => {
  const btn = e.target.closest(".teaser-button");
  if (!btn) return;

  e.preventDefault();

  const name = btn.dataset.building;

  const building = buildings.find(b => b.name === name);
  if (!building) return;

  const panel = document.getElementById("timeline-panel");
  const content = document.getElementById("timeline-content");

  content.innerHTML = `
    <h2>${building.name}</h2>
    ${building.timeline.map(item => `
      <div class="timeline-item">
        <strong>${item.year}</strong>
        <p>${item.text}</p>
      </div>
    `).join("")}
  `;

  panel.style.display = "block";
});

// Modal functions
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  
  modal.style.display = 'block';
  modalImg.src = imageSrc;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

document.querySelectorAll(".close").forEach((btn) => {
  btn.addEventListener("click", () => {
    timelinePanel.style.display = 'none';
      timelineFrame.src = '';
  });
});

const img = document.querySelector('.scaffold-img');

img.replaceWith(img.cloneNode(true));

document.querySelectorAll(".about-close").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("about-component").style.display = "none";
  });
});

const about = document.getElementById("about-component");
const aboutClose = document.querySelector(".about-close");
const aboutBtn = document.querySelector("#about-btn");

aboutBtn.addEventListener("click", openAbout);
aboutClose.addEventListener("click", closeAbout);

function openAbout() {
  about.style.display = "block";
  aboutClose.style.display = "flex";
}

function closeAbout() {
  about.style.display = "none";
  aboutClose.style.display = "none";
}