import { ThemeOptions, useTheme } from '@mui/material';
import { amber, teal } from '@mui/material/colors';
import { createMakeAndWithStyles } from 'tss-react';

import { makeMuiCache } from './cache';

export const darkTheme: ThemeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: amber[700],
			contrastText: amber[800],
		},
		secondary: {
			main: teal[800],
			contrastText: teal[900],
		},
	},
};

export const muiCache = makeMuiCache();

export const { makeStyles, withStyles } = createMakeAndWithStyles({
	useTheme,
	/*
  OR, if you have extended the default mui theme adding your own custom properties:
  Let's assume the myTheme object that you provide to the <ThemeProvider /> is of
  type MyTheme then you'll write:
  */
	// "useTheme": useTheme as (()=> MyTheme)
});
