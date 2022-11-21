import React from 'react';
const Chance = require('chance');

export const App = () => {
	const chance = new Chance();
	const generateUkPerson = () => {
		return {
			id: chance.ssn({dashes: false}),
			name: chance.name({nationality: 'en'}),
			address: chance.city(),
			phone: chance.phone({country: 'uk', mobile: true}),
		};
	};
	const generateUsPerson = () => {
		return {
			id: chance.ssn({dashes: false}),
			name: chance.name({nationality: 'en'}),
			address: chance.city(),
			phone: chance.phone({country: 'us', mobile: true}),
		};
	};
	const generateItPerson = () => {
		return {
			id: chance.ssn({dashes: false}),
			name: chance.name({nationality: 'it'}),
			address: `${chance.province({
				country: 'it',
				full: true,
			})} city, ${chance.street({
				country: 'it',
			})} street`,
			phone: chance.phone({country: 'fr', mobile: true}),
		};
	};

	const peopleUk = Array.from({length: 100}, generateUkPerson);
	const peopleUs = Array.from({length: 100}, generateUsPerson);
	const peopleIt = Array.from({length: 100}, generateItPerson);

	console.log(peopleUk);
	console.log(peopleUs);
	console.log(peopleIt);
	return <div>App</div>;
};
