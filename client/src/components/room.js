import React from 'react';
import "../App.css"
import Chat from "./chatroom.js";
import   { useState } from 'react';

function Room({name, photo}){
  

       return (
       <div className="room-info">
       <div className="room-name"> {name} </div>
       <div className="room-photo"> {photo}  </div>
       <div className="room-join-button"> <button> Join  </button> </div>
       </div> ) 
       }

    


