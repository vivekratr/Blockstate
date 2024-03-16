import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap , Marker, Popup } from 'react-leaflet'

const Map = () => {
  const position = [51.505, -0.09]
  const data = {
    "id": [1,2,3,4],
    "address": ['1,2,3,4','assd','a','aa','v'],
    "lat": 'x',
    "long": 'y',
    "city":['Mumbai','Delhi','Lucknow'],
}
  return (
    <div className='h-screen w-full overflow-hidden'>
      <MapContainer className='' center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <Marker position={[19.0928172,72.8569577]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  )
}

export default Map
