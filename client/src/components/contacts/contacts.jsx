import React, { Fragment, useContext } from 'react';
import ContactContext from '../../contexts/contact/contactContext';
import ContactItem from './contact-item';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered } = contactContext;
	return(
		<Fragment>
		<TransitionGroup>
		{filtered != null ? filtered.map(contact => 
		(<CSSTransition key={contact.id} timeout={500} className='item'>
			<ContactItem key={contact.id} contact={contact}/>
		</CSSTransition> ))
		: contacts.map(contact =>(
		<CSSTransition key={contact.id} timeout={500} className='item'>
			<ContactItem key={contact.id} contact={contact}/>
		</CSSTransition>
			))}
		</TransitionGroup>	
		</Fragment>
	)
};
export default Contacts;