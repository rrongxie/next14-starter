import Links from "./links/Link"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return(
        <div className = {styles.container}>
            <div className ={styles.logo}>Logo</div>
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar