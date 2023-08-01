import style from '../AllForm.module.css';
import modalStyle from '../modal/Modal.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    // This function will be executed when the component is mounted
    setModalOpen(true); // Open the modal automatically when entering the route
  }, []);

  const closeModal = () => {
    setModalOpen(false);
    navigate('/'); // Redirect to the home page ("/")
  };

  return (
    <>
      {modalOpen && (
        <div className={modalStyle['modal-overlay']}>
          <div className={modalStyle['modal-content']}>
            <button className={style.buttonX} type="submit" onClick={closeModal}>
              X
            </button>
            <h1>Criar Projeto</h1>
            <form className={style.allForm}>
              <div>
                <input type="text" placeholder="Nome do projeto" />
              </div>
              <div>
                <input type="text" placeholder="Orçamento Total" />
              </div>
              <div>
                <select name="Category_id">
                  <option disabled selected>
                    Selecionar Categoria
                  </option>
                </select>
              </div>
              <div className={style.botaoContainer}>
                <input className={style.botaoCancelar} type="submit" value="Cancelar" />
                <input className={style.botaoCriar} type="submit" value="Criar" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default ProjectForm;
