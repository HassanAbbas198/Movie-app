import React from 'react';

import classes from './Logo.module.css';

import movieLogo from '../../assets/logo.jpg';

const Logo = (props) => (
	<div
		className={classes.Logo}
		style={{ height: props.height, marginBottom: props.marginBottom }}
	>
		<img src={movieLogo} alt="logo" />
	</div>
);

export default Logo;
