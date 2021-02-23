import React, { Component } from "react";
import { CurrencyType } from "./../enums/CurrencyType";

interface IMySelectProps {
	changeCurency: (value: CurrencyType) => void;
}

class MySelect extends React.PureComponent<IMySelectProps> {

	constructor(props: IMySelectProps) {
		super(props);
	}

	render() {
		return (
			<div className="select col-md-2">
				<select className="dropdown" onChange={e => this.props.changeCurency(e.target.value as CurrencyType)}>
					<option value={CurrencyType.Euro}>EUR</option>
					<option value={CurrencyType.AmericanDolar}>USD</option>
					<option value={CurrencyType.BritishPound}>GBP</option>
					<option value={CurrencyType.SwissFrank}>CHF</option>
				</select>
			</div>
		);
	}

}

export default MySelect;