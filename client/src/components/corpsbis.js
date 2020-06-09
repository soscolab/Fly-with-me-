import React from 'react';
import PopUp from './popup'
import { useState, useContext, useEffect } from 'react';
import { Context } from "./context";
import Chat from "./chatroom"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TextField, MenuItem, Grid } from '@material-ui/core';


const Corps = () => {
       const [rooms, setrooms] = useContext(Context);  //context global declaré dans context
       const [user, setUser] = useState([]);
       //By default, the rooms list is empty
       const [visible, setvisible] = useState(false);
       //handle close for popup, ist past as a prop to popup

       const handleclose = () => {
              setvisible(false);
       }

       //SYNTAXE USE  event.target.name, event.target.value;
       //Onlick callback function: add a new room to the array
       const addroom = () => {
              setvisible(true)
       };

       //Display the list of Live rooms
       const roomslist = rooms.map(name => {
              return (
                     <div className="rooms-container">
                            <div className="room-information">
                                   <div className="room-name"> {name.name}  </div>
                                   {console.log(name.name)}
                                   <div className="room-description"> {name.description} </div>
                                   <div className="room-join-container">
                                          <Button className="join-button" href={'https://meet.jit.si/' + name.name} target="_blank" variant="outlined" color="secondary"> Join </Button>
                                   </div>
                            </div>

                     </div>
              )
       })

       return (
              <div>
                     <div className="rooms-section-title"> #Live now!
                     <div className="room-new-button">
                                   {/* onclick state changes(new room added), which means that the rooms will be rendered once again */}
                                   <Button variant="contained" color="secondary" onClick={addroom}>   Create Room
                                   </Button>
                            </div>
                     </div>
                     {visible ? <PopUp valeur={handleclose} /> : null} {/* if visible render the popup if not don't render anything */}
                     <div className="rooms-container">
                            {roomslist} {/* Map through the rooms list && display them */}
                     </div>
              </div>
       )
};

export default Corps;
