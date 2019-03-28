import React from 'react';

export default class SearchBar extends React.Component {
	render() {
		return (
			<form>
				<input
					type='text'
					name=''
					placeholder='Search...'
					value={this.props.searchText}
					onChange={this.props.onSearchTextChange}
				/>
				<br />
				<input type='checkbox' checked={this.props.isStockOnly} onChange={this.props.onIsStockOnlyChange} />
				<span>Only show products in stock</span>
			</form>
		);
	}
}
