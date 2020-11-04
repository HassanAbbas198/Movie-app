import React from 'react';

import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';

const Toolbar = () => (
	<header className={classes.Toolbar}>
		<Logo />
		<nav className={classes.DesktopOnly}>
			<p className={classes.Title}>Movie's guide</p>
		</nav>
	</header>
);

export default Toolbar;
