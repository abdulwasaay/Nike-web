import Link from "next/link"
import styles from "./SimpleImages.module.css"

export default function Simpleimages(){
    return(
        <div className={styles.container}>
            <Link href="#"><img src="NikeGirl1.jpg"/></Link>
            <Link href="#"><img src="Nikegirl2.jpg"/></Link>
            <Link href="#"> <img src="Nikegirl3.jpg"/></Link>
        </div>
    )
}