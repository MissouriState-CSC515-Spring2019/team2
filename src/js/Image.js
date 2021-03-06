import React from 'react';
import Menu from './Menu';
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook';
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter';
import Pinterest from 'react-sharingbuttons/dist/buttons/Pinterest';
import '../css/social-sharing.css';
import '../css/checkbox.css';

var reload;

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {URL_for_social_media: window.location.hash.substr(1)} //this holds the current link for social-media sharing (NOT the localhost url)
      }
    
    componentDidMount() {
        reload = setInterval(function() {
            if (document.getElementById("autoReload").checked) {
                if (window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomCat") {
                    document.getElementById("catButton").click();
                } else if (window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomDog") {
                    document.getElementById("dogButton").click();
                } else if (window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomFox") {
                    document.getElementById("foxButton").click();
                }
            }
        },5000)
       
    }

    componentWillUnmount() {
        clearInterval(reload);
    }

    render() {
        document.getElementById("loading").style.opacity = 0;
        if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomCat")
            return (
                <div>
                    <div className="container text-center">
                        <h1 className="display-4">
					        Random Cat Pic
					    </h1>
                        <Menu history={this.props.history}/>
                        <div className="row justify-content-md-center">
                            <h3>
                                <label className='container' htmlFor='autoReload'> Auto-Load new images
                                    <input type='checkbox' id='autoReload' /> 
                                    <span className='checkmark'> </span>
                                </label>
                            </h3>
                        </div>
                        <img className="img-fluid" src={"https://purr.objects-us-east-1.dream.io/i/" + window.location.hash.substr(1)}/>
                    </div>

                    <div className="row">
                        <h6 className="col">
                            <Facebook url={"https://purr.objects-us-east-1.dream.io/i/" + window.location.hash.substr(1)} />
                            <Twitter url={"https://purr.objects-us-east-1.dream.io/i/" + window.location.hash.substr(1)} />
                            <Pinterest url={"https://purr.objects-us-east-1.dream.io/i/" + window.location.hash.substr(1)} />
                         </h6>
                    </div>
                    <button className="btn btn-secondary mx-auto" onClick={() => {this.props.history.push("/MadeBy")}}>Made By </button>
                </div>
                
            )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomDog")
            if (window.location.hash.substr(1).split('.').pop() === 'mp4') {
                return (
                <div>
                    <h1 className="display-4">
					    Random Dog Video
					</h1>
                    <Menu history={this.props.history}/>
                    <div className="row justify-content-md-center">
                        <h3>
                            <label className='container' htmlFor='autoReload'> Auto-Load new images
                                <input type='checkbox' id='autoReload' /> 
                                <span className='checkmark'> </span>
                            </label>
                        </h3>
                    </div>
                    <video controls autoPlay muted>
                    <source className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)} type="video/mp4"/>
                    </video>
                    <div className="row">
                        <h6 className="col">
                            <Facebook url={"https://random.dog/" + window.location.hash.substr(1)} />
                            <Twitter url={"https://random.dog/" + window.location.hash.substr(1)} />
                            <Pinterest url={"https://random.dog/" + window.location.hash.substr(1)} />
                         </h6>
                    </div>
                    <button className="btn btn-secondary mx-auto" onClick={() => {this.props.history.push("/MadeBy")}}>Made By </button>
                </div>
                )
    
            } else if (window.location.hash.substr(1).split('.').pop() === 'webm') {
                return (
                <div>
                    <h1 className="display-4">
					    Random Dog Video
					</h1>
                    <Menu history={this.props.history}/>
                    <div className="row justify-content-md-center">
                        <h3>
                            <label className='container' htmlFor='autoReload'> Auto-Load new images
                                <input type='checkbox' id='autoReload' /> 
                                <span className='checkmark'> </span>
                            </label>
                        </h3>
                    </div>
                    <video controls autoPlay muted>
                    <source className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)} type="video/webm"/>
                    </video>
                    <div className="row">
                        <h6 className="col">
                            <Facebook url={"https://random.dog/" + window.location.hash.substr(1)} />
                            <Twitter url={"https://random.dog/" + window.location.hash.substr(1)} />
                            <Pinterest url={"https://random.dog/" + window.location.hash.substr(1)} />
                         </h6>
                    </div>
                    <button className="btn btn-secondary mx-auto" onClick={() => {this.props.history.push("/MadeBy")}}>Made By </button>
                </div>
                )
                }    
                else 
                    return (
                        <div>
                            <div className="container text-center">
                                <h1 className="display-4">
					                Random Dog Pic
					            </h1>
                                <Menu history={this.props.history}/>
                                <div className="row justify-content-md-center">
                                    <h3>
                                        <label className='container' htmlFor='autoReload'> Auto-Load new images
                                            <input type='checkbox' id='autoReload' /> 
                                            <span className='checkmark'> </span>
                                        </label>
                                    </h3>
                                </div>
                                <img className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)}/>
                            </div>
                            <div className="row">
                                <h6 className="col">
                                    <Facebook url={"https://random.dog/" + window.location.hash.substr(1)} />
                                    <Twitter url={"https://random.dog/" + window.location.hash.substr(1)} />
                                    <Pinterest url={"https://random.dog/" + window.location.hash.substr(1)} />
                                </h6>
                            </div>
                            <button className="btn btn-secondary mx-auto" onClick={() => {this.props.history.push("/MadeBy")}}>Made By </button>
                        </div>
                    )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomFox")
            return (
                <div>
                    <div className="container text-center">
                        <h1 className="display-4">
					        Random Fox Pic
					    </h1>
                        <Menu history={this.props.history}/>
                        <div className="row justify-content-md-center">
                            <h3>
                                <label className='container' htmlFor='autoReload'> Auto-Load new images
                                    <input type='checkbox' id='autoReload' /> 
                                    <span className='checkmark'> </span>
                                </label>
                            </h3>
                        </div>
                        <img className="img-fluid" src={"http://randomfox.ca/images/" + window.location.hash.substr(1)}/>
                    </div>
                    <div className="row">
                        <h6 className="col">
                            <Facebook url={"http://randomfox.ca/images/" + window.location.hash.substr(1)} />
                            <Twitter url={"http://randomfox.ca/images/" + window.location.hash.substr(1)} />
                            <Pinterest url={"http://randomfox.ca/images/" + window.location.hash.substr(1)} />
                         </h6>
                    </div>
                    <button className="btn btn-secondary mx-auto" onClick={() => {this.props.history.push("/MadeBy")}}>Made By </button>
                </div>
                
            )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomFox")
            return (
                <div>
                    <div className="container text-center">
                        <h1 className="display-4">
					        Random Fox Pic
					    </h1>
                        <Menu history={this.props.history}/>
                        <div className="row justify-content-md-center">
                            <h3>
                                <label className='container' htmlFor='autoReload'> Auto-Load new images
                                    <input type='checkbox' id='autoReload' /> 
                                    <span className='checkmark'> </span>
                                </label>
                            </h3>
                        </div>
                        <img className="img-fluid" src={"http://randomfox.ca/images/" + window.location.hash.substr(1)}/>
                    </div>
                    <div className="row">
                        <h6 className="col">
                            <Facebook url={"http://randomfox.ca/images/" + window.location.hash.substr(1)} />
                            <Twitter url={"http://randomfox.ca/images/" + window.location.hash.substr(1)} />
                            <Pinterest url={"http://randomfox.ca/images/" + window.location.hash.substr(1)} />
                         </h6>
                    </div>
                    <button className="btn btn-secondary mx-auto" onClick={() => {this.props.history.push("/MadeBy")}}>Made By </button>
                </div>
                
            )
    }
    
        
}

export default Image;