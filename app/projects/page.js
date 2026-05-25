import Link from "next/link";
import styles from "./page.module.css";
import projectsData from "@/app/data/projects.json";
import Tag from "@/components/Tag/Tag";
import Image from "next/image";
import VerMaisBtn from "@/components/VerMais/VerMaisBtn";

export const metadata = {
  title: "Projetos | Portfolio",
  description:
    "Conheça alguns dos projetos, estudos e soluções que venho desenvolvendo na área de tecnologia.",
};

export default function Projects() {

  return (
    <div className="container">
      <h1 className="title">Meus Projetos</h1>

      <p className="description">
        Conheça alguns dos projetos, estudos e soluções que venho desenvolvendo
        na área de tecnologia.
      </p>

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
                <VerMaisBtn url={`/projects/${project.slug}`} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}