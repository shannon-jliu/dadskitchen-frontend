import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function InfoModal({onClose}) {

    return (
        <Modal className="info-modal" overlayClassName="modal-overlay" isOpen onRequestClose={onClose} contentLabel="Info">
            <div className="modal-heading">
                <h1>Info</h1>
                <button className="modal-close-button" onClick={onClose}>Close</button>
            </div>
            
            <ul>
                <li>
                    Click the <strong>refrigerator</strong> to view and update your inventory.
                </li>
                <li>
                    Click the <strong>recipe book</strong> to view and update your recipes.
                </li>
                <li>
                    Click the <strong>laptop</strong> to interact with other chefs and eaters.
                </li>
                <li>
                    Click the <strong>stove</strong> to interact with other chefs and eaters.
                </li>
            </ul>
        </Modal>
    )
}