import React from 'react';

import {Box, Slider, TextField, Button} from '@mui/material';

export const Menu = ({errorsAmount, setErrorsAmount, seed, setSeed}) => {
	const handleOnClickSeed = async () => {
		const rng = Math.floor(Math.random() * 1000000);
		setSeed(rng);
	};

	const handleErrorsAmount = (e) => {
		setErrorsAmount(e.target.value > 1000 ? 1000 : Number(e.target.value));
	};

	return (
		<Box
			sx={{
				width: '90vw',
				maxWidth: '90vw',
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Box
				sx={{
					w: '40vw',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Slider
					sx={{
						mr: '50px',
						mb: '25px',
						width: 300,
						maxWidth: 300,
						color: '#0E101C',
					}}
					aria-label="how many?"
					size="small"
					defaultValue={0}
					valueLabelDisplay="auto"
					step={0.5}
					marks
					min={0}
					max={10}
					value={errorsAmount}
					onChange={handleErrorsAmount}
				/>
				<TextField
					sx={{
						mr: '50px',
						width: 300,
						maxWidth: 300,
					}}
					label="how many errors?"
					variant="filled"
					type="number"
					InputProps={{
						inputProps: {min: 0, max: 1000, maxLength: 4},
					}}
					value={errorsAmount}
					onChange={handleErrorsAmount}
				/>
			</Box>
			<Box
				sx={{
					w: '40vw',
					display: 'flex',
					flexDirection: 'column',
					mr: '10vw',
				}}
			>
				<Button
					sx={{
						width: 200,
						fontSize: '16px',
						mb: '10px',
						backgroundColor: '#EC5991',
						border: '3px solid #EC5991',
						'&:hover': {
							cursor: 'pointer',
							backgroundColor: '#0E101C',
							border: '3px solid #6B1848',
						},
					}}
					variant="contained"
					onClick={handleOnClickSeed}
				>
					Random seed
				</Button>
				<TextField
					sx={{
						width: 200,
						maxWidth: 200,
					}}
					label="seed size?"
					variant="filled"
					value={seed}
					onChange={(e) => setSeed(e.target.value)}
				/>
			</Box>
		</Box>
	);
};
