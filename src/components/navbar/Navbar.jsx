import Links from "./links/Link"
import Link from "next/link"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return(
        <div className = {styles.container}>
            <Link href="/" className ={styles.logo}>Logo</Link>
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar