import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import api from '../api/api';

export default function RecipeModal({onClose}) {

    return (
        <Modal className="recipe-modal" overlayClassName="modal-overlay" isOpen onRequestClose={onClose} contentLabel="Recipes">
        
            <div className="modal-heading">
                <h2>Recipes</h2>
                <button className="modal-close-button" onClick={onClose}>Close</button>
            </div>
            
        </Modal>
        )
}