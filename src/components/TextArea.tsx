import { Box, TextareaAutosize, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';

const blue = {
	100: '#DAECFF',
	200: '#b6daff',
	400: '#3399FF',
	500: '#007FFF',
	600: '#0072E5',
	900: '#003A75',
};

const grey = {
	50: '#f6f8fa',
	100: '#eaeef2',
	200: '#d0d7de',
	300: '#afb8c1',
	400: '#8c959f',
	500: '#6e7781',
	600: '#57606a',
	700: '#424a53',
	800: '#32383f',
	900: '#24292f',
};

const StyledTextarea = styled(TextareaAutosize)(
	({ theme }) => `
  width: 50%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  margin: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
		theme.palette.mode === 'dark' ? grey[900] : grey[50]
	};
  resize: none;

  &:hover {
    border-color: ${theme.palette.primary.main};
  }

  &:focus {
    border-color:  ${theme.palette.primary.main};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const VariableTA = styled(TextareaAutosize)(
	({ theme }) => `
  width: 500px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  margin: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
		theme.palette.mode === 'dark' ? grey[900] : grey[50]
	};
  resize: none;

  &:hover {
    border-color: ${theme.palette.primary.main};
  }

  &:focus {
    border-color:  ${theme.palette.primary.main};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

export default function TextArea(props) {
	const [text, setText] = useState('');
	const [anonText, setAnonText] = useState('');
	const [vars, setVars] = useState('');

	useEffect(() => {
		function updateVariable(variable: string) {
			let updatedName = '';

			if (variable.includes('_')) {
				updatedName = variable
					.split('_')
					.map((part) => part.charAt(0))
					.join('');
			} else {
				const parts = variable.split(/(?=[A-Z_])/);
				updatedName = parts.map((part) => part.charAt(0)).join('');
			}

			return updatedName;
		}

		const variableList = vars.split('\n');

		// Replace variables in the code snippet with the updated names
		const updatedSnippet = variableList.reduce((snippet, variable) => {
			const regex = new RegExp(`\\b${variable}\\b`, 'g');
			const updatedName = updateVariable(variable);
			return snippet.replace(regex, updatedName);
		}, text);

		setAnonText(updatedSnippet);
	}, [text, vars]);

	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
				}}
			>
				<Typography sx={{ width: '50%', marginLeft: '12px' }}>
					Your Code:
				</Typography>
				<Typography>Anonymized Code:</Typography>
			</Box>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<StyledTextarea
					aria-label="your-code"
					value={text}
					onChange={(event) => {
						setText(event.target.value);
					}}
					minRows={3}
				/>
				<StyledTextarea aria-label="your-code" value={anonText} minRows={3} />
			</Box>
			<Typography sx={{ width: '50%', marginLeft: '12px', marginTop: '24px' }}>
				Variables:
			</Typography>
			<VariableTA
				aria-label="your-code"
				value={vars}
				onChange={(event) => {
					setVars(event.target.value);
				}}
				minRows={3}
			/>
		</Box>
	);
}
