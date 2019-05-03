import React from 'react';

class Image  extends React.Component {
    render() {
        if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomCat")
            return (
                <div className="container text-center">
                    <img className="img-fluid" src={"https://purr.objects-us-east-1.dream.io/i/" + window.location.hash.substr(1)}/>
                </div>
            )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomDog")
            if (window.location.hash.substr(1).split('.').pop() === 'mp4') {
                return (
                <div>
                    <video controls>
                    <source className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)} type="video/mp4"/>
                    </video>
                </div>
                )
    
            } else if (window.location.hash.substr(1).split('.').pop() === 'webm') {
                return (
                <div>
                    <video controls>
                    <source className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)} type="video/webm"/>
                    </video>
                </div>
                )
                }    
                else 
                    return (
                        <div className="container text-center">
                            <img className="img-fluid" src={"https://random.dog/" + window.location.hash.substr(1)}/>
                        </div>
                    )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomFox")
            return (
                <div className="container text-center">
                    <img className="img-fluid" src={"http://randomfox.ca/images/" + window.location.hash.substr(1)}/>
                </div>
            )
    }
        
}

export default Image;