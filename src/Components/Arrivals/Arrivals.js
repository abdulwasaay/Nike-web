import Link from "next/link";
import styles from "./Arrivals.module.css"

export default function Arrivals(){
    return(
        <div className={styles.container}>
            <span><Link href="#" className={styles.link}>NEW ARRIVALS</Link></span>
            <p ><Link href="#" className={styles.link}>Featuring the Air Force 1 Pro Tech</Link></p>
            <button><Link href="#" className={styles.links}>Shop</Link></button>
        </div>
    )
}