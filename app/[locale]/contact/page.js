import { getTranslations } from "next-intl/server";
import ContactForm from "./ContactForm/ContactForm";
import styles from "./page.module.css";

export default async function Contact() {
  const t = await getTranslations("ContactPage");

  return (
    <div className="container">
      <h1 className="title">{t("title")}</h1>

      <p className="description">{t("description")}</p>

      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h2>{t("contactInfo.title")}</h2>

          <div className={styles.infoItem}>
            <strong>{t("contactInfo.email")}</strong>

            <a href="mailto:wiloberd10@email.com">
              wiloberd10@email.com
            </a>
          </div>

          <div className={styles.infoItem}>
            <strong>{t("contactInfo.linkedin")}</strong>

            <a
              href="https://linkedin.com/in/roberd-celestin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contactInfo.linkedinProfile")}
            </a>
          </div>

          <div className={styles.infoItem}>
            <strong>{t("contactInfo.github")}</strong>

            <a
              href="https://github.com/wiloberd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contactInfo.githubProfile")}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}