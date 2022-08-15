import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap, LayersControl, LayerGroup, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mapLocationData from './../../mapdata/locations.json';
import MarkerInfo from './MarkerInfo';
import SearchMap from './SearchMap';

// marker icons
import {Icon} from 'leaflet';


function Map() {

  let p1icon = new Icon({
    iconUrl: '/assets/images/portals/portal1.gif',
    iconSize: [40,40]
  });

  let p2icon = new Icon({
    iconUrl: '/assets/images/portals/portal2.gif',
    iconSize: [40,40]
  });

  let p3icon = new Icon({
    iconUrl: '/assets/images/portals/portal3.gif',
    iconSize: [40,40]
  });


  let p4icon = new Icon({
    iconUrl: '/assets/images/portals/portal4.gif',
    iconSize: [40,40]
  });

  let p5icon = new Icon({
    iconUrl: '/assets/images/portals/portal5.gif',
    iconSize: [40,40]
  });

  let p6icon = new Icon({
    iconUrl: '/assets/images/portals/portal6.gif',
    iconSize: [40,40]
  });


  let p7icon = new Icon({
    iconUrl: '/assets/images/portals/portal7.gif',
    iconSize: [40,40]
  });

  let p8icon = new Icon({
    iconUrl: '/assets/images/portals/portal8.gif',
    iconSize: [40,40]
  });

  let p9icon = new Icon({
    iconUrl: '/assets/images/portals/portal9.gif',
    iconSize: [40,40]
  });

  let p10icon = new Icon({
    iconUrl: '/assets/images/portals/portal10.gif',
    iconSize: [40,40]
  });

  let p11icon = new Icon({
    iconUrl: '/assets/images/portals/portal11.gif',
    iconSize: [40,40]
  });

  let p12icon = new Icon({
    iconUrl: '/assets/images/portals/portal12.gif',
    iconSize: [40,40]
  });

  let p13icon = new Icon({
    iconUrl: '/assets/images/portals/portal13.gif',
    iconSize: [40,40]
  });

  const [flyToInput, setFlyToInput] = useState(false)
  const [flyToInputID, setFlyToInputID] = useState(false)

  // Markers Filter
  const filteredP1 = mapLocationData.filter(item => item.type === "p1");
  const filteredP2 = mapLocationData.filter(item => item.type === "p2");
  const filteredP3 = mapLocationData.filter(item => item.type === "p3");
  const filteredP4 = mapLocationData.filter(item => item.type === "p4");
  const filteredP5 = mapLocationData.filter(item => item.type === "p5");
  const filteredP6 = mapLocationData.filter(item => item.type === "p6");
  const filteredP7 = mapLocationData.filter(item => item.type === "p7");
  const filteredP8 = mapLocationData.filter(item => item.type === "p8");
  const filteredP9 = mapLocationData.filter(item => item.type === "p9");
  const filteredP10 = mapLocationData.filter(item => item.type === "p10");
  const filteredP11 = mapLocationData.filter(item => item.type === "p11");
  const filteredP12 = mapLocationData.filter(item => item.type === "p12");
  const filteredP13 = mapLocationData.filter(item => item.type === "p13");

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

  const [checkedValue, setCheckedValue] = useState("p13");

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
      <SearchMap setFlyToInputID={setFlyToInputID} setInputID={setInputID} setIdcoords={setIdcoords} mapLocationData={mapLocationData} />

      <MapContainer center={[39, -75]} zoom={2}  scrollWheelZoom={true} style={{height: "100vh", width: "100%", position: "relative", display:"flex", zIndex:"0", backgroundColor:"#191A1A"}} zoomControl={false}>
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
          <LayersControl.Overlay name="p1" checked={checkedValue === "p1" ? true : false} >
            <LayerGroup>
            {
              filteredP1.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p1icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div> 
                  </Popup>*/}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p2" checked={checkedValue === "p2" ? true: false}>
            <LayerGroup>
            {
              filteredP2.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p2icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p3" checked={checkedValue === "p3" ? true: false}>
            <LayerGroup>
            {
              filteredP3.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p3icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p4" checked={checkedValue === "p4" ? true: false}>
            <LayerGroup>
            {
              filteredP4.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p4icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p5" checked={checkedValue === "p5" ? true: false}>
            <LayerGroup>
            {
              filteredP5.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p5icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p6" checked={checkedValue === "p6" ? true: false}>
            <LayerGroup>
            {
              filteredP6.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p6icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p7" checked={checkedValue === "p7" ? true: false}>
            <LayerGroup>
            {
              filteredP7.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p7icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p8" checked={checkedValue === "p8" ? true: false}>
            <LayerGroup>
            {
              filteredP8.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p8icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p9" checked={checkedValue === "p9" ? true: false}>
            <LayerGroup>
            {
              filteredP9.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p9icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p10" checked={checkedValue === "p10" ? true: false}>
            <LayerGroup>
            {
              filteredP10.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p10icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p11" checked={checkedValue === "p11" ? true: false}>
            <LayerGroup>
            {
              filteredP11.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p11icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p12" checked={checkedValue === "p12" ? true: false}>
            <LayerGroup>
            {
              filteredP12.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p12icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="p13" checked={checkedValue === "p13" ? true: false}>
            <LayerGroup>
            {
              filteredP13.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation)
                    }
                  }}
                  icon = {p13icon}
                >
                  {/* <Popup position={[mapLocation.latitude, mapLocation.longitude]} >
                    <div>
                      <p>{mapLocation.address}</p>
                    </div>
                  </Popup> */}
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
        </LayersControl>

        {/* {mapLocationData.map((mapLocation) => (
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