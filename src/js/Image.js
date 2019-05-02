import React from 'react';

class Image  extends React.Component {
    render() {
        if(window.location.pathname.split('/')[window.location.pathname.split('/').length-2] === "randomCat")
            return (
                <div>
                    <img className="img-fluid" src={"https://purr.objects-us-east-1.dream.io/i/" + this.props.match.params.cat}/>
                </div>
            )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-2] === "randomDog")
            return (
                <div>
                    <img className="img-fluid" src={"https://random.dog/" + this.props.match.params.dog}/>
                </div>
            )
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-2] === "randomFox")
        return (
            <div>
                <img className="img-fluid" src={"http://randomfox.ca/images/" + this.props.match.params.fox}/>
            </div>
        )
    }
        
}

export default Image;