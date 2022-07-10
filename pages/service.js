import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import service from "../styles/service.module.css";
import service1 from "../public/service-details-1.jpg";
import service2 from "../public/service-details-2.jpg";
import service3 from "../public/service-details-3.jpg";
import service4 from "../public/service-details-4.jpg";

export default function Service() {
    const anmi1 = useRef();
    const anmi2 = useRef();
    const [load, setLoad] = useState(false);
    useEffect(() => {
        const anim1Array = Array.from(anmi1.current.children)
            setLoad(true);
            if (load) {
                anim1Array.forEach(child => {
                child.style.opacity = 1 ;
                child.style.marginTop = 0 ; 
            })
        }

        window.onscroll = () => {
        if (window.scrollY >= anmi2.current.offsetTop - 300) {
            anmi2.current.style.marginTop = 50 + "px" ;
            anmi2.current.style.opacity = 1;
        }
        }
    });

    return (
        <div className="container-fluid">
            <div className={service.navAbout}>
                <h2>About Us</h2>
                <p>
                    <Link href="/">Home</Link> / <span>Service</span> 
                </p>
            </div>
            {/* Start Discription */}
            <div className= "container">
            <div ref={anmi1} className={service.row}>
                <div  className={service.items}>
                    <p className={service.icon}>
                    <i className="fa-brands fa-dribbble"></i>
                        </p>  
                        <h3>
                        Lorem Ipsum 
                        </h3>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                        </p>
                    </div>

                    <div  className={service.items}>
                        <p className={service.icon}>
                        <i className="fa-solid fa-file-lines"></i>
                        </p>
                        <h3>
                        Lorem Ipsum 
                        </h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        </p>
                    </div>

                <div  className={service.items}>
                    <p className={service.icon}>
                    <i className="fa-solid fa-gauge"></i>
                    </p>
                    <h3>
                    Lorem Ipsum 
                    </h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>

                <div  className={service.items}>
                    <p className={service.icon}>
                    <i className="fa-solid fa-earth-americas"></i>
                    </p>
                    <h3>
                    Lorem Ipsum 
                    </h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                </div>
            </div>
            </div>
            {/* End Discription */}

            {/* Start Frams */}
                <div className="container">
            <div ref={anmi2} className={service.section}>
                {/* <div className={service.frame}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PQ400g7tGg0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> */}
                <div className={service.desc}>
                <div className={service.box}>
                    <p className={service.icons}> <i className="fa-solid fa-fingerprint"></i> </p>
                    <div className={service.body}>
                    <h2 className={service.title}>LOREM IPSUM</h2>
                    <p className={service.item}> 
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                    </p>
                    </div>
                </div>

                <div className={service.box}>
                    <p className={service.icons}><i className="fa-solid fa-gift"></i> </p>
                    <div className={service.body}>
                    <h2 className={service.title}>LOREM IPSUM</h2>
                    <p className={service.item}> 
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                    </p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            {/* End Frams */}

            {/* start images */}

            < div  className="container">
                <div className={service.hassan}>
                <section className={service.images}>
                    <Image className={service.img} src={service1} alt={service1}/>

                    <div className={service.box}>
                        <h5>Our Vision</h5>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>

                        <span>READ MORE</span>
                    </div>
                </section>
                <section className={service.images}>
                    <Image src={service2} alt={service2}/>

                    <div className={service.box}>
                        <h5>Our Care</h5>
                        <p>Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut</p>

                        <span>READ MORE</span>
                    </div>
                </section>
                <section className={service.images}>
                    <Image src={service3} alt={service3}/>

                    <div className={service.box}>
                        <h5>Our Plane</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>

                        <span>READ MORE</span>
                    </div>
                </section>
                <section className={service.images}>
                    <Image src={service4} alt={service4}/>

                    <div className={service.box}>
                        <h5>Our Mision</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        <span>READ MORE</span>
                    </div>
                </section>
                </div>
            </div>

            {/* End images */}


            {/* Start Pricing */}
                <div className={service.all}>
                    <div className="container">
                        <section className={service.pric}>
                        <div className={service.header}>
                        <div className={service.title}> Pricing </div>
                            <div className={service.describe}>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                            </div>
                        </div>

                        <div className={service.desc}>
                            <div className={service.box}>
                                <h2>Free</h2>
                                <h1>$0</h1>
                                <p>per month</p>
                                <ul>
                                    <li>Quam adipiscing vitae proin</li>
                                    <li> Nec feugiat nisl pretium</li>
                                    <li> Nulla at volutpat diam uteera</li>
                                    <li style={{textDecoration: "line-through"}}> Pharetra massa massa ultricies</li>
                                    <li  style={{textDecoration: "line-through"}}> Massa ultricies mi quis hendrerit</li>
                                </ul>

                                <button>Get Started</button>
                            </div>

                            <div className={`${service.box} ${service.box2}`}>
                                <h2>Business</h2>
                                <h1>$29</h1>
                                <p>per month</p>
                                <ul>
                                    <li> Quam adipiscing vitae proin</li>
                                    <li>Nec feugiat nisl pretium</li>
                                    <li>Nulla at volutpat diam uteera</li>
                                    <li>Nulla at volutpat diam uteera</li>
                                    <li> Massa ultricies mi quis hendrerit</li>
                                </ul>

                                <button style={{background: "#68a4c4"}}>Get Started</button>
                            </div>

                            <div className={service.box}>
                                <h2>Developer</h2>
                                <h1>$49</h1>
                                <p>per month</p>
                                <ul>
                                    <li> Quam adipiscing vitae proin</li>
                                    <li> Nec feugiat nisl pretium</li>
                                    <li> Nulla at volutpat diam uteera</li>
                                    <li> Pharetra massa massa ultricies</li>
                                    <li> Massa ultricies mi quis hendrerit</li>
                                </ul>

                                <button>Get Started</button>
                            </div>
                        </div>
                        </section>
                    </div>
                </div>
            {/* End pricing */}
        </div>
    )
    }