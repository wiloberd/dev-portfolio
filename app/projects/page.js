import Link from "next/link";
import styles from "./page.module.css";
import projectsData from "@/app/data/projects.json";
import Tag from "@/components/Tag/Tag";
import Image from "next/image";

export const metadata = {
  title: "Projetos | Portfolio",
  description:
    "Conheça projetos, estudos e aplicações desenvolvidas utilizando tecnologias modernas.",
};

export default function Projects() {
  return (
    <div className="container">
      <h1 className="title">Meus Projetos</h1>

      <p className="description">
        Conheça alguns dos projetos, estudos e soluções que venho desenvolvendo
        na área de tecnologia.
      </p>

      <div className={styles.grid}>
        {projectsData.map((project) => (
          <Link
            href={`/projets/${project.slug}`}
            key={project.id}
            className={styles.card}
          >
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

              <span className={styles.viewMore}>
                Ver projeto →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}