import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/contacts';
import ContactForm from '../contacts/contact-form';
import ContactFilter from '../contacts/contact-filter';
import AuthContext from '../../contexts/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);
	useEffect(() => {
		authContext.loadUser();
		//eslint-disable-next-line
	},[]);

	return(
		<div className="grid-2">
			<div>
			<ContactForm />
			</div>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
			
		</div>
	)
}

export default Home;