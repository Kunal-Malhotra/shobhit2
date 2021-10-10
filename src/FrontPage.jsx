import React from "react";
import { Builder, Connect1, Connect2, Connect3, Connect4 } from "./images/icon";
import "./Frontpage.css";
import { Carousel } from "react-bootstrap";
import Products from "./Products";

const FrontPage = () => {
    return(
    <div>
        <img src={Builder} alt="image" className="builder"/>
        <div className="description">
            <div className="description1">YOU BUILD<br/></div>
            <div>WE SUPPLY</div>
        </div>
        <div className="products">
        <div className="Rectangle-5">
                    <div className="Rectangle-6">
                    <span className="We-Deal-In">We Deal In</span>
                    </div>        
                </div>  
            <Products />
        </div>
        <Carousel style={{width: "80%",margin: "5vh auto",border: "5px solid white"}}>
            <Carousel.Item>
                <img
                src="https://zaitoon.com.pk/wp-content/uploads/2019/07/Building-Materials-3.jpg"
                className="d-block w-100"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                src="https://civilrnd.com/wp-content/uploads/2020/05/collage.jpg"
                className="d-block w-100"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                src="https://b2bpurchase.com/wp-content/uploads/2018/07/pg-no-68.jpg"
                className="d-block w-100"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        <div className="pexels-soner-mazlum-6890408-1">
                <div className="Rectangle-5">
                    <div className="Rectangle-6">
                    <span className="We-Deal-In">Let's Get In Touch</span>
                    </div>        
                </div>
                <p className="Ready-to-start-your-next-project-with-us-Thats-great-Give-us-a-call-or-email-us-and-we-will-get-b">Ready to start your next project with us? That's great! Give us a call or email us and we will get back to you as soon as possible!</p>
                <div style={{display: "flex",justifyContent: "space-evenly",marginTop: "5rem"}}>
                    <div style={{display:"inline-block"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{width:"100%"}} width="50" height="50" fill="green" className="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <div style={{marginTop: "2rem"}}>+91 8860762540</div>
                    </div>
                    <div style={{display:"inline-block"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{width:"100%"}} width="50" height="50" fill="green" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>
                        <div style={{marginTop: "2rem"}}>Info@infrastore.com</div>
                    </div>
                </div>
        </div>
        <div class="background">
            <div class="container team">
                <div class="row">
                    <div class="card col-lg-3 col-md-3 col-sm-4 text-center">
                        <img class="card-img-top rounded-circle" src={Connect1} alt="Card image" />
                        <div class="card-body">
                            <h4 class="card-title">Kunal Malhotra</h4>
                            <p class="card-text">Job Description</p>
                        </div>
                    </div>
                    <div class="card col-lg-3 col-md-3 col-sm-4 text-center">
                        <img class="card-img-top rounded-circle" src={Connect2} alt="Card image" />
                        <div class="card-body">
                            <h4 class="card-title">Shobhit Mangla</h4>
                            <p class="card-text">Job Description</p>
                        </div>
                    </div>
                    <div class="card col-lg-3 col-md-3 col-sm-4 text-center">
                        <img class="card-img-top rounded-circle" src={Connect1} alt="Card image" />
                        <div class="card-body">
                            <h4 class="card-title">Dhruv Arora</h4>
                            <p class="card-text">Job Description</p>
                        </div>
                    </div>
                    <div class="card col-lg-3 col-md-3 col-sm-4 text-center">
                        <img class="card-img-top rounded-circle" src={Connect2} alt="Card image" />
                        <div class="card-body">
                            <h4 class="card-title">Shobhit Malhotra</h4>
                            <p class="card-text">Job Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    )
}

export default FrontPage;