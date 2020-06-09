import React from "react";
import PopUp from "./popup";
import { useState, useContext, useEffect } from "react";
import { Context } from "./context";
import Chat from "./chatroom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  TextField,
  MenuItem,
  Grid,
  Icon,
  Avatar,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import brand1 from "../assets/g/images/brand1.png";
import brand2 from "../assets/g/images/brand2.png";
import brand3 from "../assets/g/images/brand3.png";
import brand4 from "../assets/g/images/brand4.png";
import brand5 from "../assets/g/images/brand5.png";
import headerhero from "../assets/g/images/headerhero.png";

import servicesshape from "../assets/g/images/servicesshape.svg";
import servicesshape1 from "../assets/g/images/servicesshape1.svg";
import servicesshape2 from "../assets/g/images/servicesshape2.svg";
import servicesshape3 from "../assets/g/images/servicesshape3.svg";
import about1 from "../assets/g/images/about1.svg";
import aboutshape1 from "../assets/g/images/aboutshape1.svg";
import about2 from "../assets/g/images/about2.svg";
import about3 from "../assets/g/images/about3.svg";
import dots from "../assets/g/images/dots.svg";
import video from "../assets/g/images/video.png";
import team1 from "../assets/g/images/team1.png";
import team2 from "../assets/g/images/team2.png";
import team3 from "../assets/g/images/team3.png";
import textimonialshape from "../assets/g/images/textimonialshape.svg";
import author1 from "../assets/g/images/author1.png";
import author2 from "../assets/g/images/author2.png";
import author3 from "../assets/g/images/author3.png";
import blog1 from "../assets/g/images/blog1.jpg";
import blog2 from "../assets/g/images/blog2.jpg";
import blog3 from "../assets/g/images/blog3.jpg";
import aboutshape2 from "../assets/g/images/aboutshape2.svg";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import SimpleModal from "@material-ui/core/Modal";
import { TextareaAutosize } from "@material-ui/core";

const tileData = [
  {
    img: blog1,
    title: "Image",
    author: "author",
    cols: 2,
  },
];

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 580,
    height: 250,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  blog1: {
    margin: 10,
  },
  blog2: {
    margin: 10,
    width: 60,
    height: 60,
  },
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
}));

