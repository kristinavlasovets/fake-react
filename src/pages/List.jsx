import React, {useState, useEffect} from 'react';

import {Box} from '@mui/material';
import {Menu} from '../components/Menu';
import {CountryList} from '../components/CountryList';
import {ListForm} from '../components/ListForm';

import {fakeServiceFetchData} from '../services/fakeService';

export const List = () => {
	const [country, setCountry] = useState('en');
	const [errorsAmount, setErrorsAmount] = useState(0);
	const [data, setData] = useState([]);
	const [seed, setSeed] = useState(0);
	const [page, setPage] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(20);
	const [size, setSize] = useState(200);

	const fetchUsers = async () => {
		const data = await fakeServiceFetchData(
			seed,
			errorsAmount,
			country,
			page,
			size
		);

		setData(data?.users);
	};

	useEffect(() => {
		fetchUsers();
	}, [country, seed, errorsAmount, page, size]);

	return (
		<Box
			sx={{
				m: '5vh 10vw',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box>
				<CountryList country={country} setCountry={setCountry} />
			</Box>
			<Menu
				errorsAmount={errorsAmount}
				setErrorsAmount={setErrorsAmount}
				seed={seed}
				setSeed={setSeed}
			/>
			<ListForm
				data={data}
				itemsPerPage={itemsPerPage}
				setItemsPerPage={setItemsPerPage}
			/>
		</Box>
	);
};
