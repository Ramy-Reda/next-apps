import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import about from '../styles/about.module.css';
import discription from '../public/about.jpg';
import slider1 from "../public/testimonials/testimonials-1.jpg";
import slider2 from "../public/testimonials/testimonials-2.jpg";
import slider3 from "../public/testimonials/testimonials-3.jpg";
import slider4 from "../public/testimonials/testimonials-4.jpg";
import slider5 from "../public/testimonials/testimonials-5.jpg";

export default function About() {
    const description = useRef();
    const loading= useRef(true);
    const count= useRef();
    const progress = useRef();
    const prog1 = useRef();
    const prog2 = useRef();
    const prog3 = useRef();
    const prog4 = useRef();
    const slider = useRef();
    const list = useRef();
    const right = useRef();
    const left = useRef();
    const [checker, setChecker] = useState(true);
    useEffect(() => {
        if (loading) {
            description.current.style.marginTop = '0px';
            description.current.style.opacity = 1;
        }
        
        window.onscroll = () => {
            if (window.scrollY >= progress.current.offsetTop - 200) {
                prog1.current.style.width = prog1.current.dataset.goal;
                prog2.current.style.width = prog2.current.dataset.goal;
                prog3.current.style.width = prog3.current.dataset.goal;
                prog4.current.style.width = prog4.current.dataset.goal;
            }
        }
        const sliderArray = Array.from(slider.current.children);
        const sliderLength = sliderArray.length;
        let sliderCount = 1;
        const createUL = document.createElement('ul');
        createUL.setAttribute("class", about.spans);
        createUL.setAttribute("id", "list");
        for (let index = 0; index <= sliderLength; index++) {
            const creatLI = document.createElement("li");
            creatLI.setAttribute("data-index", index);
            createUL.appendChild(creatLI);
        }

        right.current.addEventListener("click", () => {
            if (sliderCount == sliderLength) {
                false;
            } else {
                sliderCount ++;
                check();
            }
        })

        left.current.addEventListener("click", () => {
            if (sliderCount == 1) {
                false
            } else {
                sliderCount --;
                check();
            }
        })

        document.querySelector(".list-group").appendChild(createUL);
        const lis = document.querySelectorAll(".list-group #list li");
        const check = () => {
            sliderArray.forEach((child) => {
                child.classList.remove(about.active)
            })
            lis.forEach((li) => {
                li.style.backgroundColor = "transparent";
            });
            sliderArray[sliderCount -1].classList.add(about.active);
            lis[sliderCount -1].style.backgroundColor = "#777";

        }
        check();

        const lisArray = Array.from(lis);
        

        if (checker) {
            var interval = setInterval(() => {
                sliderCount ++;
                check();
                if (sliderCount === sliderLength) {
                    setChecker(false);
                }
            }, 5000)
            
        }
        return () => clearInterval(interval);

    }, [checker])


    
    return (
        <div className="container-fluid">
            <div className="container-fluid"> 
                <div className={about.navbar}>
                    <h2>About Us</h2>
                    <div className={about.link}>
                        <Link href="/">Home</Link>
                        /
                        <h3>About</h3>
                    </div>
                </div>
            </div>
            {/* End navbar */}

            {/* Start Description */}
                <div className="container">
                    <div ref={description} className={about.description}>
                        <Image src={discription} alt="" />
                        <div className={about.disc}>
                            <h5>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h5>
                            <p>AboutLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>
                            <i className="fa-solid fa-check-double"></i> <span>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </span>
                            </p>

                            <p>
                            <i className="fa-solid fa-check-double"></i> <span>
                                Duis aute irure dolor in reprehenderit in voluptate velit.
                            </span>
                            </p>

                            <p>
                            <i className="fa-solid fa-check-double"></i> <span>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur
                            </span>
                            </p>

                            <p className={about.foot}>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            {/* End description */}

            {/* Start Counter */}
            <div className={about.counter}>
                    <div ref={count} className={about.nums}>
                        <h2 data-counternum={234}>234</h2>
                        <h2 data-counternum={521}>521</h2>
                        <h2 data-counternum={1463}>1463</h2>
                        <h2 data-counternum={15}>15</h2>
                    </div>
                    <div className={about.name}>
                        <h3>cleints</h3>
                        <h3>Projects</h3>
                        <h3>Hours Of Support</h3>
                        <h3>Hard Workers</h3>
                    </div>
                </div>
            {/* End Counter */}

        {/* start Progress */}

        <div className="container-fluid">
                <div className={about.header}>
                    <div className={about.title}> Skills </div>
                    <div className={about.describe}>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas..
                    </div>
                </div>
                <div className="container">
                    <div ref={progress} className= {about.progres}>
                        <div className={about.prog1}>
                            <span ref={prog1}  data-goal="90%">HTML</span>
                        </div>
                        <div className={about.prog2}>
                            <span ref={prog2}  data-goal="85%">css</span>
                        </div>
                        <div className={about.prog3}>
                            <span ref={prog3}  data-goal="75%">JavaScript</span>
                        </div>
                        <div className={about.prog4}>
                            <span  ref={prog4} data-goal="60%">React</span>
                        </div>
                    </div>    
                </div>
            </div>

            {/* End Progress */}

            {/* Start slider */}
            <div className="container">
                    <div className={about.titleSlide}>
                        <div className={about.header}>
                        <div className={about.title}> Team </div>
                        <div className={about.describe}>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas..
                        </div>
                    </div>
                </div>
                    <div ref={slider} className={about.slider}>
                        <section>
                            <div className={about.boxSlide}>
                                <Image className={about.img} src={slider1} alt={slider1} />
                                <p className={about.name}>3bd Elslame</p>
                                <p className={about.jop}>ceo & founder</p>
                                <p className={about.desc}>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className={about.boxSlide}>
                                <Image className={about.img} src={slider2} alt={slider2}/>
                                <p className={about.name}>3bd Elslame</p>
                                <p className={about.jop}>ceo & founder</p>
                                <p className={about.desc}>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className={about.boxSlide}>
                                <Image className={about.img} src={slider3} alt={slider3}/>
                                <p className={about.name}>3bd Elslame</p>
                                <p className={about.jop}>ceo & founder</p>
                                <p className={about.desc}>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas
                                </p>
                            </div>
                        </section>
                        <section>
                            <div className={about.boxSlide}>
                                <Image className={about.img} src={slider4} alt={slider4}/>
                                <p className={about.name}>3bd Elslame</p>
                                <p className={about.jop}>ceo & founder</p>
                                <p className={about.desc}>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas
                                </p>
                            </div>
                        </section>
                        
                        <section>
                            <div className={about.boxSlide}>
                                <Image className={about.img} src={slider5} alt={slider5}/>
                                <p className={about.name}>3bd Elslame</p>
                                <p className={about.jop}>ceo & founder</p>
                                <p className={about.desc}>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas
                                </p>
                            </div>
                        </section>
                        <div className={about.trends}>
                            <p ref={right} className={about.right}>&gt;</p>
                            <p ref={left} className={about.left}>&lt;</p>
                        </div>
                    </div>
                    <div ref={list} className="list-group">
                        <ul className="list-group"></ul>
                    </div>
                </div>
            {/* Start slider */}
        </div>
    )
}
