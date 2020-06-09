
import { Roomprovider } from "./components/context";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Entete from "./components/entete.js";
import Slider from "./components/slider.js"
import Corps from "./components/Corps.js";
import Footer from "./components/Footer.js";
import "./App.css"


function App() {


  return (



    <div class="brand-area pt-90">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="brand-logo d-flex align-items-center justify-content-center justify-content-md-between">
              <div class="single-logo mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <img src="assets/images/brand-1.png" alt="brand"> </img>
              </div>
              <div class="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <img src="assets/images/brand-2.png" alt="brand"> </img>
              </div>
              <div class="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <img src="assets/images/brand-3.png" alt="brand"> </img>
              </div>
              <div class="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.4s">
                <img src="assets/images/brand-4.png" alt="brand"> </img>
              </div>
              <div class="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                <img src="assets/images/brand-5.png" alt="brand"> </img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="features" class="services-area pt-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title text-center pb-40">
              <div class="line m-auto"></div>
              <h3 class="title">Clean and simple design, <span> Comes with everything you need to get started!</span></h3>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-7 col-sm-8">
            <div class="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <div class="services-icon">
                <img class="shape" src="assets/images/services-shape.svg" alt="shape"> </img>
                <img class="shape-1" src="assets/images/services-shape-1.svg" alt="shape"> </img>
                <i class="lni-baloon"></i>
              </div>
              <div class="services-content mt-30">
                <h4 class="services-title"><a href="#">Clean</a></h4>
                <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                <a class="more" href="#">Learn More <i class="lni-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-8">
            <div class="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="services-icon">
                <img class="shape" src="assets/images/services-shape.svg" alt="shape"></img>
                <img class="shape-1" src="assets/images/services-shape-2.svg" alt="shape"> </img>
                <i class="lni-cog"></i>
              </div>
              <div class="services-content mt-30">
                <h4 class="services-title"><a href="#">Robust</a></h4>
                <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                <a class="more" href="#">Learn More <i class="lni-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-8">
            <div class="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div class="services-icon">
                <img class="shape" src="assets/images/services-shape.svg" alt="shape"> </img>
                <img class="shape-1" src="assets/images/services-shape-3.svg" alt="shape"> </img>
                <i class="lni-bolt-alt"></i>
              </div>
              <div class="services-content mt-30">
                <h4 class="services-title"><a href="#">Powerful</a></h4>
                <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                <a class="more" href="#">Learn More <i class="lni-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="about" class="about-area pt-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="section-title">
                <div class="line"></div>
                <h3 class="title">Quick & Easy <span>to Use Bootstrap Template</span></h3>
              </div>
              <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
              <a href="#" class="main-btn">Try it Free</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
              <img src="assets/images/about1.svg" alt="about"> </img>
            </div>
          </div>
        </div>
      </div>
      <div class="about-shape-1">
        <img src="assets/images/about-shape-1.svg" alt="shape"> </img>
      </div>
    </div>



    <div class="about-area pt-70">
      <div class="about-shape-2">
        <img src="assets/images/about-shape-2.svg" alt="shape"> </img>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-lg-last">
            <div class="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="section-title">
                <div class="line"></div>
                <h3 class="title">Modern design <span> with Essential Features</span></h3>
              </div>
              <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
              <a href="#" class="main-btn">Try it Free</a>
            </div>
          </div>
          <div class="col-lg-6 order-lg-first">
            <div class="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
              <img src="assets/images/about2.svg" alt="about"> </img>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="about-area pt-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="section-title">
                <div class="line"></div>
                <h3 class="title"><span>Crafted for</span> SaaS, App and Software Landing Page</h3>
              </div>
              <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
              <a href="#" class="main-btn">Try it Free</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
              <img src="assets/images/about3.svg" alt="about"> </img>
            </div>
          </div>
        </div>
      </div>
      <div class="about-shape-1">
        <img src="assets/images/about-shape-1.svg" alt="shape"> </img>
      </div>
    </div>



    <div id="facts" class="video-counter pt-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="video-content mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <img class="dots" src="assets/images/dots.svg" alt="dots"> </img>
              <div class="video-wrapper">
                <div class="video-image">
                  <img src="assets/images/video.png" alt="video"> </img>
                </div>
                <div class="video-icon">
                  <a href="https://www.youtube.com/watch?v=r44RKWyfcFw" class="video-popup"><i class="lni-play"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="counter-wrapper mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div class="counter-content">
                <div class="section-title">
                  <div class="line"></div>
                  <h3 class="title">Cool facts <span> this about app</span></h3>
                </div>
                <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              </div>
              <div class="row no-gutters">
                <div class="col-4">
                  <div class="single-counter counter-color-1 d-flex align-items-center justify-content-center">
                    <div class="counter-items text-center">
                      <span class="count"><span class="counter">125</span>K</span>
                      <p class="text">Downloads</p>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="single-counter counter-color-2 d-flex align-items-center justify-content-center">
                    <div class="counter-items text-center">
                      <span class="count"><span class="counter">87</span>K</span>
                      <p class="text">Active Users</p>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="single-counter counter-color-3 d-flex align-items-center justify-content-center">
                    <div class="counter-items text-center">
                      <span class="count"><span class="counter">4.8</span></span>
                      <p class="text">User Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div id="team" class="team-area pt-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="section-title text-center pb-30">
              <div class="line m-auto"></div>
              <h3 class="title"><span>Meet Our</span> Creative Team Members</h3>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-7 col-sm-8">
            <div class="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <div class="team-image">
                <img src="assets/images/team-1.png" alt="Team"> </img>
                <div class="social">
                  <ul>
                    <li><a href="#"><i class="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i class="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i class="lni-instagram-filled"></i></a></li>
                    <li><a href="#"><i class="lni-linkedin-original"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="team-content">
                <h5 class="holder-name"><a href="#">Isabela Moreira</a></h5>
                <p class="text">Founder and CEO</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-8">
            <div class="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="team-image">
                <img src="assets/images/team-2.png" alt="Team"> </img>
                <div class="social">
                  <ul>
                    <li><a href="#"><i class="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i class="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i class="lni-instagram-filled"></i></a></li>
                    <li><a href="#"><i class="lni-linkedin-original"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="team-content">
                <h5 class="holder-name"><a href="#">Elon Musk</a></h5>
                <p class="text">Sr. Software Engineer</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-8">
            <div class="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div class="team-image">
                <img src="assets/images/team-3.png" alt="Team"> </img>
                <div class="social">
                  <ul>
                    <li><a href="#"><i class="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i class="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i class="lni-instagram-filled"></i></a></li>
                    <li><a href="#"><i class="lni-linkedin-original"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="team-content">
                <h5 class="holder-name"><a href="#">Fiona Smith</a></h5>
                <p class="text">Business Development Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="testimonial" class="testimonial-area pt-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="section-title text-center pb-40">
              <div class="line m-auto"></div>
              <h3 class="title">Users sharing<span> their experience</span></h3>
            </div>
          </div>
        </div>
        <div class="row testimonial-active wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
          <div class="col-lg-4">
            <div class="single-testimonial">
              <div class="testimonial-review d-flex align-items-center justify-content-between">
                <div class="quota">
                  <i class="lni-quotation"></i>
                </div>
                <div class="star">
                  <ul>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                  </ul>
                </div>
              </div>
              <div class="testimonial-text">
                <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
              </div>
              <div class="testimonial-author d-flex align-items-center">
                <div class="author-image">
                  <img class="shape" src="assets/images/textimonial-shape.svg" alt="shape"> </img>
                  <img class="author" src="assets/images/author-1.png" alt="author"> </img>
                </div>
                <div class="author-content media-body">
                  <h6 class="holder-name">Jenny Deo</h6>
                  <p class="text">CEO, SpaceX</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-testimonial">
              <div class="testimonial-review d-flex align-items-center justify-content-between">
                <div class="quota">
                  <i class="lni-quotation"></i>
                </div>
                <div class="star">
                  <ul>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                  </ul>
                </div>
              </div>
              <div class="testimonial-text">
                <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
              </div>
              <div class="testimonial-author d-flex align-items-center">
                <div class="author-image">
                  <img class="shape" src="assets/images/textimonial-shape.svg" alt="shape"> </img>
                  <img class="author" src="assets/images/author-2.png" alt="author"> </img>
                </div>
                <div class="author-content media-body">
                  <h6 class="holder-name">Marjin Otte</h6>
                  <p class="text">UX Specialist, Yoast</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-testimonial">
              <div class="testimonial-review d-flex align-items-center justify-content-between">
                <div class="quota">
                  <i class="lni-quotation"></i>
                </div>
                <div class="star">
                  <ul>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                  </ul>
                </div>
              </div>
              <div class="testimonial-text">
                <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
              </div>
              <div class="testimonial-author d-flex align-items-center">
                <div class="author-image">
                  <img class="shape" src="assets/images/textimonial-shape.svg" alt="shape"> </img>
                  <img class="author" src="assets/images/author-3.png" alt="author"> </img>
                </div>
                <div class="author-content media-body">
                  <h6 class="holder-name">David Smith</h6>
                  <p class="text">CTO, Alphabet</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-testimonial">
              <div class="testimonial-review d-flex align-items-center justify-content-between">
                <div class="quota">
                  <i class="lni-quotation"></i>
                </div>
                <div class="star">
                  <ul>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                  </ul>
                </div>
              </div>
              <div class="testimonial-text">
                <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
              </div>
              <div class="testimonial-author d-flex align-items-center">
                <div class="author-image">
                  <img class="shape" src="assets/images/textimonial-shape.svg" alt="shape"> </img>
                  <img class="author" src="assets/images/author-2.png" alt="author"> </img>
                </div>
                <div class="author-content media-body">
                  <h6 class="holder-name">Fajar Siddiq</h6>
                  <p class="text">COO, MakerFlix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="blog" class="blog-area pt-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-title pb-35">
              <div class="line"></div>
              <h3 class="title"><span>Our Recent</span> Blog Posts</h3>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-7">
            <div class="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <div class="blog-image">
                <img src="assets/images/blog-1.jpg" alt="blog"> </img>
              </div>
              <div class="blog-content">
                <ul class="meta">
                  <li>Posted By: <a href="#">Admin</a></li>
                  <li>03 June, 2023</li>
                </ul>
                <p class="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                <a class="more" href="#">Learn More <i class="lni-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-7">
            <div class="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="blog-image">
                <img src="assets/images/blog-2.jpg" alt="blog"> </img>
              </div>
              <div class="blog-content">
                <ul class="meta">
                  <li>Posted By: <a href="#">Admin</a></li>
                  <li>03 June, 2023</li>
                </ul>
                <p class="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                <a class="more" href="#">Learn More <i class="lni-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-7">
            <div class="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div class="blog-image">
                <img src="assets/images/blog-3.jpg" alt="blog"> </img>
              </div>
              <div class="blog-content">
                <ul class="meta">
                  <li>Posted By: <a href="#">Admin</a></li>
                  <li>03 June, 2023</li>
                </ul>
                <p class="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                <a class="more" href="#">Learn More <i class="lni-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    </div >
  );
}

export default App;


