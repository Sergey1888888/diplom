import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.less";
import Main from "./components/Main/Main";
import SearchPage from "./components/SearchPage/SearchPage";
import HeaderContainer from "./components/Header/HeaderContainer";
import Profile from "./components/Profile/Profile";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="column_wrap">
					<HeaderContainer />
					<Switch>
						<Route exact path="/" render={() => <Main />} />
						<Route exact path="/search" render={() => <SearchPage />} />
						<Route exact path="/profile" render={() => <Profile />} />
						<Route render={() => <div>404</div>} />
					</Switch>
				</div>
			</div>
		);
	}
}
export default App;
