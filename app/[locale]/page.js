import styles from "@/app/[locale]/page.module.css"
import Tag from "@/components/Tag/Tag"
// import Link from "next/link"
import { Link } from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

const technologies = [
  "React",
  "Next.js",
  "Python",
  "Django",
  "APIs REST",
]

export default function Home() {
   const t = useTranslations('HomePage');

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {t("title")} Olá, eu sou <span className={styles.highlight}>Roberd Celestin</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Desenvolvedor Full Stack
        </p>

        <p className={styles.heroDescription}>
          Eu crio aplicações web modernas, de alto desempenho e acessíveis usando React, Next.js, Python e Django.
        </p>

        <div className={styles.heroButtons}>
          <Link
            href="/projects"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Ver projetos
          </Link>

          <Link
            href="/contact"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            Entrar em contato
          </Link>
        </div>

        <div className={styles.tagsContainer}>
          {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}