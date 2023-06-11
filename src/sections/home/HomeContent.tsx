import {
	Box,
	Button,
	Container,
	Paper,
	TextareaAutosize,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

import TextArea from '../../components/TextArea';
import useStyles from './HomeContent.styles';

const HomeContent = () => {
	const { classes } = useStyles();

	return (
		<Box
			sx={{
				margin: 8,
				mt: 10,
			}}
		>
			<Box display="flex" justifyContent={'center'}>
				<Typography fontWeight={500} variant="h3" mb={8} mr={1}>
					Code
				</Typography>
				<Typography
					fontWeight={500}
					variant="h3"
					display={'inline'}
					className={classes.title}
				>
					Anonymizer
				</Typography>
			</Box>
			<TextArea key={2} />
		</Box>
	);
};

export default HomeContent;
