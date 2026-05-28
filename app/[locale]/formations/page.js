import styles from "./page.module.css";
import formationsData from "@/app/data/formations.json";
import Tag from "@/components/Tag/Tag";
import Image from "next/image";
import VerMaisBtn from "@/components/VerMais/VerMaisBtn";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {

  const t = await getTranslations("FormationsPage.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}


export default async function Formations() {
  const t = await getTranslations("FormationsPage");

  return (
    <div className="container">
      <h1 className="title">{t("title")}</h1>

      <p className="description">{t("description")}</p>

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
                <VerMaisBtn url={`formations/${formation.slug}`} label={t("viewMore")} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}