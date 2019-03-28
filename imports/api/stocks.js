import shortid from 'shortid';

export const Stocks = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football', _id: shortid.generate()},
	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball', _id: shortid.generate()},
	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball', _id: shortid.generate()},
	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch', _id: shortid.generate()},
	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5', _id: shortid.generate()},
	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7', _id: shortid.generate()}
];
