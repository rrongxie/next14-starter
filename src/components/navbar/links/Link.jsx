import NavLink from "./NavLink/navLink";
import styles from "./links.module.css";

const Links = () =>{
    
    const links = [
        {
            title: "Homepage",
            path:"/",
        },
        {
            title: "About",
            path:"/about",
        },
        {
            title: "Contact",
            path:"/contact",
        },
        {
            title: "Blog",
            path:"/posts",
        },
    ];
    return(
        <div className={styles.container}>
                {links.map((link =>(
                   <NavLink item={link} key={link.title}/>
                )))}
        </div>
    )
}

export default Links