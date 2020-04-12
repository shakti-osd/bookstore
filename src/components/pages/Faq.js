import React from 'react'
import {NavLink} from 'react-router-dom'

function Faq() {
    return (
        <>
            <div className="ht__bradcaump__area bg-image--4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Faq</h2>
                                <nav className="bradcaump-content">
                                <NavLink className="breadcrumb_item" to="index.html">Home</NavLink>
                                <span className="brd-separetor">/</span>
                                <span className="breadcrumb_item active">Faq</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="wn__faq__area bg--white pt--80 pb--60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wn__accordeion__content">
                                <h2>Below are frequently asked questions, you may find the answer for yourself</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>
                            </div>
                            <div id="accordion" className="wn_accordion" role="tablist">
                                <div className="card">
                                    <div className="acc-header" role="tab" id="headingOne">
                                        <h5>
                                            <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">Mauris congue euismod purus at semper. Morbi et vulputate massa?</a>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="acc-header" role="tab" id="headingTwo">
                                        <h5>
                                            <a className="collapsed" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                                                Djanj  sit amet, consectetur adipisicing elit, sed do eiusmod tem pororem ?. </a>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="acc-header" role="tab" id="headingThree">
                                        <h5>
                                            <a className="collapsed" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                                                Vestibulum a lorem placerat, porttitor urna vel?</a>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="acc-header" role="tab" id="headingFour">
                                        <h5>
                                            <a className="collapsed" data-toggle="collapse" href="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseFour">
                                                Aenean elit orci, efficitur quis nisl at, accumsan? </a>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div className="card-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="acc-header" role="tab" id="headingFive">
                                        <h5>
                                            <a className="collapsed" data-toggle="collapse" href="#collapseFive" role="button" aria-expanded="false" aria-controls="collapseFive">
                                                Pellentesque habitant morbi tristique senectus et netus?</a>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                                        <div className="card-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="acc-header" role="tab" id="headingSix">
                                        <h5>
                                            <a className="collapsed" data-toggle="collapse" href="#collapseSix" role="button" aria-expanded="false" aria-controls="collapseSix">
                                                Aenean elit orci, efficitur quis nisl at?</a>
                                        </h5>
                                    </div>
                                    <div id="collapseSix" className="collapse" role="tabpanel" aria-labelledby="headingSix" data-parent="#accordion">
                                        <div className="card-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="acc-header" role="tab" id="headingSeven">
                                        <h5>
                                            <a className="collapsed" data-toggle="collapse" href="#collapseSeven" role="button" aria-expanded="false" aria-controls="collapseSeven">
                                                Morbi gravida, nisi id fringilla ultricies, elit lorem?</a>
                                        </h5>
                                    </div>
                                    <div id="collapseSeven" className="collapse" role="tabpanel" aria-labelledby="headingSeven" data-parent="#accordion">
                                        <div className="card-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="acc-header" role="tab" id="headingEight">
                                        <h5>
                                            <a className="collapsed" data-toggle="collapse" href="#collapseEight" role="button" aria-expanded="false" aria-controls="collapseEight">
                                                Djanj  sit amet, consectetur adipisicing elit, sed do eiusmod tem pororem ?. </a>
                                        </h5>
                                    </div>
                                    <div id="collapseEight" className="collapse" role="tabpanel" aria-labelledby="headingEight" data-parent="#accordion">
                                        <div className="card-body">Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </section>
        </>
    )
}

export default Faq
