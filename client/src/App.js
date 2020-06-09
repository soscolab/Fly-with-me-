
import { Roomprovider } from "./components/context";
import React from "react";
import Entete from "./components/entete.js";
import Corps from "./components/Corps.js";
import Footer from "./components/Footer.js";
import "./assets/css/animate.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/default.css"
import "./assets/css/font-awesome.min.css"
import "./assets/css/LineIcons.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/slick.css"
import "./assets/css/style.css"
import "./assets/css/style.css.map"

//import "./App.css"


function App() {


    return (
        < Roomprovider>
           <div className="grid">
                <div className="entete" >
                <Entete/>
                </div>
                <div className="corps">
                <Corps/>
                </div>
                <div className="footer">
                <Footer/>
                </div>
            </div>
        </Roomprovider >

    );
}

export default App;


