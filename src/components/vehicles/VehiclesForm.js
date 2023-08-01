import style from '../AllForm.module.css';
import modalStyle from '../modal/Modal.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VehiclesForm() {
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
            <button className={style.buttonX} type ="submit" onClick={closeModal}>
              X
            </button>
            <h1>CREAR NUEVO VEHÍCULO</h1>
            <form className={style.allForm}>
              <div>
                <input type="text" placeholder="Marca" id="marcaInput" />
              </div>
              <div>
                <input type="text" placeholder="Modelo" id="modeloInput" />
              </div>
              <div>
                <input type="number" placeholder="Año" min="0" id="anoInput" />
              </div>
              <div>
                <input type="text" placeholder="Patente" id="patenteInput" />
              </div>
              <div>
                <input type="text" placeholder="Sucursal" id="sucursalInput" />
              </div>
              <div>
                <input type="text" placeholder="N° de Chasis" id="chasisInput" />
              </div>

              <div>
                <h5>Color 1</h5>
                <input type="color" id="color1Input" />
              </div>
              <div>
                <h5>Color 2</h5>
                <input type="color" id="color2Input" />
              </div>
              <div className={style.imagens}>
                <div>
                  <h5>Image 1</h5>
                  <input type="file" accept=".jpg, .png" />
                </div>
                <div>
                  <h5>Image 2</h5>
                  <input type="file" accept=".jpg, .png" />
                </div>
                <div>
                  <h5>Image 3</h5>
                  <input type="file" accept=".jpg, .png" />
                </div>
                <div>
                  <h5>Image 4</h5>
                  <input type="file" accept=".jpg, .png" />
                </div>
                <div>
                  <h5>Image 5</h5>
                  <input type="file" accept=".jpg, .png" />
                </div>
              </div>
              <div className={style.botaoContainer}>
                <input className={style.botaoCancelar} type="submit" value="Cancelar"/>
                <input className={style.botaoCriar} type="submit" value="Criar" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default VehiclesForm;
