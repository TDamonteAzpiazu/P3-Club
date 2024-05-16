import React from 'react';
import styles from './About.module.css';

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <h1>Acerca del Proyecto</h1>
            <p>
                ¡Bienvenido a mi proyecto de gestión de turnos para alquiler de canchas deportivas!
                Este proyecto fue creado como parte de mi segundo desafío full-stack, donde decidí crear un gestor de turnos
                para un lugar de alquiler de canchas deportivas. 
            </p>
            <h2>Mi Historia</h2>
            <p>
                El proyecto surgió como un desafío del M3 de Henry para desarrollar habilidades full-stack y ofrecer una solución práctica
                para la gestión de turnos en un entorno deportivo. Durante el desarrollo, destaco la importancia del pair programming,
                trabajando en colaboración con compañeros del curso a través de Discord, lo que me permitió aprender y crecer juntos.
            </p>
            <h2>Tecnologías Utilizadas</h2>
            <p>
                Para llevar a cabo mi proyecto, utilicé un conjunto de tecnologías modernas, incluyendo TypeScript,
                Express.js, PostgreSQL, TypeORM, React, Vite y Redux. Estas herramientas me permitieron construir una aplicación
                robusta y escalable, combinando lo mejor del desarrollo front-end y back-end.
            </p>
            <h2>Valores y Filosofía</h2>
            <p>
                En mi viaje de desarrollo, valoro el aprendizaje continuo y la exploración de nuevas herramientas y tecnologías.
                Busco constantemente mejorar mis habilidades, leyendo documentación, buscando ayuda en comunidades en línea y
                practicando el pair programming. La colaboración y el intercambio de conocimientos fueron fundamentales para mi éxito.
            </p>
            <h2>Objetivos Futuros</h2>
            <p>
                Actualmente, me estoy preparando para abordar nuevos desafíos en el ámbito del backend. Si bien no tengo planes
                específicos para expandir este proyecto en este momento, estoy emocionado de explorar nuevas áreas y seguir aprendiendo
                en mi viaje de desarrollo.
            </p>
        </div>
    );
};

export default AboutUs;