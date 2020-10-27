import React from "react";
import { Route } from "react-router-dom";
import "./App.less";
import Line from "./components/Line/Line";
import Main from "./components/Main/Main";
import { setProfile } from "./redux/actions";
import { connect } from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="column_wrap">
					<HeaderContainer />
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
