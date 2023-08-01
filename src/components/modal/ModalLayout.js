import React, { useState } from 'react';
import Modal from './modal/Modal'; // Importe o componente Modal
import { useRoutes } from 'react-router-dom';

const ModalLayout = ({ routes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const routeResult = useRoutes(routes);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          {routeResult}
        </Modal>
      )}

      {routeResult}
    </>
  );
};

export default ModalLayout;
