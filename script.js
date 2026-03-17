const timelinePanel = document.getElementById("timeline-panel");

timelinePanel.addEventListener("click", function(e){

  if(e.target === timelinePanel){
    timelinePanel.style.display = "none";
  }

});

function openTimeline(building) {
  const panel = document.getElementById('timeline-panel');
  const frame = document.getElementById('timeline-frame');

  frame.src = `timeline.html?building=${encodeURIComponent(building.name)}`;
  panel.classList.add('open');
}

// Optional: function to close it
function closeTimeline() {
  const panel = document.getElementById('timeline-panel');
  panel.classList.remove('open');
  document.getElementById('timeline-frame').src = ""; // unload iframe
}

window.addEventListener('message', function(e) {
  if (e.data.action === 'openTimeline') {
    const buildingName = e.data.building;
    const building = buildings.find(b => b.name === buildingName);
    if (building) {
      openTimeline(building); // your existing function to open the timeline panel
    }
  }
});

marker.bindPopup(teaserHtml, {
    className: 'teaser-popup',
    maxHeight: null,   // key to stop Leaflet from enforcing scroll
    autoPan: false     // prevent Leaflet from trying to resize or move popup
});

marker.bindPopup(teaserHtml, {
    className: 'teaser-popup', // keeps all your existing CSS styling
    maxHeight: null,            // disables Leaflet popup height restriction
    maxWidth: 400,              // optional, controls teaser width
    autoPan: false              // prevents Leaflet from resizing the popup to fit viewport
});

