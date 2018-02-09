import React, { Component } from 'react';


class Button extends Component {

  handleChange = (popup) => {
    return popup;
  }

  render() {


    let classNames = "button ";
  	return (
			<div>

				<input
					className={classNames}
					type= "submit"
					onClick={this.handleChange}
				/>
			</div>
		);
  }


}

export default Button;
