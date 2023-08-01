import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
function Home() {
    return (
        <section className={styles.homeContainer}>
            <p>Menu</p>
            <LinkButton to="/newproject" text = "Nuevos Projetos" />
            <LinkButton to="/vehicles" text = "Vehicles" />
            <img src={savings} alt="Costs"/>
        </section>
    )
}
export default Home