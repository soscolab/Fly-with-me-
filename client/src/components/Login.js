import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Button from '@material-ui/core/Button';
import { GoogleLogout } from 'react-google-login';
import { useGoogleLogin } from 'react-google-login'


/* global gapi */

//LogIn using google Autho

function Login() {


      // GET THE TOKEN FROM GOOGLE API
      const [PostId, setPostId] = useState(null);

      const responseGoogle = response => {
            const jwtoken = response.tokenId;
            // console.log(response.profileObj)

            // SEND THE TOKEN TO THE BACK END - EXPRESS

            // POST request using fetch inside useEffect React hook
            const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: jwtoken
            };
            fetch('http://localhost:5000/GoogleLogin', requestOptions)
            // .then(res => res.json())
            // .then(res => console.log({ resultat: res })); // test communication from backend to react

      };

      function failure() {
            alert("sorry couldn't log in ")
      }

      function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                  alert("sorry! you are out")
            });
            fetch('http://localhost:5000/destroysession')

      };

      function logoutfailure() {
            alert("sorry we couldn't log out, try again later ")
      }

      return (
            <div className="Login-button">
                  <Button >
                        <GoogleLogin
                              clientId="740831316427-m1qet5irfugkeva79brhb6s6nim8ds55.apps.googleusercontent.com"
                              buttonText="Sign in with google"
                              onSuccess={responseGoogle}
                              onFailure={failure}
                              cookiePolicy={'single_host_origin'}
                              isSignedIn={true}
                        />

                  </Button>

                  <Button>
                        <GoogleLogout
                              clientId="740831316427-m1qet5irfugkeva79brhb6s6nim8ds55.apps.googleusercontent.com"
                              buttonText="Logout"
                              responseType="code"
                              onLogoutSuccess={signOut}
                              onFailure={logoutfailure}
                        />
                  </Button>

            </div>

      )
}

export default Login;

