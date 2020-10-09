
import React from "react";
import { Map,  TileLayer , Marker, Popup} from "react-leaflet";
import { Container, Row, Col } from 'react-grid-system';
import {Icon} from "leaflet";
import { Card } from 'react-bootstrap';




const radar = new Icon({
  iconUrl:"/1.gif",
 
  iconSize:[400, 400]
})
const radarcicle = new Icon({
  iconUrl:"/cicle.png",
  iconSize:[200, 200],
  
})

export default function Help() {

  const [activePop, setActivePop] = React.useState(false);

  var zoomController = 10

  return (

<Container fluid style={{backgroundColor: '#ffffff'}}>
 
       <div>
           <h1>(82) 99621-7314)</h1>
           
       </div>

 

          
       
      </Container>
    
   

  );
}
