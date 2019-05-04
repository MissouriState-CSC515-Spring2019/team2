import React from 'react';
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook';
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter';
import Pinterest from 'react-sharingbuttons/dist/buttons/Pinterest';
import '../css/social-sharing.css';

let url= '';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {URL_for_social_media: ''}; //this holds the current link for social-media sharing (NOT the localhost url)
      }

    fetchData(api) {
        fetch(api)
        .then(res => res.json())
        .then(
            (result) => {
                if(api === "https://aws.random.cat/meow") {
                    this.props.history.push("/randomCat#" + (result.file.split('/')[result.file.split('/').length-1]));
                    this.setState({
                        URL_for_social_media: 'https://purr.objects-us-east-1.dream.io/i/' + window.location.hash.substr(1)
                    });
                }
                else if(api === "https://random.dog/woof.json") {
                    this.props.history.push("/randomDog#" + (result.url.split('/')[result.url.split('/').length-1]));
                    this.setState({
                        URL_for_social_media: 'https://random.dog/' + window.location.hash.substr(1)
                    });
                }
                else if(api === "https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/") {
                    this.props.history.push("/randomFox#" + (result.image.split('/')[result.image.split('/').length-1]));
                    this.setState({
                        URL_for_social_media: 'http://randomfox.ca/images/' + window.location.hash.substr(1)
                    });
                }
            }
        )
    }

    render() {
        return (
        <div>
			<div className="row mb-2">
				<div className="col">
					<h1 className="display-4">
					Cute Animal Finder 5000
					</h1>
				</div>
			</div>
			<div className="row">
				<h3 className="col">
                    <button onClick={() => {this.fetchData("https://aws.random.cat/meow")}}>Cat</button>
				</h3>
				<h3 className="col">
                    <button onClick={() => {this.fetchData("https://random.dog/woof.json")}}>Dog</button>
				</h3>
				<h3 className="col">
                    <button onClick={() => {this.fetchData("https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/")}}>Fox</button>
				</h3>
			</div>
            <div className="row">
				<h6 className="col">
                    <Facebook url={this.state.URL_for_social_media} />
                    <Twitter url={this.state.URL_for_social_media} />
                    <Pinterest url={this.state.URL_for_social_media} />
				</h6>
			</div>
        </div>
        );
    }
}

export default Home;