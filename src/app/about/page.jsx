import Image from "next/image"
import styles from "./about.module.css"

const aboutPage = () => {
    return(
        <div>
            <div className={styles.imgContainer}>
            {/* <Image src="/about.png" alt="" width={500} height={500}/> */}
            <Image src="https://images.pexels.com/photos/29130848/pexels-photo-29130848/free-photo-of-serene-pine-forest-with-ocean-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
            </div>
        </div>
    )
}

export default aboutPage