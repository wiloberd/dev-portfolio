import { Link } from '@/i18n/navigation'
import styles from "./VerMaisBtn.module.css"


export default function VerMaisBtn({url, label}){
    
    return (
        <>
            <Link href={`${url}`} className={styles.viewMore}>{label}</Link>
        </>
    )
}