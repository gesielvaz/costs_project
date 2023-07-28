import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newProjectContainer}>
            <h1>Criar Projeto</h1>
            <ProjectForm/>
        </div>
        
    )
}

export default NewProject