import React from 'react';

export default class SearchBar extends React.Component {
	render() {
		return (
			<form className='form'>
				<input
					type='text'
					name=''
					placeholder='Search...'
					value={this.props.searchText}
					onChange={this.props.onSearchTextChange}
					className='form__input-text'
				/>
				<label htmlFor='checkbox-isStock' className='form__checkbox-isStock-label'>
					<input
						type='checkbox'
						id='checkbox-isStock'
						name='checkbox-isStock'
						checked={this.props.isStockOnly}
						onChange={this.props.onIsStockOnlyChange}
						className='form__checkbox'
					/>{' '}
					Only show products in stock
				</label>
			</form>
		);
	}
}
