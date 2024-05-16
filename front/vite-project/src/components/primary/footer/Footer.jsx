// import styles from './Footer.module.css'

// const Footer = () => {
//     return (
//     <div className={styles.container}>
//         <span className={styles.item}>Hola soy el footer y deberia agregar toda la informacion relevante</span>
//     </div>
//     )
// }

// export default Footer


import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h3>Enlaces rápidos</h3>
                        <ul className={styles.linkList}>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/about">Sobre nosotros</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Contacto</h3>
                        <ul className={styles.contactList}>
                            <li><span>Teléfono:</span> +123 456 7890</li>
                            <li><span>Email:</span> info@tuempresa.com</li>
                            <li><span>Dirección:</span> Calle Falsa 123, Ciudad, País</li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Síguenos</h3>
                        <ul className={styles.socialList}>
                            <li><a href="https://github.com/TDamonteAzpiazu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://www.instagram.com/tobodamonte/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/tobias-damonte-b8971a288/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottomRow}>
                    <p>© 2024 CanchasTobo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;