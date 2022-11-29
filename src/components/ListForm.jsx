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

import {sharedCSV} from '../mock/sharedCSV';

export const ListForm = ({data, itemsPerPage, setItemsPerPage}) => {
	const csvReport = {
		filename: 'fake.csv',
		headers: sharedCSV,
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
						width: 300,
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
					Export to CSV
				</Button>
			</CSVLink>

			<Table sx={{minWidth: '80vw', m: '20px 0px'}}>
				<TableHead>
					<TableRow sx={{backgroundColor: 'whitesmoke'}}>
						<TableCell sx={{fontSize: '24px'}} align="center">
							#
						</TableCell>
						<TableCell sx={{fontSize: '22px'}} align="center">
							ID
						</TableCell>
						<TableCell sx={{fontSize: '22px'}} align="center">
							Username
						</TableCell>
						<TableCell sx={{fontSize: '22px'}} align="center">
							Address
						</TableCell>
						<TableCell sx={{fontSize: '22px'}} align="center">
							Phone
						</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{data &&
						data.slice(0, itemsPerPage).map((item, i) => (
							<TableRow key={item.id}>
								<TableCell
									sx={{fontSize: '22px'}}
									align="center"
									component="th"
									scope="row"
								>
									{i + 1}
								</TableCell>
								<TableCell align="center">{item.id}</TableCell>
								<TableCell sx={{fontSize: '18px'}} align="center">
									{item.fullname}
								</TableCell>
								<TableCell align="center">{item.address}</TableCell>
								<TableCell align="center">{item.phone}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</>
	);
};
