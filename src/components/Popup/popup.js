
import React, { Component } from 'react';


class Popup extends Component {



	render() {


		return (
			<div className="popup-wrap">
				<div className="popup">
					<div className="popup__content">
						<span>Спасибо!</span><br/>
						<span>Форма успешно отправлена</span>
					</div>
					<div className="popup__close">
					</div>
				</div>
			</div>

		);
	}


}

export default Popup;
