import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";

export default async function About() {
    const t = await getTranslations("AboutPage");

  return (
    <div className="container">
      <h1 className="title">{t("title")}</h1>

      <div className={styles.content}>
        <div className={styles.bio}>
          <h2>{t("bio.title")}</h2>
          <p>{t("bio.paragraph1")}</p>
          <p>{t("bio.paragraph2")}</p>
        </div>

        <div className={styles.skills}>
          <h2>{t("skills.title")}</h2>

          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <h3>{t("skills.frontend.title")}</h3>

              <ul>
                <li>React.js & Next.js</li>
                <li>JavaScript ES6+</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                {/* <li>Responsive Design</li> */}
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>{t("skills.backend.title")}</h3>

              <ul>
                <li>Python & Django</li>
                <li>APIs REST</li>
                <li>PostgreSQL & SQL</li>
                <li>Integração de Sistemas</li>
                {/* <li>Lógica de Programação</li> */}
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>{t("skills.infrastructure.title")}</h3>

              <ul>
                <li>Docker</li>
                <li>Nginx</li>
                <li>Deploy de Aplicações</li>
                <li>Noções de Redes</li>
                {/* <li>Linux</li> */}
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>{t("skills.tools.title")}</h3>

              <ul>
                <li>Git & GitHub</li>
                <li>Postman / Insomnia</li>
                {/* <li>Figma</li> */}
                <li>VS Code</li>
                <li>Chrome DevTools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}