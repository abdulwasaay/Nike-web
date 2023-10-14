import Link from "next/link";
import styles from "./Headerfirst.module.css"

export default function HeaderFirst(){
    return(
        <div className={styles.container}>
            <nav>
                <ul>
                    <li><Link href="#" className={styles.link}>Find a Store</Link>&nbsp; |</li>
                    <li><Link href="#" className={styles.link}>Help</Link>&nbsp; |</li>
                    <li><Link href="#" className={styles.link}>Join Us</Link>&nbsp; |</li>
                    <li><Link href="#" className={styles.link}>Sign In</Link></li>
                </ul>
            </nav>
        </div>
    )
}