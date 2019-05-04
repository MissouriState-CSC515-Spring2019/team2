import React from 'react';
import Menu from './Menu';

class Image  extends React.Component {
    render() {
        if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomCat")
            return (
                <div className="container text-center">
                    <h1 className="display-4">Random Cat Pic!</h1>
                    <Menu history={this.props.history}/>
                    <img className="img-fluid" src={"https://purr.objects-us-east-1.dream.io/i/" + window.location.hash.substr(1)}/>
                </div>
            )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomDog")
            if (window.location.hash.substr(1).split('.').pop() === 'mp4') {
                return (
                    <div>
                        <h1 className="display-4">Random Dog Video!</h1>
                        <Menu history={this.props.history}/>
                        <video controls>
                        <source className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)} type="video/mp4"/>
                        </video>
                    </div>
                )
    
            } else if (window.location.hash.substr(1).split('.').pop() === 'webm') {
                return (
                    <div>
                        <h1 className="display-4">Random Dog Video!</h1>
                        <Menu history={this.props.history}/>
                        <video controls>
                        <source className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)} type="video/webm"/>
                        </video>
                    </div>
                )
                }    
                else 
                    return (
                        <div className="container text-center">
                            <h1 className="display-4">Random Dog Pic!</h1>
                            <Menu history={this.props.history}/>
                            <img className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)}/>
                        </div>
                    )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomFox")
            return (
                <div className="container text-center">
                    <h1 className="display-4">Random Fox Pic!</h1>
                    <Menu history={this.props.history}/>
                    <img className="img-fluid" src={"http://randomfox.ca/images/" + window.location.hash.substr(1)}/>
                </div>
            )
    }
        
}

export default Image;