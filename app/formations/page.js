import Link from "next/link";
import styles from "./page.module.css";
import formationsData from "@/app/data/formations.json";
import Tag from "@/components/Tag/Tag";
import Image from "next/image";

export const metadata = {
  title: "Formations | Portfólio",
  description:
    "Descubra minha trajetória de aprendizado e evolução na área de tecnologia.",
};

export default function Formations() {

  return (
    <div className="container">
      <h1 className="title">Formação & Estudos</h1>

      <p className="description">
        Descubra minha trajetória de aprendizado e evolução na área de tecnologia.
      </p>

      <div className={styles.grid}>
        {formationsData.map((formation) => (
          <div key={formation.id} className={styles.card}>
            <div className={styles.imageWrapper}> 
              <Image
                src={formation.image}
                alt={formation.title}
                className={styles.image}
                width={300}
                height={200}
                preload
              />
            </div>

            <div className={styles.content}>
              <h2>{formation.title}</h2>

              <p>{formation.shortDescription}</p>

              <div className={styles.tags}>
                {formation.tags.map((tech, index) => (
                  <Tag key={index} isDark={true}>
                    {tech}
                  </Tag>
                ))}
              </div>

              <span className={styles.containerViewMore}>
                <Link href={`/formations/${formation.slug}`} className={styles.viewMore}>
                  Ver Mais →
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}