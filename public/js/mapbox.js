/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoia2FqaWN6ZWNoIiwiYSI6ImNrbHc4bTRxeDBvZmIyb3BsZzM3ZnhqczgifQ.kE5jPz2kVpOBP2lrab6Q_A';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kajiczech/ckmkq7y6xek1h17qyxfe5ds8k',
    scrollZoom: false,
    //   center: [-118.113491, 34.111745],
    //   zoom: 8,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create Marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
