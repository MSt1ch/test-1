import React, { Component } from 'react';


class TextMirror extends Component {

	render() {
		const {value} = this.props;
		return (
			<div
				className="text-mirror">
				{value}

			</div>

		);
	}


}

export default TextMirror;
