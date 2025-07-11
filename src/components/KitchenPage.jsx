import React, { useState } from 'react';
import InventoryModal from './InventoryModal';
import RecipeModal from './RecipeModal';
import CookingModal from './CookingModal';
import RatingModal from './RatingModal';
import InfoModal from './InfoModal';
import kitchen from '../assets/IMG_2567.png'

export default function KitchenPage() {
  const [modalState, setModalState] = useState(null);

  const closeModal = () => setModalState(null);

  return (
    <div>

      <div className="welcome-container">
        <h1> Welcome! </h1>
        <button className="info" onClick={() => setModalState('info')}>Information</button>
      </div>
       
      <div className="kitchen-container">
        <img
          src={kitchen}
          alt="Kitchen Background"
          className="kitchen-background"
        />

        <div className="hotspot fridge" onClick={() => setModalState('inventory')} />
        <div className="hotspot book" onClick={() => setModalState('recipes')} />
        <div className="hotspot stove" onClick={() => setModalState('cooking')} />
        <div className="hotspot computer" onClick={() => setModalState('ratings')} />

        {modalState === 'info' && <InfoModal onClose={closeModal} />}
        {modalState === 'inventory' && <InventoryModal onClose={closeModal} />}
        {modalState === 'recipes' && <RecipeModal onClose={closeModal} />}
        {modalState === 'cooking' && <CookingModal onClose={closeModal} />}
        {modalState === 'ratings' && <RatingModal onClose={closeModal} />}
      </div>
    </div>
   
  );
}
