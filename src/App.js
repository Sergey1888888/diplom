import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Result, Button } from "antd";
import { initializeApp } from "./redux/actions";
import "./App.less";
import Main from "./components/Main/Main";
import SearchPage from "./components/SearchPage/SearchPage";
import HeaderContainer from "./components/Header/HeaderContainer";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/hoc/PrivateRoute/PrivateRoute";
import RealtyPage from "./components/RealtyPage/RealtyPage";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		return this.props.initialized ? (
			<div className="App">
				<div className="column_wrap">
					<HeaderContainer />
					<Switch>
						<Route exact path="/" render={() => <Main />} />
						<Route exact path="/search" render={() => <SearchPage />} />
						<Route
							path="/realty/:id"
							render={({ match }) => <RealtyPage match={match} />}
						/>
						<PrivateRoute exact path="/profile">
							<Profile />
						</PrivateRoute>
						<Route
							render={() => (
								<Result
									status="404"
									title="404"
									subTitle="Извините, такой страницы не существует."
									extra={
										<Link to="/">
											<Button type="primary">Вернуться на главную</Button>
										</Link>
									}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		) : (
			<div
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Preloader size="large" />
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized,
	};
};

export default connect(mapStateToProps, { initializeApp })(App);
