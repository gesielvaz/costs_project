import styles from './Vehicles.module.css';
import VehiclesForm from '../vehicles/VehiclesForm'

function Vehicles() {
    return (
        <div className={styles.vehiclesContainer}>
            <VehiclesForm/>
        </div>
        
    )
}

export default Vehicles