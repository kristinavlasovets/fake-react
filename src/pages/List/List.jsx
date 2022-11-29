import React, {useState, useEffect} from 'react';

import {Box} from '@mui/material';
import {Header} from '../../components/Header/Header';
import {ControlTool} from '../../components/ControlTool/ControlTool';
import {CountrySelect} from '../../components/CountrySelect/CountrySelect';
import {MyTable} from '../../components/Table/MyTable';

import {makeStyles} from './styles';
import {fakeServiceFetchData} from '../../services/fakeService';

export const Main = () => {
	const [country, setCountry] = useState('en');
	const [errorsAmount, setErrorsAmount] = useState(0);
	const [data, setData] = useState([]);
	const [seed, setSeed] = useState(0);
	const [page, setPage] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(20);
	const [size, setSize] = useState(200);
	const style = makeStyles();

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
		// eslint-disable-next-line
	}, [country, seed, errorsAmount, page, size]);

	return (
		<Box sx={style.mainWrapper}>
			<Header title="Fake (random) user data generation" />
			<Box sx={style.mainSelectWrapper}>
				<CountrySelect country={country} setCountry={setCountry} />
			</Box>
			<ControlTool
				errorsAmount={errorsAmount}
				setErrorsAmount={setErrorsAmount}
				seed={seed}
				setSeed={setSeed}
			/>
			<MyTable
				data={data}
				itemsPerPage={itemsPerPage}
				setItemsPerPage={setItemsPerPage}
			/>
		</Box>
	);
};
