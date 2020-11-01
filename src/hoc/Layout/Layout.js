import React from 'react';

import classes from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Slider from '../../components/Slider/Slider';

const Layout = (props) => {
	return (
		<React.Fragment>
			<Toolbar />
			<main className={classes.Content}>
				<Slider />
			</main>
		</React.Fragment>
	);
};

export default Layout;
