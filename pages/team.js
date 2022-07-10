import teams from "../styles/team.module.css"
import Image from "next/image";
import { useEffect } from "react";
import team1 from "../public/team/team-1.jpg";
import team2 from "../public/team/team-2.jpg";
import team3 from "../public/team/team-3.jpg";
import team4 from "../public/team/team-4.jpg";
import team5 from "../public/team/team-5.jpg";
import team6 from "../public/team/team-6.jpg";

export default function Team() {
return (
    <div className="container">
        <div className={teams.boxs}>
            <div className={teams.box}>
                <div className={teams.images}>
                    <Image src={team1} alt={team1} />
                    <div className={teams.info}>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    </div>
                    <h1>Sarah Jhonson</h1>
                    <pre>PRODUCT MANAGER</pre>
                    <p>Aspernatur iste esse aliquam enim et corporis. Molestiae voluptatem aut eligendi quis aut. Libero vel amet voluptatem eos rerum non doloremque. Dolores eum non.</p>
            </div>

            <div className={teams.box}>
                <div className={teams.images}>
                    <Image src={team2} alt={team1} />
                    <div className={teams.info}>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    </div>
                    <h1>William Anderson</h1>
                    <pre>cto</pre>
                    <p>Ut enim possimus nihil cupiditate beatae. Veniam facere quae non qui necessitatibus rerum eos vero. Maxime sit sunt quo dolor autem est qui quaerat aliquid. Tenetur possimus qui enim..</p>
            </div>
            <div className={teams.box}>
                <div className={teams.images}>
                    <Image src={team3} alt={team1} />
                    <div className={teams.info}>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    </div>
                    <h1>Amanda Jepson</h1>
                    <pre>ACCOUNTANT</pre>
                    <p>Sint qui cupiditate. Asperiores fugit impedit aspernatur et mollitia. Molestiae qui placeat labore assumenda id qui nesciunt quo reprehenderit. Rem dolores similique quis soluta culpa enim quia ratione ea.</p>
            </div>

            <div className={teams.box}>
                <div className={teams.images}>
                    <Image src={team4} alt={team1} />
                    <div className={teams.info}>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    </div>
                    <h1>Niall Katz</h1>
                    <pre>MARKETING</pre>
                    <p>Aut ex esse explicabo quia harum ea accusamus excepturi. Temporibus at quia quisquam veritatis impedit. Porro laborum voluptatum sed necessitatibus a saepe. Deserunt laborum quasi consequatur voluptatum iusto sint qui fuga vel. Enim eveniet sed quibusdam rerum in. Non dicta architecto consequatur quo praesentium nesciunt.</p>
            </div>

            <div className={teams.box}>
                <div className={teams.images}>
                    <Image src={team5} alt={team1} />
                    <div className={teams.info}>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    </div>
                    <h1>Demi Lewis</h1>
                    <pre>FINANCING</pre>
                    <p>Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p>
            </div>

            <div className={teams.box}>
                <div className={teams.images}>
                    <Image src={team6} alt={team1} />
                        <div className={teams.info}>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <h1>Demi Lewis</h1>
                    <pre>FINANCING</pre>
                    <p>Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in.</p>
            </div>
        </div>
    </div>
)
}