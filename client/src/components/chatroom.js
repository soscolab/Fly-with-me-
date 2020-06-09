import React, { useState } from 'react'
import Jitsi from 'react-jitsi'
import NewWindow from 'react-new-window'

const roomName = 'my-super-secret-meeting-123e4567-e89b-12d3-a456-426655440000'
const userFullName = 'Joseph Strawberry'
const test = window.my_special_setting;
console.log(test)

/*das ist me testing yay*/
const Chat = () => {
       console.log(test)
       return (
              <>
                     <h2>My First Meeting!</h2>
                     <Jitsi roomName={test} displayName={userFullName} />
              </>
       )
}
export default Chat;


/* global gapi */
/*
function Chat() {



       function checklogin() {
              //   fetch('http://localhost:5000/testlog')
              window.test();
       }
       return (
              <div className="card text-center m-3">
                     <h5 className="card-header">
                            Simple POST Request</h5>
                     <div className="card-body">
                            HOLA
                            <button onClick={checklogin}> Create Room
                                   </button>
                     </div>
              </div>
       )

}
export default Chat;




*/








//HOW TO SET A POST REQUEST TO AN EXTERNAL API

// STORE USER IN DATABASE

/*const [PostId, setPostId] = useState(null);

useEffect(() => {

       // POST request using fetch inside useEffect React hook
       const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                     id: "4",
                     name: "t",
                     email: "SS",
                     password: "IDd52",
                     date: "23052041"
              })
       };
       fetch('http://localhost:5000/test', requestOptions)
              .then(response => response.json())
              .then(message => setPostId(message));
       // empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
              <div className="card text-center m-3">
                     <h5 className="card-header">Simple POST Request</h5>
                     <div className="card-body">
                            {JSON.stringify(PostId)}
                     </div>
              </div>
       )
*/







/*import React, { Component } from 'react';

class Chat extends Component {
       state = {
              data: null
       };

       componentDidMount() {
              // Call our fetch function below once the component mounts
              this.callBackendAPI()
                     .then(res => this.setState({ data: res.express }))
                     .catch(err => console.log(err));
       }SyntaxErrorss_backend');
              const body = await response.json();

              if (response.status !== 200) {
                     throw Error(body.message)
              }
              return body;
       };

       render() {
              return (
                     <div className="App">
                            <header className="App-header">
                                   <h1 className="App-title">Welcome to React</h1>
                            </header>
                            <p className="App-intro">{this.state.data}</p>
                     </div>
              );
       }
}

export default Chat;









/* HOW TO FETCH DATA FROM EXTERNAL API EXAMPLE*/

/*import React, { useState, useEffect } from 'react';
import { decode } from 'he';


function Chat() {
       const [joke, setJoke] = useState('');

       const fetchJoke = async signal => {
              const url = new URL('https://api.icndb.com/jokes/random');
              const response = await fetch(url, { signal });
              const { value } = await response.json();

              setJoke(decode(value.joke));
       };

       useEffect(() => {
              if (!joke) {
                     const controller = new AbortController();
                     fetchJoke(controller.signal);

                     return () => controller.abort();
              }
       }, [joke]);

       return (
              <div className="App">
                     <header className="App-header">
                            <p>{joke || '...'}</p>
                            <button className="App-link" onClick={() => setJoke('')}>
                                   Get a new joke
        </button>
                     </header>

              </div>

       );

}
*/
//export default Chat
