import React from 'react';
import Menu from './Menu';

class MadeBy extends React.Component {

    render() {
        return (
        <div>
			<div className="row mb-2">
				<div className="col">
					<h1 className="display-4">
					Welcome to the Cute Animal Finder
					</h1>
                    <Menu history={this.props.history}/>
                    <div className="container text-center"></div>
                    <h2 className="mt-5">Created By Team 2</h2>
                    <div className="w-100 border-top border-secondary"></div>
                    <h4 className="mt-3">Derrick Box</h4>
                    <h4 className="mt-3">Dustin Scott</h4>
                    <h4 className="mt-3">Jonathan Hovick</h4>
                    <h4 className="mt-3">Nathaniel Weathersbee</h4>
                    <h4 className="mt-3">Saket Roy</h4>
				</div>
			</div>
        </div>
        );
    }
}

export default MadeBy;