import React, { Component } from "react";
import MyInput from "./components/MyInput";
import MySelect from "./components/MySelect";
import { CurrencyType } from "./enums/CurrencyType";
import axios from "axios"
interface IAppProps {
}

interface IAppState {
	curency: CurrencyType,
	amount: number | undefined,
	rate: number | undefined;
}

class App extends Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			curency: CurrencyType.Euro,
			amount: undefined,
			rate: undefined
		}

	}

	private changeCurency = (value: CurrencyType): void => {
		this.setState({
			...this.state,
			curency: value,
		});
		this.getRate(value);
	};
	private changeAmount = (value?: number): void => {
		this.setState({
			...this.state,
			amount: value,
		});
	}
	private calculateForginCurency = (): number => {
		if (this.state.amount && this.state.rate) {
			let score: any = this.state.amount * this.state.rate;
			return score.toFixed(4);
		}
		return 0;
	}
	private getRate = (curency: CurrencyType): void => {
		const serverPath: string = "http://127.0.0.1:8000/rates/rate/";
		axios.get(serverPath + curency).then(res => {
			console.log(res.data.rate);
			this.setState({
				...this.state,
				rate: res.data.rate
			})
		});
	}
	componentDidMount() {
		if (!this.state.rate) {
			this.getRate(CurrencyType.Euro);
		}
	}
	render() {
		return (
			<React.Fragment>
				<header>
					<div className="headerText col-md-12">Zadanie rekrutacyjne</div>
				</header>
				<div className="app">
					<MyInput value={this.state.amount} placeholder={"Podaj kwote w PLN"} changeAmount={this.changeAmount} />
					<MySelect changeCurency={this.changeCurency} />
					<span className="returnValue col-md-4">Posiadasz: {this.calculateForginCurency()} {this.state.curency} </span>
				</div>
			</React.Fragment>
		);
	}
}
export default App;
