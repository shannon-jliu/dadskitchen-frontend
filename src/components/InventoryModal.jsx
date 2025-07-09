import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import api from '../api/api';

Modal.setAppElement('#root');

export default function InventoryModal({ onClose, chefId=1 }) {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    setLoading(true);
    const res = await api.get('/chefs/${chefId}');
    setInventoryItems(res.data.inventory.items);
    setLoading(false);
  };

  const deleteIngredient = async (item) => {
    await api.post(`/chefs/${chefId}/inventory/remove`, {
      name: item.ingredient.name,
      quantity: item.quantity,
      unit: item.unit,
    });
    fetchInventory();
  };

  return (
    <Modal isOpen onRequestClose={onClose} contentLabel="Inventory">
      <h2>Inventory</h2>
      <button onClick={onClose}>Close</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Last Used</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item) => (
              <tr key={item.id}>
                <td>{item.ingredient.name}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>{item.lastUsed || "Never"}</td>
                <td>
                  <button onClick={() => deleteIngredient(item)}>Delete</button>
                  {/* You can add update logic here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Modal>
  );
}
