import React from 'react';

import {FormControl, MenuItem, Select} from '@mui/material';

import {sharedCountries} from '../mock/sharedCountries';

export const CountryList = ({country, setCountry}) => {
	const handleChangeCountry = (e) => {
		setCountry(e.target.value);
	};

	return (
		<FormControl sx={{m: '2vh 0 10vh', minWidth: 70}} size="small">
			<Select
				id="country-select"
				value={country}
				onChange={handleChangeCountry}
			>
				<MenuItem disabled>Country</MenuItem>
				{sharedCountries.map((country) => (
					<MenuItem value={country} key={country}>
						{country.toUpperCase()}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
