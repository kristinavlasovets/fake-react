import React, {useCallback, useEffect} from 'react';
import {CSVLink} from 'react-csv';

import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';

import {mockCsvHeaders} from '../mock/mockCsvHeaders';

export const ListForm = ({data, itemsPerPage, setItemsPerPage}) => {
	const csvReport = {
		filename: 'Data.csv',
		headers: mockCsvHeaders,
		data: data || [],
	};

	const scrollHandler = useCallback(
		(e) => {
			if (
				e.target.documentElement.offsetHeight -
					(e.target.documentElement.scrollTop + window.innerHeight) <
				100
			) {
				setItemsPerPage((prev) => prev + 10);
			}
		},
		[setItemsPerPage]
	);

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);

		return () => document.removeEventListener('scroll', scrollHandler);
	}, [scrollHandler]);

	return (
		<>
			<CSVLink {...csvReport}>
				<Button
					sx={{
						m: '20px auto',
						width: 100,
						height: 50,
						fontSize: '22px',
						backgroundColor: '#0E101C',
						'&:hover': {
							cursor: 'pointer',
							backgroundColor: '#EC5991',
							fontWeight: 700,
						},
					}}
					variant="contained"
				>
					CSV
				</Button>
			</CSVLink>

			<Table sx={{minWidth: '650px', m: '20px 0px'}}>
				<TableHead>
					<TableRow>
						<TableCell align="center">Index</TableCell>
						<TableCell align="center">ID</TableCell>
						<TableCell align="center">Username</TableCell>
						<TableCell align="center">Address</TableCell>
						<TableCell align="center">Phone</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{data &&
						data.slice(0, itemsPerPage).map((item, i) => (
							<TableRow key={item.id}>
								<TableCell component="th" scope="row">
									{i + 1}
								</TableCell>
								<TableCell align="right">{item.id}</TableCell>
								<TableCell align="right">{item.fullname}</TableCell>
								<TableCell align="right">{item.address}</TableCell>
								<TableCell align="right">{item.phone}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</>
	);
};
