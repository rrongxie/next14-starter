import styles from "./footer.module.css"

const Footer = ()  =>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>soniadev</div>
            <div className={styles.text}>
                Sonia create thoughts agency @ All rights reserved.
            </div>
        </div>
    )
}

export default Footer 