import Link from "next/link";
import footer from '../styles/footer.module.css';

function Footer (){
    return (
    <footer className={footer["container-fluid", "footer"]}>
        <hr />
        <div className="container">
            <div className={footer.top}>
                <div className={footer.title}>
                    <h1>Newsletter</h1>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                </div>
                <div className={footer.letter}>
                    <input type="text" className={footer.input} />
                    <button className={footer.btn}>subscribe</button>
                </div>
            </div>
            <div className={footer.bottom}>
                <ul className={footer["list1", "list"]}> 
                <h2>Useful Links</h2>
                    <li>
                        <i className="fa-solid fa-angles-right"></i>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-angles-right"></i>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-angles-right"></i>
                        <Link href="/service">Service</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-angles-right"></i>
                        <Link href="/team">Teams</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-angles-right"></i>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-angles-right"></i>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-angles-right"></i>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>

                <ul className={footer["list2", "list"]}>
                    <h2>Our Services</h2>
                    <li><i className="fa-solid fa-angles-right"></i>web design</li>
                    <li><i className="fa-solid fa-angles-right"></i>front-end development</li>
                    <li><i className="fa-solid fa-angles-right"></i> marketing</li>
                    <li><i className="fa-solid fa-angles-right"></i>Javascript</li>
                    <li><i className="fa-solid fa-angles-right"></i>React</li>
                </ul>

                <ul className={footer["list3", "list"]}>
                    <h2>Contact Us</h2>
                    <li>Ramy reda</li>
                    <li>Alsa3ala Snblawin daqhlia</li>
                    <li>Egypte</li>

                    <li>01025066564</li>
                    <li>ramyreda88809@gmail.com</li>
                </ul>

                <ul className={footer["list4", "list"]}>
                    <h2>About Moderna</h2>
                    <li>
                        Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.
                    </li>
                    <div className={footer.social}>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-solid fa-envelope"></i>
                        <i className="fa-brands fa-whatsapp-square"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </ul>
            </div>
            <div className={footer.end}>
                © Copyright Ramy. All Rights Reserved
                    Designed by Eng/Ramy_Reda
            </div>
        </div>
    </footer>
    )
}

export default Footer