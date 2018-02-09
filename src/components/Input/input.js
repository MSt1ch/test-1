import React, { Component } from 'react';


class Input extends Component {

	onChange = (e) =>{
		const {onChange, input} = this.props;
		e.preventDefault();

		input.value = e.target.value;
		onChange(input)
	};

  render() {

  	const {input} = this.props;
  	return (
			<div>

				<input
					value = {input.value}
					name = {input.name}
					className="input "
					id = {input.id}
					onChange={this.onChange}
				/>
			</div>
		);
  }


}

export default Input;
