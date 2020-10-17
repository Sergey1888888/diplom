import React from "react";
import { Route } from "react-router-dom";
import "./App.less";
import Header from "./components/Header/Header";
import Line from "./components/Line/Line";
import Main from "./components/Main/Main";

function App() {
	return (
		<div className="App">
			<div className="column_wrap">
				<Header />
				<Line />
				<Route exact path="/" render={() => <Main />} />
			</div>
		</div>
	);
}

export default App;
