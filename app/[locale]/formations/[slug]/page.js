import styles from "./page.module.css";
import formationsData from "@/app/data/formations.json";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const t = await getTranslations("FormationsPage.FormationDetailPage");

  const formation = formationsData.find( (f) => f.slug === slug);

  if (!formation) {
    return {
      title: t("notFound.title"),
    };
  }

  return {
    title: `${formation.title} | Portfolio`,
    description: formation.longDescription,

    openGraph: {
      title: formation.title,
      description: formation.shortDescription,
      images: [formation.image],
    },
  };
}

export default async function FormationDetail({ params }) {
  const { slug } = await params;
  const formation = formationsData.find((formation) => formation.slug === slug);

  const t = await getTranslations("FormationsPage.FormationDetailPage");

  // Si la formation n'existe pas, afficher un message
  if (!formation) {
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
          <h2>{t("details")}</h2>
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
  const locales = routing.locales;

  return locales.flatMap((locale) =>
    formationsData.map((formation) => ({
      locale,
      slug: formation.slug,
    }))
  );
}
