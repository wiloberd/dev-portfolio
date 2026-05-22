import styles from "./Footer.module.css";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Roberd C.</p>
      <p className={styles.links}>
        <a href="https://github.com/wiloberd/" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/roberd-celestin/" target="_blank">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
