import Link from "next/link";
import styles from "./Trending.module.css"

export default function Trending(){
    return(
        <div className={styles.container}>
            <h3>Trending</h3>
            <div className={styles.flex}>
                <div>
                    <Link href="#"><img src="NikeGift.jpg"/></Link>
                    <h4>Kicks Essentials & More</h4>
                </div>
                <div>
                    <Link href="#"><img src="Nikestyle.jpg"/></Link>
                    <h4>Nike Style</h4>
                </div>
                <div>
                    <Link href="#"><img src="Vercity.png"/></Link>
                    <h4>HBCU Varsity Collection</h4>
                </div>
            </div>
        </div>
    )
}