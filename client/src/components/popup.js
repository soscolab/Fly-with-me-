import React from "react";
import { useState, useContext } from 'react';
import { Context } from "./context";
import { TextField, Button, MenuItem, TextareaAutosize } from '@material-ui/core';



const PopUp = ({ valeur }) => {
    console.log(" la valeur Inside POpUp    ")
    console.log(valeur)

    const [roomtopic, setroomtopic] = useState('');
    const [description, setdescription] = useState('');
    const [currency, setCurrency] = React.useState('');
    const [submit, setsubmit] = useState(false);

    const currencies = [
        {
            value: '1',
            label: '1',
        },
        {
            value: '2',
            label: '2',
        },
        {
            value: '3',
            label: '3',
        },
        {
            value: '4',
            label: '4',
        },
    ];

    const [rooms, setrooms] = useContext(Context);



    const handlechange = (e) => {
        setroomtopic(e.target.value);
    }
    const handlechange1 = (e) => {
        setdescription(e.target.value);
    }

    const Submit = (e) => {
        console.log("hi i'm inside submit")
        setsubmit(true);
        e.preventDefault();

        //Add to the previous rooms a new instance 
        setrooms(prevrooms => [...prevrooms, { name: roomtopic, description: description }]);
        valeur()

        var newWindow = window.open('/chatroom');
        newWindow.my_special_setting = roomtopic;
        console.log(newWindow.my_special_setting)


    }

    // <div className="popupCloseButton" onClick={valeur}> &times;</div>
    return (
        <form className="modal"> 
         {console.log("hi i'm inside Popup")}

            <div className="room-info">
                <div className="container-topic-participants">
                    <TextField id="standard-helperText" label="Topic"
                        value={roomtopic}
                        onChange={handlechange}
                        color="secondary" />
                        {console.log("hi i'm inside a text field")}
                </div>
                <div className="container-room-description">
                    <TextareaAutosize aria-label="minimum height"
                        rowsMin={5} placeholder="Description"
                        value={description}
                        onChange={handlechange1}
                    />

                </div>
            </div>
            <div className="container-submit-close"  >
                <div className="submit"> <button type="submit" onClick={Submit} variant="contained" color="secondary"> SUBMIT </button></div>
                <div className="close"> <button type="close" onClick={valeur} variant="contained" color="secondary"> Close </button></div>
            </div>
        </form>
    )
};

export default PopUp;