import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomCat") {
            this.state = {
                header: "Random Cat"
            }
        }
        else if(window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomDog") {
            this.state = {
                header: "Random Dog"
            }
        }
        else if (window.location.pathname.split('/')[window.location.pathname.split('/').length-1] === "randomFox") {
            this.state = {
                header: "Random Fox"
            }
        }
        else{
            this.state = {
                header: "Welcome"
            }
        }
    }

    fetchData(api) {
        fetch(api)
        .then(res => res.json())
        .then(
            (result) => {
                if(api === "https://aws.random.cat/meow") {
                    this.props.history.push("/randomCat#" + (result.file.split('/')[result.file.split('/').length-1]));
                    this.setState({
                        header: "Random Cat"
                    })
                }
                else if(api === "https://random.dog/woof.json") {
                    this.props.history.push("/randomDog#" + (result.url.split('/')[result.url.split('/').length-1]));
                    this.setState({
                        header: "Random Dog"
                    })
                }
                else if(api === "https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/") {
                    this.props.history.push("/randomFox#" + (result.image.split('/')[result.image.split('/').length-1]));
                    this.setState({
                        header: "Random Fox"
                    })
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
                            {this.state.header}
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <h3 className="col">
                        <button  onClick={() => {this.setState({header: "Welcome"})}}>Home</button>
                    </h3>
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
            </div>
        )
    }
}

export default Menu;