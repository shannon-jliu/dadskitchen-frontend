import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import api from '../api/api';

Modal.setAppElement('#root');

export default function InventoryModal({ onClose }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    const res = await api.get('/ingredients'); // or your inventory endpoint
    setIngredients(res.data);
  };

  return (
    <Modal isOpen onRequestClose={onClose} contentLabel="Inventory">
      <h2>Inventory</h2>
      <button onClick={onClose}>Close</button>
      <ul>
        {ingredients.map((ing) => (
          <li key={ing.id}>
            {ing.name}: {ing.quantity} {ing.unit}
          </li>
        ))}
      </ul>
      {/* Add forms/buttons for add/update/delete */}
    </Modal>
  );
}
