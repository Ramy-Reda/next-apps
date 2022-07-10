import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import home from '../styles/Home.module.css';
import Image from 'next/image'
import features_1 from "../public/features-1.svg";
import features_2 from "../public/features-2.svg";
import features_3 from "../public/features-3.svg";
import features_4 from "../public/features-4.svg";

export default function Home() {
  const boxs = useRef();
  const right = useRef();
  const left = useRef();
  const anmi1 = useRef();
  const anmi2 = useRef();
  console.log("hassan");
  useEffect(() =>{
    const boxsArray = Array.from(boxs.current.children);
    const anim1Array = Array.from(anmi1.current.children)
    const counterSlide = 0;
    right.current.addEventListener("click", () =>{
      if (counterSlide === boxsArray.length - 1) {
        right.current.classList.add(home.dispald);
      } else {
        counterSlide++;
        right.current.classList.remove(home.dispald);
      }
      addActive()
    })
    left.current.addEventListener("click", () =>{
      if (counterSlide === 0) {
        left.current.classList.add(home.dispald);
      } else {
        counterSlide--;
        right.current.classList.remove(home.dispald);
      }
      addActive()
    })
    const addActive = () => {
      removeAllClasses()
      boxsArray[counterSlide].classList.add(home.active);
    }
    const removeAllClasses = () => {
      boxsArray.forEach((child) => {
        child.classList.remove(home.active);
      })
    }
    window.onscroll = () => {
      if (window.scrollY >= anmi1.current.offsetTop -230) {
        anim1Array.forEach(child => {
          child.style.opacity = 1 ;
          child.style.marginTop = 0 ; 
        })
      }
      if (window.scrollY >= anmi2.current.offsetTop - 290) {
        anmi2.current.style.marginTop = 50 + "px" ;
        anmi2.current.style.opacity = 1;
      }
    }
  })
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="index home" content="width=device-width, initial-" />
      </Head>
        <div  ref={boxs} className={home.container_slide}>
            <div className={home.active}>
              <h1 className={home.home_h1}>Welcome to Moderna</h1>
              <p className={home.home_p}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus </p>
              <button className={home.home_button}>Read more</button>
            </div>
            <div >
              <h1 className={home.home_h1}>Lorem Ipsum Dolor</h1>
              <p className={home.home_p}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus .</p>
              <button className={home.home_button}>Read more</button>
            </div>
            <div >
              <h1  className={home.home_h1}>Sequi ea ut et est quaerat</h1>
              <p className={home.home_p}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus .</p>
              <button className={home.home_button}>Read more</button>
            </div>
        </div>
        <h2 ref = {right}  className={home.home_right}>{">"}</h2>
        <h2 ref = {left}  className={home.home_left}>{"<"}</h2>
        <div className= "container">
        <div ref={anmi1} className={home.row}>
        <div  className={home.items}>
            <p className={home.icon}>
            <i className="fa-brands fa-dribbble"></i>
                </p>  
                <h3>
                  Lorem Ipsum 
                </h3>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>

              <div  className={home.items}>
                <p className={home.icon}>
                  <i className="fa-solid fa-file-lines"></i>
                </p>
                <h3>
                  Lorem Ipsum 
                </h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </p>
              </div>

              <div  className={home.items}>
                <p className={home.icon}>
                  <i className="fa-solid fa-gauge"></i>
                </p>
                <h3>
                  Lorem Ipsum 
                </h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>

              <div  className={home.items}>
                <p className={home.icon}>
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
        <div className="container">
          <div ref={anmi2} className={home.section}>
            <div className={home.frame}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PQ400g7tGg0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className={home.desc}>
              <div className={home.box}>
                <p className={home.icons}> <i className="fa-solid fa-fingerprint"></i> </p>
                <div className={home.body}>
                  <h2 className={home.title}>LOREM IPSUM</h2>
                  <p className={home.item}> 
                    Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>

              <div className={home.box}>
                <p className={home.icons}><i className="fa-solid fa-gift"></i> </p>
                <div className={home.body}>
                  <h2 className={home.title}>LOREM IPSUM</h2>
                  <p className={home.item}> 
                    Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className={home.header}>
            <div className={home.title}> features </div>
            <div className={home.describe}>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </div>
          </div>
          <div className={home.features}>
            <Image  src={features_1} alt="" />
            <section className={home.sections}>
              <p className={home.descT}>
              Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
              </p>
              <p className={home.descC1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <article className={home.descLi}>
                <p className={home.rell}>
                  <span><i className="fa-solid fa-check-double"></i></span> Ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.</p>
                <p className={home.rell}>
                  <span><i className="fa-solid fa-check-double"></i></span> Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
              </article>
            </section>
            <section className={home.sections}>
              <p className={home.descT}>
              Corporis temporibus maiores providen
              </p>
              <p className={home.descC1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <article className={home.descLi}>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </article>
            </section>
            <Image  src={features_2} alt="" />
            <Image  src={features_3} alt="" />
            <section className={home.sections}>
              <p className={home.descT}>
              Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas              
              </p>
              <p className={home.descC1}>
              Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.
              </p>
              <article className={home.descLi}>
                <p className={home.rell}>
                  <span><i className="fa-solid fa-check-double"></i></span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className={home.rell}>
                  <span><i className="fa-solid fa-check-double"></i></span> Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
                <p className={home.rell}>
                    <span><i className="fa-solid fa-check-double"></i></span> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.
                </p>
              </article>
            </section>
            
            
            <section className={home.sections}>
              <p className={home.descT}>
              Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in              
              </p>
              <p className={home.descC1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className={home.descLi}>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </section>
            <Image  src={features_4} alt="" /> 
        </div>
    </div>
    </div>

  )
}