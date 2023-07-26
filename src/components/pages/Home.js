import styles from './Home.module.css'
import savings from '../../img/savings.svg'
function Home() {
    return (
        <section className={styles.homeContainer}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
            <a href='http://localhost:3000/newproject'>Criar Projeto</a>
            <img src={savings} alt="Costs"/>
        </section>
    )
}
export default Home