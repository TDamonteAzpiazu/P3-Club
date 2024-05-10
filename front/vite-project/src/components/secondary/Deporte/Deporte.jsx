import styles from './Deporte.module.css'

const Deporte = ({title, imgUrl, description}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <img className={styles.img} src={imgUrl} alt={title} />
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default Deporte