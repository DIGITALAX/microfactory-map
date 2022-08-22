import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap, LayersControl, LayerGroup, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mapLocationData from './../../mapdata/locations.json';
import MarkerInfo from './MarkerInfo';
import Script from '../../hooks/Script';
import {FaTwitter} from 'react-icons/fa';

// marker icons
import {Icon} from 'leaflet';

function Map() {

  let Aisles = new Icon({
    iconUrl: '/assets/images/portals/portal1.gif',
    iconSize: [40,40],
  });

  let Paths = new Icon({
    iconUrl: '/assets/images/portals/portal2.gif',
    iconSize: [40,40]
  });

  let Arcades = new Icon({
    iconUrl: '/assets/images/portals/portal3.gif',
    iconSize: [40,40]
  });


  let Passages = new Icon({
    iconUrl: '/assets/images/portals/portal4.gif',
    iconSize: [40,40]
  });

  let Corridors = new Icon({
    iconUrl: '/assets/images/portals/portal5.gif',
    iconSize: [40,40]
  });

  let Dromoi = new Icon({
    iconUrl: '/assets/images/portals/portal6.gif',
    iconSize: [40,40]
  });


  let Facades = new Icon({
    iconUrl: '/assets/images/portals/portal7.gif',
    iconSize: [40,40]
  });

  let Labyrinths = new Icon({
    iconUrl: '/assets/images/portals/portal8.gif',
    iconSize: [40,40]
  });

  let PortHoles = new Icon({
    iconUrl: '/assets/images/portals/portal9.gif',
    iconSize: [40,40]
  });

  let Beacons = new Icon({
    iconUrl: '/assets/images/portals/portal10.gif',
    iconSize: [40,40]
  });

  let Hatches = new Icon({
    iconUrl: '/assets/images/portals/portal11.gif',
    iconSize: [40,40]
  });

  let Outposts = new Icon({
    iconUrl: '/assets/images/portals/portal12.gif',
    iconSize: [40,40]
  });

  let Channels = new Icon({
    iconUrl: '/assets/images/portals/portal13.gif',
    iconSize: [40,40]
  });

  // Markers Filter
  const filteredAisles = mapLocationData.filter(item => item.type === "Aisles");
  const filteredPaths = mapLocationData.filter(item => item.type === "Paths");
  const filteredArcades = mapLocationData.filter(item => item.type === "Arcades");
  const filteredPassages = mapLocationData.filter(item => item.type === "Passages");
  const filteredCorridors = mapLocationData.filter(item => item.type === "Corridors");
  const filteredDromoi = mapLocationData.filter(item => item.type === "Dromoi");
  const filteredFacades = mapLocationData.filter(item => item.type === "Facades");
  const filteredLabyrinths = mapLocationData.filter(item => item.type === "Labyrinths");
  const filteredPortHoles = mapLocationData.filter(item => item.type === "PortHoles");
  const filteredBeacons = mapLocationData.filter(item => item.type === "Beacons");
  const filteredHatches = mapLocationData.filter(item => item.type === "Hatches");
  const filteredOutposts = mapLocationData.filter(item => item.type === "Outposts");
  const filteredChannels = mapLocationData.filter(item => item.type === "Channels");

  const TWITTER_MAX = 248;

  // Marker on click
  const [clickPosition, setClickPosition] = useState(null);
  const [clickedMarker, setClickedMarker] = useState(null);

  const [flyToInput, setFlyToInput] = useState(false);

  const FlyToMarker = () => {

    const map = useMap();

    map.flyTo(clickPosition, 15);
    setFlyToInput(false);

    return null
  };

  const [checkedValue, setCheckedValue] = useState("All");

  // toggle icons boolean
  const CheckedListener = () => {
    useMapEvents({
      overlayadd(e) {
        if (e.name === "All") {
          setCheckedValue("All")
        } 
      },
      overlayremove(e) {
        if (e.name === "All") {
          setCheckedValue("")
        } 
      }
    })

    return null;
  };

    const twitterText = (mapLocation) => {
      if (mapLocation.story.length < TWITTER_MAX) {
        return mapLocation.story
      } else {
        return `${mapLocation.story.substring(0, TWITTER_MAX)}`
      } 
    };


  return (
    <div>

      <MarkerInfo clickedMarker={clickedMarker} setClickedMarker={setClickedMarker} />
      {/* <SearchMap setFlyToInputID={setFlyToInputID} setInputID={setInputID} setIdcoords={setIdcoords} mapLocationData={mapLocationData} /> */}

      <MapContainer center={[39, -75]} zoom={2}  scrollWheelZoom={true} style={{height: "100vh", width: "100%", position: "relative", display:"flex", zIndex:"0", backgroundColor:"#191A1A"}} zoomControl={false}>
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=nQ7SwDENfnLoXI4s2visFVsAAUe2qBLOVHtx7yfLcrpcjfwL9QdzxMS3Rmp55i8W"
        />
        <ZoomControl position='topright' zoomInText="+" zoomOutText='-'/>

        <CheckedListener />

        { flyToInput ?
        <FlyToMarker /> :
        null
        }

        <LayersControl position='topright' style={{backgroundColor: "pink"}} >
          <LayersControl.Overlay name="All" checked>
            <LayerGroup>
          <LayersControl.Overlay name="Aisles" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredAisles.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Aisles}
                >
                  <Popup >
                    <div className='w-full'>
                        <a
                        href={`https://twitter.com/intent/tweet?hashtags=microfactory%2Ccc0%2Cweb3&original_referer=https%3A%2F%2Fmicrofactory.digitalax.xyz%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=${twitterText(mapLocation)}...&url=%20`}
                        data-size="short"
                        >
                        <FaTwitter 
                        color='#1d9bf0'
                        className='align-center inline-flex'
                        />
                        <p className='font-f25 my-0 text-xs m-0'>
                        Pulse
                        </p>
                      </a>
                      <Script
                        async
                        type="text/javascript"
                        src="https://platform.twitter.com/widgets.js"
                        charset="utf-8"
                      />
                    </div> 
                  </Popup>
                </Marker>
              ))
            }
            </LayerGroup> 
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Paths" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredPaths.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Paths}
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
          <LayersControl.Overlay name="Arcades" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredArcades.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Arcades}
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
          <LayersControl.Overlay name="Passages" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredPassages.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Passages}
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
          <LayersControl.Overlay name="Corridors" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredCorridors.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Corridors}
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
          <LayersControl.Overlay name="Dromoi" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredDromoi.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Dromoi}
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
          <LayersControl.Overlay name="Facades" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredFacades.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Facades}
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
          <LayersControl.Overlay name="Labyrinths" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredLabyrinths.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Labyrinths}
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
          <LayersControl.Overlay name="PortHoles" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredPortHoles.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {PortHoles}
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
          <LayersControl.Overlay name="Beacons" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredBeacons.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Beacons}
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
          <LayersControl.Overlay name="Hatches" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredHatches.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Hatches}
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
          <LayersControl.Overlay name="Outposts" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredOutposts.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Outposts}
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
          <LayersControl.Overlay name="Channels" checked={checkedValue === "All" ? true : false}>
            <LayerGroup>
            {
              filteredChannels.map((mapLocation)=>(
                <Marker
                  key={mapLocation.id}
                  position={[mapLocation.latitude, mapLocation.longitude]}
                  eventHandlers={{
                    click(e) {
                      setClickedMarker(mapLocation);
                      setClickPosition(e.latlng);
                      setFlyToInput(true);
                    }
                  }}
                  icon = {Channels}
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