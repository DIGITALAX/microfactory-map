import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap, LayersControl, LayerGroup, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mapLocationData from './../../mapdata/locations.json';
import MarkerInfo from './MarkerInfo';
import SearchMap from './SearchMap';

function Map() {

  const filteredData = mapLocationData.filter((mapLocation) => mapLocation.state === "FL")

  const [flyToInput, setFlyToInput] = useState(false)
  const [flyToInputID, setFlyToInputID] = useState(false)

  // Markers Filter
  const filteredFactories = mapLocationData.filter(item => item.type === "Factory");
  const filteredFarms = mapLocationData.filter(item => item.type === "Farm");

  // Marker on click
  const [clickPosition, setClickPosition] = useState(null);

  // const MarkerOnClick = () => {
  //   useMapEvents({
  //     click(e) {
  //       console.log(e.latlng)
  //       setClickPosition(e.latlng)
  //     }
  //   })

  //   return clickPosition === null ? null : (
  //     <Marker position={[clickPosition.lat, clickPosition.lng]}>
  //       <Popup>{clickPosition.lat}, {clickPosition.lng}</Popup>
  //     </Marker>

  //   )
  // }

  // Input Marker

  const [inputCoords, setInputCoords] = useState(null);

  // const InputCoords = () => {

  //   const [inputCoordsOnChange, setInputCoordsOnChange] = useState({})

  //   const handleInputChange = (e) => {
  //     setInputCoordsOnChange({...inputCoordsOnChange, [e.target.name]: e.target.value });
  //   }
  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setInputCoords(inputCoordsOnChange);
  //     setFlyToInput(true);
  //   }
  
  //   return (
  //     <form>
  //       <div className="input-coords">
  //         <label>Latitude: </label>
  //         <input type="text" name="latitude" onChange={handleInputChange} />
  //         <label>Longitude: </label>
  //         <input type="text" name="longitude" onChange={handleInputChange}/>

  //         <button onClick={handleSubmit}>Submit</button>
  //       </div>
  //     </form>
  //   )
  // }

  // const MarkerInputCoords = () => {
  //   const coords = inputCoords ? [parseFloat(inputCoords.latitude), parseFloat(inputCoords.longitude)] : [0,0]

  //   const map = useMap()

  //   if (flyToInput) {
  //     map.flyTo(coords, 10);
  //     setFlyToInput(false);
  //   }


  //   return (
  //     <Marker position={coords} >
  //       <Popup>{coords[0]}, {coords[1]}</Popup>
  //     </Marker>
  //   )
  // }

  // Show full info

    const [clickedMarker, setClickedMarker] = useState(null);

  // Input ID

  const [inputID, setInputID] = useState(null);
  const [idcoords, setIdcoords] = useState(null);

  
  const MarkerInputID = () => {

    const coords = idcoords ? idcoords : [0,0]

    const map = useMap()

    if (flyToInputID) {
      map.flyTo(coords, 10);
      setFlyToInputID(false);
    }

    return null
  }

  const [checkedValue, setCheckedValue] = useState("Factories");

  // toggle icons boolean
  const CheckedListener = () => {
    useMapEvents({
      overlayadd(e) {
        setCheckedValue(e.name)
      }
    })

    return(null)
  }


  return (
    <div>

      {/* <InputCoords /> */}

      <MarkerInfo clickedMarker={clickedMarker} setClickedMarker={setClickedMarker} />
      <SearchMap setFlyToInputID={setFlyToInputID} setInputID={setInputID} setIdcoords={setIdcoords} filteredData={filteredData} />

      <MapContainer center={[39, -75]} zoom={10}  scrollWheelZoom={true} style={{height: "100vh", width: "100%", position: "relative", display:"flex", zIndex:"0", backgroundColor:"#191A1A"}} zoomControl={false}>
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=nQ7SwDENfnLoXI4s2visFVsAAUe2qBLOVHtx7yfLcrpcjfwL9QdzxMS3Rmp55i8W"
        />
        <ZoomControl position='topright' zoomInText="" zoomOutText='hi'/>

        {/* <DraggableMarker /> */}
        {/* <MarkerOnClick /> */} 
        {/* <MarkerInputCoords /> */}
        <MarkerInputID />
        <CheckedListener />

        <LayersControl position='topright' >
          <LayersControl.Overlay name="Factories" checked={checkedValue === "Factories" ? true: false} >
            <LayerGroup>
            {
              filteredFactories.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                >
                  <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup>
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Farms" checked={checkedValue === "Farms" ? true: false}>
            <LayerGroup>
            {
              filteredFarms.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                >
                  <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup>
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
        </LayersControl>

        {/* {filteredData.map((mapLocation) => (
          <Marker
            key={mapLocation.id}
            position={[mapLocation.latitude, mapLocation.longitude]}
            eventHandlers={{
              click(e) {
                setClickedMarker(mapLocation)
              }
            }}
          >
            <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
              <div>
                <p>{mapLocation.address}</p>
              </div>
            </Popup>

          </Marker>
        ))} */}
      </MapContainer>
    </div>
  );
}

export default Map;