import style from './ProjecForm.module.css';
// import Inputs from '../form/Input';


function ProjectForm() {
  return (
    <form className={style.ProjectForm}>
      
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
  );
}

export default ProjectForm;