function Corps() {
  const [roomtopic, setroomtopic] = useState("");
  const [description, setdescription] = useState("");
  const [currency, setCurrency] = React.useState("");
  const [submit, setsubmit] = useState(false);
  const [age, setAge] = React.useState("");
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const currencies = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
  ];

  const [rooms, setrooms] = useContext(Context);

  const handleChange2 = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handlechange = (e) => {
    setroomtopic(e.target.value);
  };
  const handlechange1 = (e) => {
    setdescription(e.target.value);
  };

  const Submit = (e) => {
    setsubmit(true);
    setOpen(false);
    e.preventDefault();

    //Add to the previous rooms a new instance
    setrooms((prevrooms) => [
      ...prevrooms,
      { name: roomtopic, description: description },
    ]);

    var newWindow = window.open("/chatroom");
    newWindow.my_special_setting = roomtopic;
    console.log(newWindow.my_special_setting);
  };

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h5> Little step before the fun starts</h5> <br />
      <div className="room-info">
        <div className="right-side-container">
          <div className="description">
            <TextField
              id="filled-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue=""
              variant="filled"
              value={description}
              onChange={handlechange1}
            />
          </div>
        </div>

        <div className="left-side-container">
          <div className="topic">
            <TextField
              id="filled-basic"
              label="Topic"
              variant="filled"
              size="small"
              value={roomtopic}
              onChange={handlechange}
              color="secondary"
            />
          </div>

          <div className="platform-submit">
            <div className="platform">
              <FormControl
                variant="filled"
                size="small"
                className={classes.formControl}
              >
                <InputLabel htmlFor="filled-age-native-simple">
                  platform
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange2}
                  inputProps={{
                    name: "age",
                    id: "filled-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Google Hangout</option>
                  <option value={20}>Google Meet</option>
                  <option value={30}>Jitsi</option>
                </Select>
              </FormControl>
            </div>

            <div className="submit-container">
              <a className="main-btn" type="submit" onClick={Submit}>
                {" "}
                Submit{" "}
              </a>
              <SimpleModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const [user, setUser] = useState([]);
  //By default, the rooms list is empty
  const [visible, setvisible] = useState(false);
  //handle close for popup, ist past as a prop to popup

  const handleclose = () => {
    console.log("handle close executed");
    setvisible(false);
  };

  //SYNTAXE USE  event.target.name, event.target.value;
  //Onlick callback function: add a new room to the array

  //Display the list of Live rooms

  const roomslist = rooms.map((name) => {
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={blog1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {name.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href={"https://meet.jit.si/" + name.name} target="_blank">
              {" "}
              Join us{" "}
            </a>
          </Button>
        </CardActions>
      </Card>

     
    );
  });

  return (
    <div>
      <div id="features" className="services-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center pb-40">
                <div className="line m-auto"> </div>
                <h3 class="title">
                  {" "}
                  We are live! take a deep breath && Jump In,{" "}
                  <span> Or... create your OWN room</span>
                </h3>
              </div>
              <div className="room-new-button">
                <a href="#" className="main-btn" onClick={handleOpen}>
                  {" "}
                  New Room{" "}
                </a>
                <Modal open={open} onClose={handleClose}>
                  {body}
                </Modal>
              </div>
              <div>
                {" "}
                <h2 className="section-title text-center pb-40">
                  {" "}
                  #Live now{" "}
                </h2>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="rooms-container">
          {roomslist} {/* Map through the rooms list && display them */}
        </div>
      </div>

      <div id="about" className="about-area pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-content mt-50 wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="section-title">
                  <div className="line"></div>
                  <h3 className="title">
                    Quick & Easy <span>to Use Bootstrap Template</span>
                  </h3>
                </div>
                <p className="text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing.
                </p>
                <a href="#" className="main-btn">
                  Try it Free
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-image text-center mt-50 wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src={about1} alt="about" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <img src={aboutshape1} alt="shape" />
        </div>
      </div>

      <div className="about-area pt-70">
        <div className="about-shape-2">
          <img src={aboutshape2} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-last">
              <div
                className="about-content mt-50 wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="section-title">
                  <div className="line"></div>
                  <h3 className="title">
                    Modern design <span> with Essential Features</span>
                  </h3>
                </div>
                <p className="text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing.
                </p>
                <a href="#" className="main-btn">
                  Try it Free
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-first">
              <div
                className="about-image text-center mt-50 wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src={about2} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-content mt-50 wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="section-title">
                  <div className="line"></div>
                  <h3 className="title">
                    <span>Crafted for</span> SaaS, App and Software Landing Page
                  </h3>
                </div>
                <p className="text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing.
                </p>
                <a href="#" className="main-btn">
                  Try it Free
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-image text-center mt-50 wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src={about3} alt="about" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <img src={aboutshape1} alt="shape" />
        </div>
      </div>

      <div id="facts" className="video-counter pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="video-content mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img className="dots" src={dots} alt="dots" />
                <div className="video-wrapper">
                  <div className="video-image">
                    <img src={video} alt="video" />
                  </div>
                  <div className="video-icon">
                    <a
                      href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                      className="video-popup"
                    >
                      <i className="lni-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="counter-wrapper mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="counter-content">
                  <div className="section-title">
                    <div className="line"></div>
                    <h3 className="title">
                      Cool facts <span> this about app</span>
                    </h3>
                  </div>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    seiam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                <div className="row no-gutters">
                  <div className="col-4">
                    <div className="single-counter counter-color-1 d-flex align-items-center justify-content-center">
                      <div className="counter-items text-center">
                        <span className="count">
                          <span className="counter">125</span>K
                        </span>
                        <p className="text">Downloads</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="single-counter counter-color-2 d-flex align-items-center justify-content-center">
                      <div className="counter-items text-center">
                        <span className="count">
                          <span className="counter">87</span>K
                        </span>
                        <p className="text">Active Users</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="single-counter counter-color-3 d-flex align-items-center justify-content-center">
                      <div className="counter-items text-center">
                        <span className="count">
                          <span className="counter">4.8</span>
                        </span>
                        <p className="text">User Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="team" className="team-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="section-title text-center pb-30">
                <div className="line m-auto"></div>
                <h3 className="title">
                  <span>Meet Our</span> Creative Team Members
                </h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div
                className="single-team text-center mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="team-image">
                  <img src={team1} alt="Team" />
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-twitter-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-instagram-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h5 className="holder-name">
                    <a href="#">Isabela Moreira</a>
                  </h5>
                  <p className="text">Founder and CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div
                className="single-team text-center mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="team-image">
                  <img src={team2} alt="Team" />
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-twitter-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-instagram-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h5 className="holder-name">
                    <a href="#">Elon Musk</a>
                  </h5>
                  <p className="text">Sr. Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div
                className="single-team text-center mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="team-image">
                  <img src={team3} alt="Team" />
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-twitter-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-instagram-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h5 className="holder-name">
                    <a href="#">Fiona Smith</a>
                  </h5>
                  <p className="text">Business Development Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="testimonial" className="testimonial-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="section-title text-center pb-40">
                <div className="line m-auto"></div>
                <h3 className="title">
                  Users sharing<span> their experience</span>
                </h3>
              </div>
            </div>
          </div>
          <div
            className="row testimonial-active wow fadeInUpBig"
            data-wow-duration="1s"
            data-wow-delay="0.8s"
          >
            <div className="col-lg-4">
              <div className="single-testimonial">
                <div className="testimonial-review d-flex align-items-center justify-content-between">
                  <div className="quota">
                    <i className="lni-quotation"></i>
                  </div>
                  <div className="star">
                    <ul>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
                    sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-image">
                    <img className="shape" src={textimonialshape} alt="shape" />
                    <img className="author" src={author1} alt="author1" />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="holder-name">Jenny Deo</h6>
                    <p className="text">CEO, SpaceX</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-testimonial">
                <div className="testimonial-review d-flex align-items-center justify-content-between">
                  <div className="quota">
                    <i className="lni-quotation"></i>
                  </div>
                  <div className="star">
                    <ul>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
                    sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-image">
                    <img className="shape" src={textimonialshape} alt="shape" />
                    <img className="author" src={author2} alt="author" />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="holder-name">Marjin Otte</h6>
                    <p className="text">UX Specialist, Yoast</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-testimonial">
                <div className="testimonial-review d-flex align-items-center justify-content-between">
                  <div className="quota">
                    <i className="lni-quotation"></i>
                  </div>
                  <div className="star">
                    <ul>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
                    sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-image">
                    <img className="shape" src={textimonialshape} alt="shape" />
                    <img className="author" src={author3} alt="author" />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="holder-name">David Smith</h6>
                    <p className="text">CTO, Alphabet</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-testimonial">
                <div className="testimonial-review d-flex align-items-center justify-content-between">
                  <div className="quota">
                    <i className="lni-quotation"></i>
                  </div>
                  <div className="star">
                    <ul>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                      <li>
                        <i className="lni-star-filled"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
                    sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-image">
                    <img className="shape" src={textimonialshape} alt="shape" />
                    <img className="author" src={author2} alt="author" />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="holder-name">Fajar Siddiq</h6>
                    <p className="text">COO, MakerFlix</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="blog" className="blog-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title pb-35">
                <div className="line"></div>
                <h3 className="title">
                  <span>Our Recent</span> Blog Posts
                </h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7">
              <div
                className="single-blog mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="blog-image">
                  <img src={blog1} alt="blog" />
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      Posted By: <a href="#">Admin</a>
                    </li>
                    <li>03 June, 2023</li>
                  </ul>
                  <p className="text">
                    Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod
                    tempor invidunt labore.
                  </p>
                  <a className="more" href="#">
                    Learn More <i className="lni-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div
                className="single-blog mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="blog-image">
                  <img src={blog2} alt="blog" />
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      Posted By: <a href="#">Admin</a>
                    </li>
                    <li>03 June, 2023</li>
                  </ul>
                  <p className="text">
                    Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod
                    tempor invidunt labore.
                  </p>
                  <a className="more" href="#">
                    Learn More <i className="lni-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div
                className="single-blog mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="blog-image">
                  <img src={blog3} alt="blog" />
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      Posted By: <a href="#">Admin</a>
                    </li>
                    <li>03 June, 2023</li>
                  </ul>
                  <p className="text">
                    Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod
                    tempor invidunt labore.
                  </p>
                  <a className="more" href="#">
                    Learn More <i className="lni-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>

      <div className="container">
        <div className="row">
          <div className="col-lg-"></div>
        </div>
      </div>
    </div>
  );
}
export default Corps;
