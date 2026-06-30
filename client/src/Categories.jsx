import "./Categories.css";

import sneakers from "../assets/categories/sneakers.jpg";
import boots from "../assets/categories/boots.jpg";
import formal from "../assets/categories/formal.jpg";
import running from "../assets/categories/running.jpg";
import oxford from "../assets/categories/oxford.jpg";
import sports from "../assets/categories/sports.jpg";
import loafers from "../assets/categories/loafers.jpg";
import heels from "../assets/categories/heels.jpg";

const categories = [
  {
    id:1,
    title:"Sneakers",
    image:sneakers
  },
  {
    id:2,
    title:"Boots",
    image:boots
  },
  {
    id:3,
    title:"Formal",
    image:formal
  },
  {
    id:4,
    title:"Running",
    image:running
  },
  {
    id:5,
    title:"Oxford",
    image:oxford
  },
  {
    id:6,
    title:"Sports",
    image:sports
  },
  {
    id:7,
    title:"Loafers",
    image:loafers
  },
  {
    id:8,
    title:"Heels",
    image:heels
  }
];

export default function Categories(){

    return(

        <section className="categories-page">

            <div className="container">

                <h1 className="page-title">
                    All Categories
                </h1>

                <div className="categories-grid">

                    {categories.map((item)=>(
                        <div
                        key={item.id}
                        className="category-card">

                            <div className="category-image">

                                <img
                                src={item.image}
                                alt={item.title}
                                />

                            </div>

                            <h3>{item.title}</h3>

                        </div>
                    ))}

                </div>

            </div>

        </section>

    )
}