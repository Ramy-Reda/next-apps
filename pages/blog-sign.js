import React from 'react';
import blogsn from "../styles/blog-sign.module.css"
import Link from 'next/link';
import Image from 'next/image';
import sidebar1 from "../public/blog/blog-recent-1.jpg"
import sidebar2 from "../public/blog/blog-recent-2.jpg"
import sidebar3 from "../public/blog/blog-recent-3.jpg"
import sidebar4 from "../public/blog/blog-recent-4.jpg"
import sidebar5 from "../public/blog/blog-recent-5.jpg"
import blog1 from "../public/blog/blog-1.jpg"
import blog2 from "../public/blog/blog-inside-post.jpg"
const BlogSign = () => {
    return (
        <div className="container">
            <div className={blogsn.main}>
                <div className={blogsn.discription}>
                <div className={blogsn.disc}>
                            <div className={blogsn.img}>
                                <Image src={blog1} alt={blog1} />
                            </div>
                            <h2>Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</h2>
                            <div className={blogsn.icons}>
                                <span>
                                John Doe
                                </span>
                                <span>
                                Jan 1, 2020
                                </span>
                                <span>
                                    12 Comments
                                </span>
                            </div>
                            <p>Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit</p>
                            <button> Read More </button>
                        </div>
                        <div className={blogsn.disc}>
                            <div className={blogsn.img}>
                                <Image src={blog2} alt={blog2} />
                            </div>
                            <h2>Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.</h2>
                            <div className={blogsn.icons}>
                                <span>
                                John Doe
                                </span>
                                <span>
                                Jan 1, 2020
                                </span>
                                <span>
                                    12 Comments
                                </span>
                            </div>
                            <p>Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemot</p>
                            <button> Read More </button>
                        </div>
                </div>

                <div className={blogsn.sidebar}>
                        <h3>Search</h3>
                        <div className={blogsn.input}> 
                            <input type="text" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <div className={blogsn.gate}>
                            <h3> category </h3>
                            <p> General <span>(25)</span></p>
                            <p> Lifestyle <span>(12)</span></p>
                            <p> Travel <span></span>(5)</p>
                            <p> Designe <span>(22)</span></p>
                            <p> Travel <span></span>(8)</p>
                            <p> Educaion  <span></span>(14)</p>
                        </div>
                        <div className={blogsn.posts}>
                            <h3>Recent Posts</h3>
                            <div className={blogsn.post}>
                                <div className={blogsn.img}>
                                    <Image src={sidebar1} alt={sidebar1} />
                                </div>
                                <div className={blogsn.partan}>
                                    <Link href="/blog-sign">Et dolores corrupti quae illo quod dolor</Link>
                                    <p>jan 1, 2022</p>
                                </div>
                            </div>
                            <div className={blogsn.post}>
                                <div className={blogsn.img}>
                                    <Image src={sidebar2} alt={sidebar2} />
                                </div>
                                <div classNam={blogsn.partan}>
                                    <Link href="/blog-sign">Laborum corporis quo dara net para</Link>
                                    <p>jan 1, 2022</p>
                                </div>
                            </div>
                            <div className={blogsn.post}>
                                <div className={blogsn.img}>
                                    <Image src={sidebar3} alt={sidebar3} />
                                </div>
                                <div className={blogsn.partan}>
                                    <Link href="/blog-sign">Laborum corporis quo dara net para</Link>
                                    <p>jan 1, 2022</p>
                                </div>
                            </div>
                            <div className={blogsn.post}>
                                <div className={blogsn.img}>
                                    <Image src={sidebar4} alt={sidebar4} />
                                </div>
                                <div className={blogsn.partan}>
                                    <Link href="/blog-sign">Id quia et et ut maxime similique occaecati ut</Link>
                                    <p>jan 1, 2022</p>
                                </div>
                            </div>
                            <div className={blogsn.post}>
                                <div className={blogsn.img}>
                                    <Image src={sidebar5} alt={sidebar5} />
                                </div>
                                <div className={blogsn.partan}>
                                    <Link href="/blog-sign">Quidem autem et impedit</Link>
                                    <p>jan 1, 2022</p>
                                </div>
                            </div>
                        </div>
                        {/* Start taps */}

                        <div className={blogsn.taps}>
                            <h3>Tags</h3>
                            <div className={blogsn.tap}>
                                <p>it</p>
                                <p>app</p>
                                <p>Business</p>
                                <p>mac</p>
                                <p>design</p>
                                <p>office</p>
                                <p>creative</p>
                                <p>studio</p>
                                <p>tips</p>
                                <p>markting</p>
                            </div>
                        </div>

                        {/* End taps */}
                    </div>
            </div>
        </div>
    );
}

export default BlogSign;
