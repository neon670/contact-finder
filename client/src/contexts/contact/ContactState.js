import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER}  from '../type';

const ContactState = props => {
	const intialState ={
		contacts: [
			{
	    "id": 1,
	    "name": "Leanne Graham",
	    "email": "Sincere@april.biz",
	    "phone": "1-770-736-8031 x56442",
	    "type": "professional"
	  },
	  {
	    "id": 2,
	    "name": "Ervin Howell",
	    "email": "Shanna@melissa.tv",
	    "phone": "010-692-6593 x09125",
	    "type": "peronsal"
	  },
	  {
	    "id": 3,
	    "name": "Clementine Bauch",
	    "email": "Nathan@yesenia.net",
	    "phone": "1-463-123-4447",
	    "type": "professional"
	  }
	 ],
	 current: null, 
	 filtered: null
	};
	const [ state, dispatch ] = useReducer(contactReducer, intialState);

	//add
	const addContact = contact => {
		contact.id = uuid.v4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	//delete
	const deleteContact = id => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	//set current
	const setCurrent = contact => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	//clear current
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT});
	};
	//update
	const updateContact = contact => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};
	//filter
	const filterContacts = text => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};
	//clear
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER});
	};

	return (
		<ContactContext.Provider 
		value={{
			contacts: state.contacts,
			current: state.current,
			filtered: state.filtered,
			addContact,
			deleteContact,
			setCurrent,
			clearCurrent,
			updateContact,
			filterContacts,
			clearFilter
		}}>
			{props.children}
		</ContactContext.Provider>
	)
};

export default ContactState;