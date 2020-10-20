import React from "react";
import { Route } from "react-router-dom";
import "./App.less";
import Header from "./components/Header/Header";
import Line from "./components/Line/Line";
import Main from "./components/Main/Main";
import { setIsClicked } from "./redux/actions";
import { connect } from "react-redux";
import Form from "./components/Modals/Login/Form";
import QueueAnim from "rc-queue-anim";

class App extends React.Component {
	state = {
		showLogin: false,
	};

	onLoginClicked = () => {
		this.setState({
			showLogin: true,
		});
	};

	onFormBackgroundClick = (e) => {
		if (!e.target.closest(".loginForm")) {
			this.setState({
				showLogin: false,
			});
		}
	};

	render() {
		return (
			<div className="App">
				<div className="column_wrap">
					<QueueAnim type="alpha">
						{this.state.showLogin && (
							<Form
								key="0"
								onFormBackgroundClick={this.onFormBackgroundClick}
							/>
						)}
					</QueueAnim>

					<Header onLoginClicked={this.onLoginClicked} />
					<Line />
					{/* Clicked ? {this.props.isClicked ? "YEP" : "NOPE"} */}
					{/* <button onClick={() => this.props.setIsClicked()}>CLICK</button> */}
					<Route exact path="/" render={() => <Main />} />
				</div>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		isClicked: state.app.isClicked,
// 	};
// };

// export default connect(mapStateToProps, { setIsClicked })(App);
export default App;
