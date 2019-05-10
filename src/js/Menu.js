import React from 'react'; 

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            error: null
        }
      }

    fetchData(api) {        
        document.getElementById("loading").style.opacity = 1;
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
            },
            (error) => {
                this.setState({
                    error
                })
            }
        )
    }

    render() {
        const {isLoaded, error} = this.state
        if(error) {
            return(
                <div>Error: {error.message}</div>
            );
        } 
        else {
            return (
                <div>
                    <div className="row, float-right">
                        <h3 className="col-12">
                            <button className="btn btn-default btn-sm" onClick={() => {this.props.history.push('/settings')}}>
                            <img src="../src/images/cog.JPG" width="30"></img></button>
                        </h3>
                    </div>
                    <div className="row">
                        <h3 className="col-3">
                            <button className="btn btn-secondary w-100 " onClick={() => {this.props.history.push('/')}}>Home</button>
                        </h3>
                        <h3 className="col-3">
                            <button className="btn btn-secondary w-100 " onClick={() => {this.fetchData("https://aws.random.cat/meow")}}>Cat</button>
                        </h3>
                        <h3 className="col-3">
                            <button className="btn btn-secondary w-100 " onClick={() => {this.fetchData("https://random.dog/woof.json")}}>Dog</button>
                        </h3>
                        <h3 className="col-3">
                            <button className="btn btn-secondary w-100 " onClick={() => {this.fetchData("https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/")}}>Fox</button>
                        </h3>
                    </div>
                </div>
                
                
            );
        }
        
    }
}

export default Menu;