import styles from "./page.module.css";
import projectsData from "@/app/data/projects.json";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} | Portfólio`,
    description: project.longDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  // Next.js passe automatiquement le slug dans params
  const project = projectsData.find((project) => project.slug === slug);

  // Si le projet n'existe pas, afficher la page 404
  if (!project) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            preload
          />
        </div>

        <div className={styles.details}>
          <h2>Tecnologias utilizadas</h2>
          <div className={styles.technologies}>
            {project.tags.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Voir le code →
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.linkPrimary}`}
            >
              Voir la démo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Cette fonction génère toutes les pages statiques au build
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}
