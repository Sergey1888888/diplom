import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.less";
import Main from "./components/Main/Main";
import SearchPage from "./components/SearchPage/SearchPage";
import HeaderContainer from "./components/Header/HeaderContainer";
import Profile from "./components/Profile/Profile";
import { initializeApp } from "./redux/actions";
import { LoadingOutlined } from "@ant-design/icons";
import { Result, Button } from "antd";
import PrivateRoute from "./components/hoc/PrivateRoute/PrivateRoute";
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
				<h1>Загрузка</h1>
				<LoadingOutlined
					style={{
						fontSize: "120px",
						marginLeft: "60px",
					}}
				/>
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
