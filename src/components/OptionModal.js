import React from 'react';
import Modal from 'react-modal';

//Modal require this
Modal.setAppElement('#app');

const OptionModal =(props)=>(
	<Modal
	isOpen={props.modal}
	// clicking the background clsoe the modal 
	onRequestClose={props.modalClose}
	closeTimeoutMS={200}
	contentLabel="Selected Option"
	className="modal"
	
	>
		<h3 className="modal__title">Selected Option</h3>
		<p className="modal__body">{props.selectedOption}</p>
		<button className="button" onClick={props.modalClose} >Okay</button>
	</Modal>
)

export default OptionModal;