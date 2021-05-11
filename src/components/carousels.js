import * as React from "react";
import "jquery";
import "./carousels.css"


import img1 from "../images/a1.jpg"
import img2 from "../images/a2.jpg"
import img3 from "../images/a3.jpg"
import img4 from "../images/a4.jpg"


import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "bootstrap/dist/js/bootstrap.min.js"

const Carousel=()=>(
    <div className="container">
        <header className="cont">
            <div className="col-sm-6 col-xl-3 m-3 p-3">
                <div id="my-carousel0" className="carousel slide" data-toggle="modal" data-target="#mymodal" >
                    <ol className="carousel-indicators">
                        <li data-target="#my-carousel0" data-slide-to="0" className="active"></li>
                        <li data-target="#my-carousel0" data-slide-to="1"></li>
                        <li data-target="#my-carousel0" data-slide-to="2"></li>
                        <li data-target="#my-carousel0" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="caorusel-item">
                            <div className="carousel-item active">
                                <img className="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                            </div>
                            <div className="carousel-item" >
                                <img className="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                    
                            </div>
                            <div className="carousel-item">
                                <img className="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                            </div>             
                            <div className="carousel-item">
                                <img className="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <h6>Land of atthens</h6>   
                    <p>Lorem ipsum dolor sit amet, consectetur csdkm smv s  temporibus wefkwi iow</p>
                    <h6 className="price">£90 For 1 to 7 days Up to 6 stops </h6>
                </div>
            </div>
            <div className="col-sm-6 col-xl-3 m-3 p-3">
                <div id="my-carousel1" className="carousel slide" data-toggle="modal" data-target="#mymodal">
                    <ol className="carousel-indicators" >
                        <li data-target="#my-carousel1" data-slide-to="0" className="active"></li>
                        <li data-target="#my-carousel1" data-slide-to="1"></li>
                        <li data-target="#my-carousel1" data-slide-to="2"></li>
                        <li data-target="#my-carousel1" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                        </div>
                        <div className="carousel-item" >
                            <img className="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                
                        </div>
                        <div className="carousel-item">
                            <img className="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                        </div>             
                        <div className="carousel-item">
                            <img className="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                            
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <h6>Land of atthens</h6>   
                    <p>Lorem ipsum dolor sit amet, consectetur csdkm smv slm d  temporibus dolore</p>
                    <h6 className="price">£90 For 1 to 7 days Up to 6 stops </h6>
                </div>
            </div>
                
            
            <div className="col-sm-6 col-xl-3 m-3 p-3">
                <div id="my-carousel2"  className="carousel slide " data-toggle="modal" data-target="#mymodal">
                    <ol className="carousel-indicators" >
                        <li data-target="#my-carousel2" data-slide-to="0" className="active"></li>
                        <li data-target="#my-carousel2" data-slide-to="1"></li>
                        <li data-target="#my-carousel2" data-slide-to="2"></li>
                        <li data-target="#my-carousel2" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                        </div>
                        <div className="carousel-item" >
                            <img className="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                
                        </div>
                        <div className="carousel-item">
                            <img className="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                        </div>             
                        <div className="carousel-item">
                            <img className="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                        
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <h6>Land of atthens</h6>   
                    <p>Lorem ipsum dolor sit amet, consectetur csdkm smv slm  bus doloretempori</p>
                    <h6 className="price">£90 For 1 to 7 days Up to 6 stops </h6>
                </div>
            </div>
        
            <div id="mymodal" className="modal fade" tabindex="-1" role="document" aria-labelledby="my-modal-title" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div id="my-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators" >
                                    <li data-target="#my-carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#my-carousel" data-slide-to="1"></li>
                                    <li data-target="#my-carousel" data-slide-to="2"></li>
                                    <li data-target="#my-carousel" data-slide-to="3"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" >
                                        <img className="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                                    </div>
                                    <div className="carousel-item" >
                                        <img className="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                            
                                    </div>
                                    <div className="carousel-item" >
                                        <img className="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                                    </div>             
                                    <div className="carousel-item" >
                                        <img className="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mymodal" className="modal fade" tabindex="-1" role="document" aria-labelledby="my-modal-title" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content ">
            
                        <div className="modal-body">
                            <div id="my-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators" >
                                    <li data-target="#my-carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#my-carousel" data-slide-to="1"></li>
                                    <li data-target="#my-carousel" data-slide-to="2"></li>
                                    <li data-target="#my-carousel" data-slide-to="3"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" >
                                        <img className="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                                    </div>
                                    <div className="carousel-item" >
                                        <img className="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                            
                                    </div>
                                    <div className="carousel-item" >
                                        <img className="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                                    </div>             
                                    <div className="carousel-item" >
                                        <img className="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mymodal2" className="modal fade" tabindex="-1" role="document" aria-labelledby="my-modal-title" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div id="my-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators" >
                                    <li data-target="#my-carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#my-carousel" data-slide-to="1"></li>
                                    <li data-target="#my-carousel" data-slide-to="2"></li>
                                    <li data-target="#my-carousel" data-slide-to="3"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" >
                                        <img className="img1" src={img1} alt="i1" style={{width: "100%"}}></img>
                                    </div>
                                    <div className="carousel-item" >
                                        <img className="img2" src={img2} alt="i2" style={{width: "100%"}}></img>
                            
                                    </div>
                                    <div className="carousel-item" >
                                        <img className="img3" src={img3} alt="i3" style={{width: "100%"}}></img>
                                    </div>             
                                    <div className="carousel-item" >
                                        <img className="img4" src={img4} alt="i4" style={{width: "100%"}}></img>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header> 
    </div>
)

export default Carousel