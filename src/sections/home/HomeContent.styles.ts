import { Theme } from '@mui/material/styles';

import { makeStyles } from '../../theme/themes';

const useStyles = makeStyles()((theme: Theme) => ({
	mainContainer: {
		minHeight: '100vh',
		width: '100%',
		paddingTop: theme.spacing(4),

		'& > :not(:last-child)': {
			marginBottom: theme.spacing(2),
		},
	},
	title: {
		textAlign: 'center',
		color: theme.palette.primary.contrastText,
	},
	centeredContainer: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
	},
	paper: {
		maxWidth: theme.breakpoints.values.sm,
		padding: theme.spacing(2),

		'& > :not(:last-child)': {
			marginBottom: theme.spacing(2),
		},
	},
	buttonLink: {
		color: theme.palette.text.primary,
	},
}));

export default useStyles;
