import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import api from '../api/api';

export default function RatingModal({onClose}) {

    return (
        <Modal className="rating-modal" overlayClassName="modal-overlay" isOpen onRequestClose={onClose} contentLabel="Rating">

            <div className="modal-heading">
                <h2>Rating</h2>
                <button className="modal-close-button" onClick={onClose}>Close</button>
            </div>
            
        </Modal>
    )
}