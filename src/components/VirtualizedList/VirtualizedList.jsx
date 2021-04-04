import React from "react";
import { List, message, Avatar, Spin } from "antd";
import "./VirtualizedList.css";

import WindowScroller from "react-virtualized/dist/commonjs/WindowScroller";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import VList from "react-virtualized/dist/commonjs/List";
import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader";
import { connect } from "react-redux";
import { getTotal, getData, setCurrentPage } from "./../../redux/actions";

class VirtualizedExample extends React.Component {
	state = {
		loading: false,
	};

	loadedRowsMap = {};

	componentDidMount() {
		this.fetchData(this.props.currentPage);
		this.fetchTotal();
	}

	fetchTotal = () => {
		this.props.getTotal();
	};

	fetchData = (pageNumber) => {
		this.props.getData(pageNumber);
	};

	handleInfiniteOnLoad = ({ startIndex, stopIndex }) => {
		this.setState({
			loading: true,
		});
		for (let i = startIndex; i <= stopIndex; i++) {
			// 1 means loading
			this.loadedRowsMap[i] = 1;
		}
		if (this.props.data.length >= this.props.total) {
			this.setState({
				loading: false,
			});
			return;
		}
		this.fetchData(this.props.currentPage + 1);
		this.props.setCurrentPage(this.props.currentPage + 1);
	};

	isRowLoaded = ({ index }) => !!this.loadedRowsMap[index];

	renderItem = ({ index, key, style }) => {
		const { data } = this.props;
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
		const { data } = this.props;
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

const mapStateToProps = (state) => {
	return {
		currentPage: state.realty.currentPage,
		total: state.realty.total,
		data: state.realty.data,
	};
};

export default connect(mapStateToProps, { getTotal, getData, setCurrentPage })(
	VirtualizedExample
);
