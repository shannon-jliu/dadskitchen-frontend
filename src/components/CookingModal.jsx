import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import api from '../api/api';

export default function CookingModal({onClose}) {

    return (
        <Modal className="cooking-modal" overlayClassName="modal-overlay" isOpen onRequestClose={onClose} contentLabel="Cook">
        
            <div className="modal-heading">
                <h2>Cook a Recipe</h2>
                <button className="modal-close-button" onClick={onClose}>Close</button>
            </div>
            
        </Modal>
        )
}