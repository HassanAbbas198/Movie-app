import React from 'react';

import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';

const Toolbar = (props) => (
	<header className={classes.Toolbar}>
		<Logo />
		<nav className={classes.DesktopOnly}></nav>
	</header>
);

export default Toolbar;
