import React from 'react';

import classes from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sliders from '../../containers/Sliders/Sliders';

const Layout = (props) => {
	return (
		<React.Fragment>
			<Toolbar />
			<main className={classes.Content}>
				<Sliders />
			</main>
		</React.Fragment>
	);
};

export default Layout;
