import React, { Component } from "react";

interface IMyInputProps {
	value: number | undefined;
	placeholder?: string;
	changeAmount: (value?: number) => void;
}

class MyInput extends React.PureComponent<IMyInputProps> {

	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const financialGoal: number = parseFloat((event.target.value).replace(/,/g, ''));
		if (financialGoal || financialGoal === 0) {
			this.props.changeAmount(financialGoal);
		}
		else {
			this.props.changeAmount();
		}
	}

	render() {
		return (
			<div className="input col-md-6">
				<input type="number"
					step="0.0001"
					className="field__Input"
					placeholder={this.props.placeholder}
					value={this.props.value !== undefined ? this.props.value : ''}
					onChange={e => this.handleChange(e)}>
				</input>
			</div>
		);
	}

}

export default MyInput;