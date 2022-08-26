import L from "leaflet";
import "leaflet-routing-machine";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { CgBitbucket } from "react-icons/cg";

export const RoutingMachine = () => {
  const map = useMap();

  useEffect(() => {
    const instance = L.Routing.control({
      waypoints: [L.latLng(), L.latLng()],
      lineOptions: [{ color: "blue" }],
      routeWhileDragging: true,
      router: L.Routing.mapbox(process.env.ROUTING_API_KEY),
      collapsible: true,
      geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(map);

    const createButton = (label, container) => {
      // second argument is classname
      let btn = L.DomUtil.create("button", "", container);
      btn.setAttribute("type", "button");
      btn.innerHTML = label;
    };

    map.on("click", (e) => {
      let container = L.DomUtil.create("div");
      let startBtn = createButton("Start from here", container);
      let endBtn = createButton("End here", container);

      L.popup().setContent(container).setLatLng(e.latlng).openOn(map);
      L.DomEvent.on(startBtn, "click", () => {
        // first: which index to delete from , second: specify number of elements to delete from starting index,
        instance.spliceWaypoints(0, 1, e.latlng);
        map.closePopup();
      });

      L.DomEvent.on(endBtn, "click", () => {
        // first: which index to delete from , second: specify number of elements to delete from starting index,
        instance.spliceWaypoints(
          instance.getWaypoints().length - 1,
          1,
          e.latlng
        );
        map.closePopup();
      });
    });

    return () => {
      map.removeControl(instance);
    };
  }, [map]);

  return null;
};
