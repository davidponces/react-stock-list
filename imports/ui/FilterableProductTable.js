import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import HeaderBar from './HeaderBar.js';
import { Stocks } from '../api/stocks';

export default class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			isStockOnly: false,
		};
		this.onSearchTextChange = this.onSearchTextChange.bind(this);
		this.onIsStockOnlyChange = this.onIsStockOnlyChange.bind(this);
	}
	onSearchTextChange(e) {
		this.setState({ searchText: e.target.value });
	}
	onIsStockOnlyChange(e) {
		this.setState({ isStockOnly: e.target.checked });
	}
	render() {
		let appName = 'StockList';
		return (
			<div className='site-container'>
				<HeaderBar appName={appName} />
				<SearchBar
					stocks={Stocks}
					searchText={this.state.searchText}
					isStockOnly={this.state.isStockOnly}
					onSearchTextChange={this.onSearchTextChange}
					onIsStockOnlyChange={this.onIsStockOnlyChange}
				/>

				<ProductTable stocks={Stocks} searchText={this.state.searchText} isStockOnly={this.state.isStockOnly} />
			</div>
		);
	}
}
