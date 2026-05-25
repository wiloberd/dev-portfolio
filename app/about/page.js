import styles from "./page.module.css";

export default function About() {
  return (
    <div className="container">
      <h1 className="title">Sobre Mim</h1>

      <div className={styles.content}>
        <div className={styles.bio}>
          <h2>Quem sou eu?</h2>

          <p>
            Profissional de tecnologia apaixonado por desenvolvimento de
            software, sistemas web e soluções modernas. Formado em Sistemas de
            Informação, possuo experiência no desenvolvimento e manutenção de
            aplicações web, integração de APIs REST e bancos de dados.
          </p>

          <p>
            Gosto de transformar ideias em soluções funcionais, buscando sempre
            unir tecnologia, aprendizado contínuo e resolução de problemas
            reais através do desenvolvimento de sistemas eficientes e
            escaláveis.
          </p>
        </div>

        <div className={styles.skills}>
          <h2>Competências</h2>

          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>

              <ul>
                <li>React.js & Next.js</li>
                <li>JavaScript ES6+</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                {/* <li>Responsive Design</li> */}
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Backend</h3>

              <ul>
                <li>Python & Django</li>
                <li>APIs REST</li>
                <li>PostgreSQL & SQL</li>
                <li>Integração de Sistemas</li>
                {/* <li>Lógica de Programação</li> */}
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Infraestrutura</h3>

              <ul>
                <li>Docker</li>
                <li>Nginx</li>
                <li>Deploy de Aplicações</li>
                <li>Noções de Redes</li>
                {/* <li>Linux</li> */}
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Ferramentas</h3>

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