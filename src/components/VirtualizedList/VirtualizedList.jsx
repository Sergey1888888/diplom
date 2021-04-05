import React from "react";
import { List, Rate, Spin, Statistic, Tooltip } from "antd";
import "./VirtualizedList.css";

import WindowScroller from "react-virtualized/dist/commonjs/WindowScroller";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import VList from "react-virtualized/dist/commonjs/List";
import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader";
import { connect } from "react-redux";
import { getTotal, getData, setCurrentPage } from "./../../redux/actions";
import { Link } from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";

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
		for (let i = startIndex; i <= stopIndex; i++) {
			// 1 means loading
			this.loadedRowsMap[i] = 1;
		}
		if (this.props.data.length >= this.props.total) {
			return;
		}
		this.fetchData(this.props.currentPage + 1);
		this.props.setCurrentPage(this.props.currentPage + 1);
	};

	isRowLoaded = ({ index }) => !!this.loadedRowsMap[index];

	renderItem = ({ index, key, style }) => {
		const { data } = this.props;
		const item = data[index];
		const rating = Math.ceil(item.rating / 10) / 2;
		let rooms = "";
		if (item.rooms === 1) rooms = "комната";
		else if (item.rooms < 5) rooms = "комнаты";
		else if (item.rooms >= 5) rooms = "комнат";
		return (
			<List.Item key={key} style={style}>
				<List.Item.Meta
					avatar={
						<img
							alt="Realty"
							src={item.photos[0]}
							style={{ width: "400px", height: "195px", paddingLeft: "20px" }}
						/>
					}
					title={
						<div style={{ display: "flex", flexDirection: "column" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
								}}
							>
								<div style={{ fontSize: "24px", marginRight: "10px" }}>
									Рейтинг
								</div>
								<Tooltip
									title={<div>{`По мнению эксперта ${item.rating} / 100`}</div>}
									placement="top"
								>
									<div>
										<Rate
											style={{ fontSize: "22px", lineHeight: "1" }}
											disabled
											allowHalf
											defaultValue={rating}
										/>
									</div>
								</Tooltip>
							</div>
							<div style={{ display: "flex" }}>
								<Statistic value={item.price} />
								<div style={{ fontSize: "24px", paddingLeft: "10px" }}>
									рублей
								</div>
							</div>
						</div>
					}
					description={
						<div
							style={{
								display: "grid",
								gridTemplateAreas: '"type area rooms" "street street floor"',
								gridTemplateRows: "repeat(2, 1fr)",
								gridTemplateColumns: "1fr 1fr 1fr",
								width: "100%",
								height: "117px",
								paddingTop: "20px",
							}}
						>
							<div style={{ gridArea: "type" }}>{item.type}</div>
							<div style={{ gridArea: "area" }}>{item.area} м²</div>
							<div style={{ gridArea: "rooms" }}>
								{item.rooms} {rooms}
							</div>
							<div style={{ gridArea: "street" }}>
								Улица {item.street}, дом {item.houseNumber}
							</div>
							<div style={{ gridArea: "floor" }}>{item.floor} этаж</div>
						</div>
					}
				/>
				<Link
					style={{
						position: "absolute",
						bottom: "15px",
						right: "20px",
						lineHeight: "1",
					}}
					to={`/realty/${item._id}`}
				>
					Подробнее
				</Link>
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
				rowHeight={235}
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
				{this.props.isLoading && <Preloader className="demo-loading" />}
			</List>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentPage: state.realty.currentPage,
		total: state.realty.total,
		data: state.realty.data,
		isLoading: state.realty.isLoading,
	};
};

export default connect(mapStateToProps, {
	getTotal,
	getData,
	setCurrentPage,
})(VirtualizedExample);
