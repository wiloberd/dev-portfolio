import Link from "next/link";
import styles from "./VerMaisBtn.module.css"


export default function VerMaisBtn({url}){
    
    console.log(url)
    return (
        <>
            <Link href={`${url}`} className={styles.viewMore}>
                  Ver Mais →
            </Link>
        </>
    )
}