import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from "./Headersecond.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

export default function HeaderSecond() {
    const onSearch = (value, _e, info) => {
        console.log(info?.source, value)
    }
    return (
        <div className={styles.container}>
            <img src="Nike.png" alt='Nike-Image'/>
            <nav>
                <ul>
                    <li><Link href="#" className={styles.link}>New & Featured</Link></li>
                    <li><Link href="#" className={styles.link}>Men</Link></li>
                    <li><Link href="#" className={styles.link}>Women</Link></li>
                    <li><Link href="#" className={`${styles.link} ${styles.link2}`}>Kids</Link></li>
                    <li><Link href="#" className={`${styles.link} ${styles.link3}`}>Accessories</Link></li>
                    <li><Link href="#" className={`${styles.link} ${styles.link4}`}>Sale</Link></li>
                </ul>
            </nav>
            <div className={styles.flex}>
                <Space direction="vertical">
                    <Search
                        placeholder="Search"
                        onSearch={onSearch}
                        style={{
                            width: 200,
                            marginRight:"30px",
                        }}
                    />
                </Space>
                <div className={styles.left}>
                <FavoriteBorderOutlinedIcon  className={styles.icons}/>
                <LockOutlinedIcon className={styles.icons}/>
                <MenuIcon className={styles.menu}/>
                </div>
            </div>
        </div>
    )
}