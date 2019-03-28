import React from 'react';

const HeaderBar = props => {
	return (
		<div className='header'>
			<div className='header__box'>
				<h1 className='header__title'> {props.appName} </h1>
			</div>
		</div>
	);
};

export default HeaderBar;
