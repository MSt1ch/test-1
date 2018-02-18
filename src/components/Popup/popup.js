
import React, { Component } from 'react';


class Popup extends Component {

	onClick = (e) => {
    e.preventDefault();
    const {onClick, hide} = this.props;
    console.log(hide);
    onClick(hide);

  }

	render() {


		return (
			<div className="popup-wrap" onClick={this.onClick}>
				<div className="popup">
					<div className="popup__content">
						<span>Спасибо!</span><br/>
						<span>Форма успешно отправлена</span>
					</div>
					<div className="popup__close" onClick={this.onClick}>
					</div>
				</div>
			</div>

		);
	}


}

export default Popup;
