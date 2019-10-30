import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../contexts/auth/authContext';

const Navbar = ({ icon, title }) => {
	const authContext = useContext(AuthContext);

	const { isAuthenticated, logout, user } = authContext;
	const onLogout = ()=>{
		logout();
	}
	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name }</li>
			<li>
				<a onClick={onLogout} href='#!'>
					<i className='fas fa-sign-out-alt'></i><span className='hide-sm'>Logout</span>
				</a>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
		</Fragment>
		);
	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
		</Fragment>
		);
	return(
		<div className="navbar bg-primary">
			<Link to='/'><h1> <i className={ icon } /> {title} </h1></Link>
			<ul>
			
				{isAuthenticated ? authLinks : guestLinks }

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