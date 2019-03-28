import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import shortid from 'shortid';

export default class ProductTable extends React.Component {
	constructor(props) {
		super(props);
	}

	renderStockRows(tableArray, category) {
		this.props.stocks.forEach(stock => {
			if (stock.category == category) {
				tableArray.push(
					<ProductRow
						key={stock._id}
						isStocked={stock.stocked}
						stockName={stock.name}
						stockPrice={stock.price}
						category={stock.category}
					/>
				);
			}
		});
	}

	filterText(tableArray) {
		if (!!this.props.searchText) {
			let categoryArray = [];
			tableArray.slice(0).forEach(stock => {
				if (stock.type === ProductRow) {
					if (stock.props.stockName.includes(this.props.searchText)) {
						!categoryArray.includes(stock.category) && categoryArray.push(stock.props.category);
					} else if (!stock.props.stockName.includes(this.props.searchText)) {
						tableArray.splice(tableArray.indexOf(stock), 1);
					}
				}
			});
			tableArray.slice(0).forEach(stock => {
				if (stock.type === ProductCategoryRow && !categoryArray.includes(stock.props.categoryTitle)) {
					tableArray.splice(tableArray.indexOf(stock), 1);
				}
			});
		}
	}

	filterIsStockOnly(tableArray) {
		if (this.props.isStockOnly) {
			tableArray.slice(0).forEach(stock => {
				if (stock.type === ProductRow && !stock.props.isStocked) {
					tableArray.splice(tableArray.indexOf(stock), 1);
				}
			});
		}
	}

	filterStocks(tableArray) {
		this.filterText(tableArray);
		this.filterIsStockOnly(tableArray);
		return tableArray;
	}

	renderStocks() {
		const tableArray = [];
		let previousCategory = '';
		this.props.stocks.forEach(stock => {
			if (previousCategory !== stock.category) {
				previousCategory = stock.category;
				tableArray.push(<ProductCategoryRow key={stock.category} categoryTitle={stock.category} />);
				this.renderStockRows(tableArray, stock.category);
			}
		});
		return this.filterStocks(tableArray);
	}

	render() {
		return (
			<div>
				<div key={shortid.generate()}>
					<span>Name</span>
					<span>Price</span>
				</div>
				{this.renderStocks()}
			</div>
		);
	}
}
