import React, { useState } from 'react';
import InventoryModal from './InventoryModal';
import RecipeModal from './RecipeModal';
import CookingModal from './CookingModal';
import RatingModal from './RatingModal';

export default function KitchenPage() {
  const [modalState, setModalState] = useState(null);

  const closeModal = () => setModalState(null);

  return (
    <div className="kitchen-container">
      {/* <img
        src="/kitchen-background.jpg"
        alt="Kitchen Background"
        className="kitchen-background"
      /> */}

      <h1> Welcome! </h1>

      <div className="hotspot cabinet" onClick={() => setModalState('inventory')} />
      <div className="hotspot book" onClick={() => setModalState('recipes')} />
      <div className="hotspot stove" onClick={() => setModalState('cooking')} />
      <div className="hotspot computer" onClick={() => setModalState('ratings')} />

      {modalState === 'inventory' && <InventoryModal onClose={closeModal} />}
      {modalState === 'recipes' && <RecipeModal onClose={closeModal} />}
      {modalState === 'cooking' && <CookingModal onClose={closeModal} />}
      {modalState === 'ratings' && <RatingModal onClose={closeModal} />}
    </div>
  );
}
