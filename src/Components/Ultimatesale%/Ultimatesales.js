import Link from "next/link";
import styles from "./Ultimatesales.module.css"

export default function Sales() {
    return (
        <div className={styles.container}>
           <div>
            <Link href="#" className={styles.link}>
            <nav>
                   <ul>
                       <li>THE ULTIMATE SALE &nbsp; <img src="Nike.png"/></li>
                       <li>CODE: ULTIMATE&nbsp; <img src="Nike.png"/></li>
                       <li>THE ULTIMATE SALE &nbsp; <img src="Nike.png"/></li>
                       <li>CODE: ULTIMATE&nbsp; <img src="Nike.png"/></li>
                       <li>THE ULTIMATE SALE &nbsp; <img src="Nike.png"/></li>
                       <li>CODE: ULTIMATE&nbsp; <img src="Nike.png"/></li>
                       <li>THE ULTIMATE SALE &nbsp; <img src="Nike.png"/></li>
                       <li>CODE: ULTIMATE&nbsp; <img src="Nike.png"/></li>
                   </ul>
               </nav>
            </Link>
           </div>
           <div className={styles.flex}>
               <div>
                   <div className={styles.border}><Link href="#" className={styles.link}></Link></div>
                   <div>
                    <span><Link href="#" className={styles.link}>SAVE UP TO 60%</Link></span>
                       <p><Link href="#" className={styles.link}>Use code ULTIMATE at checkout to save 20% on select styles-</Link></p>
                       <p><Link href="#" className={styles.link}>online and in select Nike stores. Exclusions apply.</Link></p>
                       <div className={styles.shop}><Link href="#" className={`${styles.link} ${styles.shops}`}  >Shop</Link></div>
                   </div>
               </div>
               <div className={styles.flexImage}>
                   <div className={styles.firstdiv}><Link href="#" className={styles.link}><img src="Nikeex.jpeg"/></Link></div>
                   <div className={styles.seconddiv}><Link href="#" className={styles.link}><img src="Nikeex2.jpeg"/></Link></div>
                   <div className={styles.thirddiv}><Link href="#" className={styles.link}><img src="Nikeex3.jpg"/></Link></div>
               </div>
           </div>
   </div>
    )
}