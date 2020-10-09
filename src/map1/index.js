
import React from "react";
import { Map,  TileLayer , Marker, Popup} from "react-leaflet";
import { Container, Row, Col } from 'react-grid-system';
import {Icon} from "leaflet";
import { Card } from 'react-bootstrap';


import "./App.css";

const radar = new Icon({
  iconUrl:"/1.gif",
 
  iconSize:[400, 400]
})
const radarcicle = new Icon({
  iconUrl:"/cicle.png",
  iconSize:[200, 200],
  
})

export default function App1() {

  const [activePop, setActivePop] = React.useState(false);

  var zoomController = 10

  return (

<Container fluid style={{backgroundColor: '#ffffff'}}>
 
       

    <Map center={[-9.551813, -35.770256]} zoom={zoomController}>
 
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker key={((""))} position={[-9.551813, -35.770256]}
       icon={radar}
  
     
   
      />
      {activePop && <Popup   key={((""))} position={[-9.551813, -35.770256]} 
      onClose={()=> {
        setActivePop(false);
      }}>
        
        <p> <b>Radar: </b> Maceió.</p>
      
        <p1><b>Local:</b> Universidade Federal de Alagoas - UFAL </p1>
        </Popup>}

     
        <Marker key={((""))} position={[-9.551813, -35.770256]}
       icon={radarcicle}
   
     
       onclick={() => {
        setActivePop(true)
        

      }}
      />

    
    </Map>

          
       
      </Container>
    
   

  );
}
