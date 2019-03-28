import React from 'react';

export default class ProductRow extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='product-row'>
				<span className='product-row__name'>{this.props.stockName}</span>
				<span className='product-row__price'>{this.props.stockPrice}</span>
			</div>
		);
	}
}
