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
                    <Menu history={this.props.history}/>
				</div>
			</div>
        </div>
        );
    }
}

export default Home;