import styles from "./page.module.css";
import projectsData from "@/app/data/projects.json";
import { getTranslations } from "next-intl/server";
import Tag from "@/components/Tag/Tag";
import Image from "next/image";
import VerMaisBtn from "@/components/VerMais/VerMaisBtn";

export async function generateMetadata() {

  const t = await getTranslations("ProjectsPage.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Projects() {

    const t = await getTranslations("ProjectsPage");
  

  return (
    <div className="container">
      <h1 className="title">{t("title")}</h1>

      <p className="description">{t("description")}</p>

      <div className={styles.grid} >
        {projectsData.map((project) => (
          <div key={project.id} className={styles.card}>
          <div className={styles.imageWrapper}> 
              <Image
                src={project.image}
                alt={project.title}
                className={styles.image}
                width={300}
                height={200}
                preload
              />
            </div>

            <div className={styles.content}>
              <h2>{project.title}</h2>

              <p>{project.shortDescription}</p>

              <div className={styles.tags}>
                {project.tags.map((tech, index) => (
                  <Tag key={index} isDark={true}>
                    {tech}
                  </Tag>
                ))}
              </div>

              <span className={styles.containerViewMore}>
                <VerMaisBtn url={`/projects/${project.slug}`} label={t("viewMore")} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}