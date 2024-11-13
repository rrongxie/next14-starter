import Image from "next/image"
import styles from "./about.module.css"

const aboutPage = () => {
    return(
        <div className={styles.container}>
           <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>About Agency</h2>
            <h1 className={styles.title}>
                We create digital ideas.
            </h1>
            <p className={styles.desc}>
                alkjs slkfjansk kslfl.
                sjl dshl.
            </p>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <h1>10 k+</h1>
                    <p>year of experience</p>
                </div>
                <div className={styles.box}>
                    <h1>10 k+</h1>
                    <p>year of experience</p>
                </div>
                <div className={styles.box}>
                    <h1>10 k+</h1>
                    <p>year of experience</p>
                </div>
            </div>

           </div>
           <div className={styles.imgContainer}>
            <Image 
                src="/about.png"
                alt="About Image"
                fill
                className={styles.img}/>
            </div>
        </div>
    )
}

export default aboutPage