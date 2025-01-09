import React from "react";
import styles from "./Inicio.module.scss";

const Inicio = () => {
  return (
    <div className={styles.inicio}>
      {/* Seção Hero */}
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="img/img1"
            alt="Pessoa segurando livros"
          />
        </div>
      </section>

      <section className={styles.reasons}>
        <h2>Por que devo doar?</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img
              src="img/icone1"
              alt="Ajude outros"
            />
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </div>
          <div className={styles.card}>
            <img
              src="img/icone2"
              alt="Estímulo à leitura"
            />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </div>
          <div className={styles.card}>
            <img
              src="img/icone3"
              alt="Impacte vidas"
            />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </div>
          <div className={styles.card}>
            <img
              src="img/icone4"
              alt="Impacte vidas"
            />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;


