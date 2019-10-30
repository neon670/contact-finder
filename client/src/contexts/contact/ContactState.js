import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { GET_CONTACTS, CLEAR_CONTACTS, ADD_CONTACT, DELETE_CONTACT,CONTACT_ERROR, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER}  from '../type';

const ContactState = props => {
	const intialState ={
	 contacts: null,
	 current: null, 
	 filtered: null,
	 error: null
	};
	const [ state, dispatch ] = useReducer(contactReducer, intialState);

	//add
	const addContact = async contact => {
		const config = {
			headers:{
				'Content-Type':'application/json'
			}
		}
		try{
			const res = await axios.post('/api/contacts', contact, config);
			dispatch({ type: ADD_CONTACT, payload: res.data });
		}catch(err){
			dispatch({type: CONTACT_ERROR, payload: err.response.msg});
		}

	};
	//get
	const getContacts = async contact => {
		
		try{
			const res = await axios.get('/api/contacts');
			dispatch({ type: GET_CONTACTS, payload: res.data });
		}catch(err){
			dispatch({type: CONTACT_ERROR, payload: err.response.msg});
		}

	};
	//clear
	const clearContacts = () => {
		dispatch({ type: CLEAR_CONTACTS});
	};

	//update
	const updateContact = async contact => {
		const config = {
			headers:{
				'Content-Type':'application/json'
			}
		};
		try{
			const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
			dispatch({ type: UPDATE_CONTACT, payload: res.data });
		}catch(err){
			dispatch({type: CONTACT_ERROR, payload: err.response.msg});
		}

	};
	//delete
	const deleteContact = async id => {
		try{
			await axios.delete(`/api/contacts/${id}`);
			dispatch({ type: DELETE_CONTACT, payload: id });
		}catch(err){
			dispatch({type: CONTACT_ERROR, payload: err.response.msg});
		}

	};

	//set current
	const setCurrent = contact => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	//clear current
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT});
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
			error: state.error,
			addContact,
			deleteContact,
			setCurrent,
			clearCurrent,
			updateContact,
			filterContacts,
			clearFilter,
			getContacts,
			clearContacts
		}}>
			{props.children}
		</ContactContext.Provider>
	)
};

export default ContactState;