import ContactForm from "./ContactForm/ContactForm";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <p className="description">
        Tem alguma oportunidade, projeto ou deseja conversar sobre tecnologia?
        Entre em contato comigo!
      </p>

      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h2>Informações de Contato</h2>

          <div className={styles.infoItem}>
            <strong>Email:</strong>

            <a href="mailto:wiloberd10@email.com">
              wiloberd10@email.com
            </a>
          </div>

          <div className={styles.infoItem}>
            <strong>LinkedIn:</strong>

            <a
              href="https://linkedin.com/in/roberd-celestin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meu perfil no LinkedIn
            </a>
          </div>

          <div className={styles.infoItem}>
            <strong>GitHub:</strong>

            <a
              href="https://github.com/wiloberd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meu perfil no GitHub
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}