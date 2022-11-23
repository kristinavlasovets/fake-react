import {React, useEffect, useState} from 'react';
import {
	Box,
	ButtonGroup,
	Button,
	Slider,
	Typography,
	Input,
	TextField,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';

const Chance = require('chance');
const chance = new Chance();

const columns = [
	{id: 'index', label: 'Index', minWidth: 20},
	{id: 'id', label: 'Identifier', minWidth: 70},
	{id: 'name', label: 'Name', minWidth: 100},
	{
		id: 'address',
		label: 'Address',
		minWidth: 100,
		align: 'center',
		format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'phone',
		label: 'Phone',
		minWidth: 100,
		align: 'center',
	},
];

export const App = () => {
	const [value, setValue] = useState(0);
	const [data, setData] = useState([]);

	useEffect(() => {}, []);
	const generateUkPerson = () => {
		return {
			id: chance.ssn({dashes: false}),
			name: chance.name({nationality: 'en'}),
			address: `UK, ${chance.postcode()} postcode, ${chance.state({
				country: 'uk',
				full: true,
			})}`,
			phone: chance.phone({country: 'uk', mobile: true}),
		};
	};

	const generateUsPerson = () => {
		return {
			id: chance.ssn({dashes: false}),
			name: chance.name({nationality: 'en'}),
			address: `USA, ${chance.state({
				country: 'us',
				full: true,
			})} state, ${chance.street({country: 'us', short_suffix: true})} `,
			phone: chance.phone({country: 'us', mobile: true}),
		};
	};
	const generateItPerson = () => {
		return {
			id: chance.ssn({dashes: false}),
			name: chance.name({nationality: 'it'}),
			address: `Italy, ${chance.province({
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

	const handleAddUk = () => {
		setData(peopleUk);
	};
	const handleAddUs = () => {
		setData(peopleUs);
	};
	const handleAddIt = () => {
		setData(peopleIt);
	};

	const handleSliderChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleInputChange = (event) => {
		setValue(event.target.value > 1000 ? 1000 : Number(event.target.value));
	};

	const handleBlur = () => {
		if (value < 0) {
			setValue(0);
		} else if (value > 1000) {
			setValue(1000);
		}
	};

	return (
		<Box
			sx={{
				m: '10vh auto',
				width: '80vw',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<ButtonGroup
				sx={{m: '5vh auto', width: '100%'}}
				color="secondary"
				variant="text"
				aria-label="text button group"
			>
				<Button onClick={handleAddUk}>UK</Button>
				<Button onClick={handleAddUs}>US</Button>
				<Button onClick={handleAddIt}>IT</Button>
			</ButtonGroup>
			<Typography gutterBottom>Number of errors</Typography>
			<Box sx={{width: 600, display: 'flex', justifyContent: 'space-between'}}>
				<Box
					sx={{width: 280, display: 'flex', justifyContent: 'space-between'}}
				>
					<Slider
						value={typeof value === 'number' ? value : 0}
						onChange={handleSliderChange}
						aria-labelledby="input-slider"
						size="small"
						color="secondary"
						defaultValue={0}
						aria-label="Small"
						valueLabelDisplay="auto"
						step={0.5}
						marks
						min={0}
						max={10}
						sx={{width: 200}}
					/>
					<Input
						value={value}
						sx={{width: 60}}
						onChange={handleInputChange}
						onBlur={handleBlur}
						color="secondary"
						max={1000}
						inputProps={{
							step: 0.5,
							min: 0,
							max: 1000,
							type: 'number',
							'aria-labelledby': 'input-slider',
						}}
					/>
				</Box>
				<Box
					sx={{width: 230, display: 'flex', justifyContent: 'space-between'}}
				>
					<TextField
						size="small"
						color="secondary"
						label="Seed"
						variant="outlined"
						sx={{width: 100}}
					/>
					<Button color="secondary" variant="contained" size="small">
						Random seed
					</Button>
				</Box>
			</Box>

			<Paper sx={{width: '100%', m: '5vh auto'}}>
				<TableContainer sx={{maxHeight: 440}}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell align="center" colSpan={5}>
									User data
								</TableCell>
							</TableRow>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{top: 57, minWidth: column.minWidth}}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{column.format && typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
};
