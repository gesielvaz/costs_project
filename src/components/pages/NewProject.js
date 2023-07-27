import styles from './NewProject.module.css';


function NewProject() {
    return (
        <div className={styles.divs}>
            <p>Crie o projeto para ser adicionado ao serviços</p>
            <label for="campoTexto">Nome:</label>
            <input type="text" id="campoTexto" name="nome" placeholder="Nome do Projeto">
            </input>
            <label for="campoTexto">Observação:</label>
            <input type="text" obs="Obs" placeholder="Observação"></input>
        </div>
    )
}

export default NewProject