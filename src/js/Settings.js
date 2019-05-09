import React from 'react';
import Menu from './Menu';
import '../css/checkbox.css';

class Settings extends React.Component {
    constructor(props) {
        super(props);
		this.state = {autoReloadCheckbox: false}; //this holds the current link for social-media sharing (NOT the localhost url)
	}

    render() {
        return (
			<div>
				<div className="row mb-2">
					<div className="col">
						<h1 className="display-4">
						Settings
						</h1>
						<hr></hr>
						<Menu history={this.props.history}/>
						<hr></hr>
					</div>
				</div>
				<div className="row">
					<h3>
						<label className='container' htmlFor='autoReload'> Load New Image Every 5 Seconds
							<input type='checkbox' id='autoReload' onClick={() => {
								this.setState({ autoReloadCheckbox: document.getElementById("autoReload").checked });
							}} /> 
							<span className='checkmark'> </span>
						</label>
					</h3>
				</div>
				<div className="row">
					<h6 className="col">
						
					</h6>
				</div>
			</div>
			)	
		 
    }
}

export default Settings;