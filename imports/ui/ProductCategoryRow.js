import React from 'react';

export default class ProductCategoryRow extends React.Component {
	render() {
		return <h2 className='product-title'>{this.props.categoryTitle}</h2>;
	}
}
