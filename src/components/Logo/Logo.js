import React from 'react';

import classes from './Logo.module.css';

import movieLogo from '../../assets/images/logo.jpg';

const Logo = () => (
	<div className={classes.Logo}>
		<img src={movieLogo} alt="logo" />
	</div>
);

export default Logo;
