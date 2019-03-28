import React from 'react';
import shortid from 'shortid';

export default class ProductRow extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<span>{this.props.stockName}</span>
				<span>{this.props.stockPrice}</span>
			</div>
		);
	}
}
