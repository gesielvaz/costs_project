import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newProjectContainer}>
            <ProjectForm/>
        </div>
        
    )
}

export default NewProject