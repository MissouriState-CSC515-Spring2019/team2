import React from 'react';
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook';
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter';
import Pinterest from 'react-sharingbuttons/dist/buttons/Pinterest';
import '../css/social-sharing.css';

class Image  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {URL_for_social_media: window.location.hash.substr(1)}; //this holds the current link for social-media sharing (NOT the localhost url)
      }
    render() {
        if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomCat")
            return (
                <div>
                    <div className="container text-center">
                        <img className="img-fluid" src={"https://purr.objects-us-east-1.dream.io/i/" + window.location.hash.substr(1)}/>
                    </div>

                    <div className="row">
                        <h6 className="col">
                            <Facebook url={"https://purr.objects-us-east-1.dream.io/i/" + this.state.URL_for_social_media} />
                            <Twitter url={"https://purr.objects-us-east-1.dream.io/i/" + this.state.URL_for_social_media} />
                            <Pinterest url={"https://purr.objects-us-east-1.dream.io/i/" + this.state.URL_for_social_media} />
                         </h6>
                    </div>
                </div>
                
            )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomDog")
            if (window.location.hash.substr(1).split('.').pop() === 'mp4') {
                return (
                <div>
                    <video controls autoPlay muted>
                    <source className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)} type="video/mp4"/>
                    </video>
                    <div className="row">
                        <h6 className="col">
                            <Facebook url={"https://random.dog/" + this.state.URL_for_social_media} />
                            <Twitter url={"https://random.dog/" + this.state.URL_for_social_media} />
                            <Pinterest url={"https://random.dog/" + this.state.URL_for_social_media} />
                         </h6>
                    </div>
                </div>
                )
    
            } else if (window.location.hash.substr(1).split('.').pop() === 'webm') {
                return (
                <div>
                    <video controls autoPlay muted>
                    <source className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)} type="video/webm"/>
                    </video>
                    <div className="row">
                        <h6 className="col">
                            <Facebook url={"https://random.dog/" + this.state.URL_for_social_media} />
                            <Twitter url={"https://random.dog/" + this.state.URL_for_social_media} />
                            <Pinterest url={"https://random.dog/" + this.state.URL_for_social_media} />
                         </h6>
                    </div>
                </div>
                )
                }    
                else 
                    return (
                        <div>
                            <div className="container text-center">
                                <img className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)}/>
                            </div>
                            <div className="row">
                                <h6 className="col">
                                    <Facebook url={"https://random.dog/" + this.state.URL_for_social_media} />
                                    <Twitter url={"https://random.dog/" + this.state.URL_for_social_media} />
                                    <Pinterest url={"https://random.dog/" + this.state.URL_for_social_media} />
                                </h6>
                            </div>
                        </div>
                    )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomFox")
            return (
                <div>
                    <div className="container text-center">
                        <img className="img-fluid" src={"http://randomfox.ca/images/" + window.location.hash.substr(1)}/>
                    </div>
                    <div className="row">
                        <h6 className="col">
                            <Facebook url={"http://randomfox.ca/images/" + this.state.URL_for_social_media} />
                            <Twitter url={"http://randomfox.ca/images/" + this.state.URL_for_social_media} />
                            <Pinterest url={"http://randomfox.ca/images/" + this.state.URL_for_social_media} />
                         </h6>
                    </div>
                </div>
                
            )
    }
        
}

export default Image;