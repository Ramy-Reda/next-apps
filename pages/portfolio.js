import Link from "next/link";
import porto from '../styles/portofolio.module.css';
import Image from "next/image";
import protfolio1 from "../public/portfolio/portfolio-1.jpg"
import protfolio2 from "../public/portfolio/portfolio-2.jpg"
import protfolio3 from "../public/portfolio/portfolio-3.jpg"
import protfolio4 from "../public/portfolio/portfolio-4.jpg"
import protfolio5 from "../public/portfolio/portfolio-5.jpg"
import protfolio6 from "../public/portfolio/portfolio-6.jpg"
import protfolio7 from "../public/portfolio/portfolio-7.jpg"
import protfolio9 from "../public/portfolio/portfolio-9.jpg"
import protfolio10 from "../public/portfolio/portfolio-details-1.jpg";
import { useEffect, useRef } from "react";


export default function portfolio() {

    const cards = useRef();
    const photo = useRef();

    useEffect(() => {
        const classesArray = Array.from(cards.current.children);
        const imagesArray = Array.from(photo.current.children);
        classesArray.forEach( (child) => {
            child.addEventListener("click", function () {
                classesArray.forEach( (ele) => {
                    ele.classList.remove(porto.active);
                    this.classList.add(porto.active)
                })

                imagesArray.forEach( (image) => {
                    image.style.display = "none"
                })

                document.querySelectorAll(this.dataset.port).forEach( (port) => {
                    port.style.display = "block"
                })
            })
        })
    })

    return (
            <div className="container-fluid">
                <div className={porto.navAbout}>
                    <h2>portfolio</h2>
                    <p>
                        <Link href="/">Home</Link> / <span>portfolio</span> 
                    </p>
            </div>
            <div className="container">
                <ul className={porto.portfolio} ref={cards}>
                    <li className={porto.active} data-port=".all">All</li>
                    <li data-port=".app">App</li>
                    <li data-port=".card">Card</li>
                    <li data-port=".web">Web</li>
                </ul>
                <div style={{clear: 'both'}}></div>

                <div className={porto.ports} ref={photo}>
                    <div  className={`all app`}>
                        <Image src={protfolio1} alt={protfolio1} />
                    </div>
                    <div className={`all app`}>
                        <Image src={protfolio2} alt={protfolio2} />
                    </div>
                    <div className={`all app`}>
                        <Image src={protfolio3} alt={protfolio3} />
                    </div>
                    <div className={`all card`}>
                        <Image src={protfolio4} alt={protfolio4} />
                    </div>
                    <div className={`all card`}>
                        <Image src={protfolio5} alt={protfolio5} />
                    </div>
                    <div className={`all card`}>
                        <Image src={protfolio6} alt={protfolio6} />
                    </div>
                    <div className={`all web`}>
                        <Image src={protfolio7} alt={protfolio7} />
                    </div>
                    <div className={`all web`}>
                        <Image src={protfolio9} alt={protfolio9} />
                    </div>
                    <div className={`all web`}>
                        <Image src={protfolio10} alt={protfolio10} />
                    </div>
                </div>
            </div>
        </div>
    )
    }