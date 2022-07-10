import Link from "next/link"
import { useEffect, useRef } from "react"
import nav from "../styles/navbar.module.css"
function Header (){
    const top = useRef();
    const res = useRef();
    const show = useRef();
    const hide = useRef();
    useEffect(() => {
        window.addEventListener( "scroll", () => {
            if (window.scrollY >= 300) {
                top.current.style.display = "block"
            } else {
                top.current.style.display = "none"
            }
            top.current.addEventListener("click", () => {window.scrollTo(0, 0);})
        })

        show.current.addEventListener("click", () => {
            res.current.style.opacity = 1;
            hide.current.style.display = "block";
            show.current.style.display = "none";
            res.current.style.display = "block";
        })
        hide.current.addEventListener("click", () => {
            res.current.style.opacity = 0;
            show.current.style.display = "block";
            hide.current.style.display = "none";
            res.current.style.display = "none";
        })
    });

    return <nav className = {nav.nav}>
                <h1>ENG/ Ramy_Reda</h1>
            <div ref = {res} className={nav.res}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/service">Service</Link>
                <Link href="/team">Teams</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
            </div>
            <p ref={top} className={nav.icon_up}>
                <i className="fa-solid fa-arrow-up"></i>
            </p>
            <div className={nav.responsive}>
                <p ref={show} className={nav.show}>
                    <i className="fa-solid fa-bars"></i>
                </p>
                <p ref={hide} className={nav.hide}>
                    <i className="fa-solid fa-xmark"></i>
                </p>
            </div>
        </nav>
}

export default Header