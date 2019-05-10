import React from 'react';
import Menu from './Menu';

class Home extends React.Component {

    render() {
        document.getElementById("loading").style.opacity = 0;
        return (
        <div>
			<div className="row mb-2">
				<div className="col">
					<h1 className="display-4">
					Welcome to the Cute Animal Finder
					</h1>
					<hr></hr>
                    <Menu history={this.props.history}/>
					<hr></hr>
                    <img className="img-fluid" src={"https://poolhouse.s3.amazonaws.com/blog-assets/dog-cat-and-fox.jpg"}/>
				</div>
			</div>
            <button className="btn btn-secondary w-100 mx-auto" onClick={() => {this.props.history.push("/MadeBy")}}>Made By</button>
        </div>
        );
    }
}

export default Home;