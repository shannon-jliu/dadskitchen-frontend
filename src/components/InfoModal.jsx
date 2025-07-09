import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

export default function InfoModal({onClose}) {

    return (
        <Modal>
            <h2>Info</h2>
            <ul>
                <li>
                    Click the <strong>refridgerator</strong> to view and update your inventory.
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