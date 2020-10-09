
import React from "react";
import { Map,  TileLayer , Marker, Popup} from "react-leaflet";
import { Container, Row, Col } from 'react-grid-system';
import {Icon} from "leaflet";
import { Card } from 'react-bootstrap';
import Logo from "../assets/temp.jpg";

import "./App.css";

const radar = new Icon({
  iconUrl:"/1.gif",
 
  iconSize:[400, 400]
})
const radarcicle = new Icon({
  iconUrl:"/cicle.png",
  iconSize:[200, 200],
  
})

export default function Appa() {

  const [activePop, setActivePop] = React.useState(false);

  var zoomController = 10

  return (

<Container fluid style={{backgroundColor: '#ffffff'}}>
 
        <Row style={{padding: 0, margin: 0}}>
          <Col sm={12} md={2} lg={2} style={{padding: 0, margin: 0}}>
            <Container style={{margin: 0, padding: 0, paddingTop: 0}}>
              <Row style={{paddingTop: 10}}>
                <Col sm={12} md={12} lg={12}>
                 
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <Card style={{marginTop: 10, padding: 0, marginLeft: 0, marginRight: 0, backgroundColor: '#000', borderColor: '#FFFFFF'}}>
                    <Card.Header style={{color: '#FFFFFF', borderColor: '#FFFFFF', paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, }}>Maceió</Card.Header>
                  
                
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col sm={12} md={10} lg={10}>
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
      </Col>


          
        </Row>
      </Container>
    
   

  );
}
