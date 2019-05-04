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
      }

    fetchData(api) {
        fetch(api)
        .then(res => res.json())
        .then(
            (result) => {
                if(api === "https://aws.random.cat/meow") {
                    this.props.history.push("/randomCat#" + (result.file.split('/')[result.file.split('/').length-1]))
                }
                else if(api === "https://random.dog/woof.json") {
                    this.props.history.push("/randomDog#" + (result.url.split('/')[result.url.split('/').length-1]))
                }
                else if(api === "https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/") {
                    this.props.history.push("/randomFox#" + (result.image.split('/')[result.image.split('/').length-1]))
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
                    <Facebook url={url} />
                    <Twitter url={url} />
                    <Pinterest url={url} />
				</h6>
			</div>
        </div>
        );
    }
}

export default Home;