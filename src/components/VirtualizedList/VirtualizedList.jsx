import React from "react";
import { List, message, Avatar, Spin } from "antd";
import "./VirtualizedList.css";

import reqwest from "reqwest";

import WindowScroller from "react-virtualized/dist/commonjs/WindowScroller";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import VList from "react-virtualized/dist/commonjs/List";
import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader";

const fakeDataUrl =
	"https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

class VirtualizedExample extends React.Component {
	state = {
		data: [],
		loading: false,
		currentPage: 1,
		total: 0,
	};

	loadedRowsMap = {};

	componentDidMount() {
		this.fetchData((res) => {
			this.setState({
				data: res,
			});
		}, this.state.currentPage);
		this.fetchTotal((res) => {
			this.setState({
				total: res,
			});
		});
	}

	fetchTotal = (callback) => {
		reqwest({
			url: `https://nestjs-test-api.herokuapp.com/realty/total`,
			type: "json",
			method: "get",
			contentType: "application/json",
			success: (res) => {
				callback(res);
			},
		});
	};

	fetchData = (callback, pageNumber) => {
		console.log("FETCH: ", pageNumber);
		reqwest({
			url: `https://nestjs-test-api.herokuapp.com/realty?limit=5&page=${pageNumber}`,
			type: "json",
			method: "get",
			contentType: "application/json",
			success: (res) => {
				callback(res);
			},
		});
	};

	handleInfiniteOnLoad = ({ startIndex, stopIndex }) => {
		let { data } = this.state;
		this.setState({
			loading: true,
		});
		for (let i = startIndex; i <= stopIndex; i++) {
			// 1 means loading
			this.loadedRowsMap[i] = 1;
		}
		if (data.length > this.state.total) {
			message.warning("Virtualized List loaded all");
			this.setState({
				loading: false,
			});
			return;
		}
		this.fetchData((res) => {
			data = data.concat(res);
			this.setState({
				data,
				loading: false,
				currentPage: this.state.currentPage + 1,
			});
		}, this.state.currentPage + 1);
	};

	isRowLoaded = ({ index }) => !!this.loadedRowsMap[index];

	renderItem = ({ index, key, style }) => {
		const { data } = this.state;
		const item = data[index];
		return (
			<List.Item key={key} style={style}>
				<List.Item.Meta
					avatar={
						<img
							alt="Realty"
							src="https://st95.domofond.ru/image/1/HgTuBba2FuxaRqInUyAnXPmOsO1epFD9kK2w"
							style={{ width: "400px", height: "195px", paddingLeft: "20px" }}
						/>
					}
					title={<div>рейтинг</div>}
					description={<div>инфа о недвижимости</div>}
				/>
				<div>еще че нить</div>
			</List.Item>
		);
	};

	render() {
		const { data } = this.state;
		const vlist = ({
			height,
			isScrolling,
			onChildScroll,
			scrollTop,
			onRowsRendered,
			width,
		}) => (
			<VList
				autoHeight
				height={height}
				isScrolling={isScrolling}
				onScroll={onChildScroll}
				overscanRowCount={2}
				rowCount={data.length}
				rowHeight={250}
				rowRenderer={this.renderItem}
				onRowsRendered={onRowsRendered}
				scrollTop={scrollTop}
				width={width}
			/>
		);
		const autoSize = ({
			height,
			isScrolling,
			onChildScroll,
			scrollTop,
			onRowsRendered,
		}) => (
			<AutoSizer disableHeight>
				{({ width }) =>
					vlist({
						height,
						isScrolling,
						onChildScroll,
						scrollTop,
						onRowsRendered,
						width,
					})
				}
			</AutoSizer>
		);
		const infiniteLoader = ({
			height,
			isScrolling,
			onChildScroll,
			scrollTop,
		}) => (
			<InfiniteLoader
				isRowLoaded={this.isRowLoaded}
				loadMoreRows={this.handleInfiniteOnLoad}
				rowCount={data.length}
			>
				{({ onRowsRendered }) =>
					autoSize({
						height,
						isScrolling,
						onChildScroll,
						scrollTop,
						onRowsRendered,
					})
				}
			</InfiniteLoader>
		);
		return (
			<List>
				{data.length > 0 && (
					<WindowScroller scrollElement={this.props.scrollElementRef.current}>
						{infiniteLoader}
					</WindowScroller>
				)}
				{this.state.loading && <Spin className="demo-loading" />}
			</List>
		);
	}
}

export default VirtualizedExample;
