import styles from "./page.module.css";
import projectsData from "@/app/data/projects.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const t = await getTranslations("ProjectsPage.ProjectDetailPage");

  const project = projectsData.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return {
      title: t("notFound.title"),
    };
  }

  return {
    title: `${project.title} | Portfolio`,
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

  const t = await getTranslations("ProjectsPage.ProjectDetailPage");

  // Si le projet n'existe pas, afficher la page 404
  // if (!project) {
  //   notFound();
  // }

  if (!project) {
    return (
      <div className={styles.container}>
        <h1>{t("notFound.title")}</h1>
        <p>{t("notFound.description")}</p>
      </div>
    );
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
          <h2>{t("technologies")}</h2>
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
               {t("buttons.code")}
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.linkPrimary}`}
            >
               {t("buttons.demo")}
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
