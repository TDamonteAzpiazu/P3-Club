import Deporte from "../../components/secondary/Deporte/Deporte"
import deportes from "../../helpers/Deportes"
import { useState } from "react"
import styles from './Home.module.css'

const Home = () => {
    const [deportesToShow, setDeportesToShow] = useState(deportes)

    return (
        <div className={styles.container}>
            <h1>Ofrecemos servicios de alquiler de canchas para los siguientes deportes:</h1>
            {
                deportesToShow.map(deporte => <Deporte key={deporte.title} title={deporte.title} imgUrl={deporte.imgUrl} description={deporte.description} />)
            }
        </div>
    )
}

export default Home