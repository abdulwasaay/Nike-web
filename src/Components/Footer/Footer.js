import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div>
            <div className={styles.firstcenter}>
                <div>
                    <ul>
                        <li><b>Featured</b></li>
                        <li>Air Force 1</li>
                        <li>Jordan 1</li>
                        <li>Metcon</li>
                        <li>Air Max 270</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><b>Shoes</b></li>
                        <li>All Shoes</li>
                        <li>Jordan Shoes</li>
                        <li>Running Shoes</li>
                        <li>Basketball Shoes</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><b>Clothing</b></li>
                        <li>All Clothing</li>
                        <li>Tops & T-shirts</li>
                        <li>Shorts</li>
                        <li>Hoodies & Pullovers</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><b>Kids</b></li>
                        <li>Infant & Toddler Shoes</li>
                        <li>Kids Shoes</li>
                        <li>Kids Basketball shoes</li>
                        <li>Kids Running Shoes</li>
                    </ul>
                </div>
            </div>
            <div className={styles.contain}>
                <div className={styles.flex}>
                    <div>
                        <ul>
                            <li><b>GIFT CARDS</b></li>
                            <li><b>PROMOTIONS</b></li>
                            <li><b>FIND A STORE</b></li>
                            <li><b>BECOME A MEMBER</b></li>
                            <li><b>NIKE JOURNAL</b></li>
                            <li><b>SEND US FEEDBACK</b></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><b>GET HELP</b></li>
                            <li>Order Status</li>
                            <li>Shipping & Delivery</li>
                            <li>Returns</li>
                            <li>Payment Options</li>
                            <li>Gift Card Balance </li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><b>ABOUT NIKE</b></li>
                            <li>News</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Purpose</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <TwitterIcon  className={styles.icons}/>
                    <FacebookIcon className={styles.icons}/>
                    <YouTubeIcon className={styles.icons}/>
                    <InstagramIcon className={styles.icons}/>
                </div>
            </div>
        </div>
    )
}