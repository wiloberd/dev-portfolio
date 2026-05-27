import styles from "./page.module.css";
import formationsData from "@/app/data/formations.json";
import Image from "next/image";

export default async function FormationDetail({ params }) {
  const { slug } = await params;
  const formation = formationsData.find((formation) => formation.slug === slug);

  // Si la formation n'existe pas, afficher un message
  if (!formation) {
    return (
      <div className={styles.container}>
        <h1>Formation non trouvée</h1>
        <p>Cette formation n&apos;existe pas ou a été supprimée.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{formation.title}</h1>
        <p className={styles.description}>{formation.description}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={formation.image}
            alt={formation.title}
            width={800}
            height={600}
            preload
          />
        </div>

        <div className={styles.details}>
          <h2>Detalhes</h2>
          <div className={styles.technologies}>
            {formation.tags.map((tag, index) => (
              <span key={index} className={styles.tech}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return formationsData.map((formation) => ({
    slug: formation.slug,
  }));
}
