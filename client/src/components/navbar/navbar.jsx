import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
	return(
		<div className="navbar bg-primary">
			<Link to='/'><h1> <i className={ icon } /> {title} </h1></Link>
			<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
			</ul>
		</div>
	);
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
	}
Navbar.defaultProps ={
	title: 'Contact Lists',
	icon: 'fas fa-id-card-alt'
}


export default Navbar;