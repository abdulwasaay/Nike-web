import Link from "next/link"
import styles from "./Featured.module.css"

export default function Featured(){
    return(
        <div className={styles.container}>
        <h3>Featured</h3>
        <div className={styles.flex}>
            <div >
                <Link href="#"><img src="nikecolorshoe.jpeg"/></Link>
                <Link href="#" ><p className={styles.para1}>New from Jordan Basketball</p></Link>
                <Link href="#"><h2 className={styles.head1}>Featuring the Zion 3</h2></Link>
                <Link href="#"><button className={styles.button1}>Shop</button></Link>
            </div>
            <div>
                <Link href="#"><img src="Nikebasketball.jpg"/></Link>
                <Link href="#"><p className={styles.para2}>Rep Your School</p></Link>
                <Link href="#"><h2 className={styles.head2}>Dunk Madness</h2></Link>
                <Link href="#"><button className={styles.button2}>Shop</button></Link>
            </div>
        </div>
    </div>
    )
}