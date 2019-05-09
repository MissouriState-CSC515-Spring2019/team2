import React from 'react';
import Menu from './Menu';

class Home extends React.Component {

    render() {
        return (
        <div>
			<div className="row mb-2">
				<div className="col">
					<h1 className="display-4">
					Welcome
					</h1>
					<hr></hr>
                    <Menu history={this.props.history}/>
					<hr></hr>
					Hi! Please select an animal to begin!
				</div>
			</div>
        </div>
        );
    }
}

export default Home;