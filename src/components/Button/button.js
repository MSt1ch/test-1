import React, { Component } from 'react';


class Button extends Component {

  onClick = (e) => {
    e.preventDefault();
    const {onClick, show} = this.props;
    console.log(show);
    onClick(show)
  }

  render() {


    let classNames = "button ";
  	return (
			<div>

				<input
					className={classNames}
					type= "submit"
					onClick={this.onClick}
				/>
			</div>
		);
  }


}

export default Button;
