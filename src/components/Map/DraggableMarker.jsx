import React, {useState, useRef} from 'react';
import { Marker, Popup } from 'react-leaflet';


function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState([39, -75])
    const markerRef = useRef(null);

    const toggleDraggable = () => {
      setDraggable((d) => !d);
    }

    return (
      <Marker
        draggable={draggable}
        position={position}
        ref={markerRef}
        eventHandlers={{
          dragend() {
            const marker = markerRef.current;
            if (marker != null) {
              console.log(marker.getLatLng())
              setPosition(marker.getLatLng())
            }
          }
        }}
      >
        <Popup>
          <span onClick={toggleDraggable}>
            {draggable
            ? "Marker is draggable"
            : "Click here to make the marker draggable"}
          </span>
        </Popup>
      </Marker>
    )
}

export default DraggableMarker
