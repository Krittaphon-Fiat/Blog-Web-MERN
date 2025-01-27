import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="about">
      <div className="aboutItem">
        <span className="aboutTitle">ABOUT ME</span>

        <div className="aboutword">
        <p>
            Welcome to our blog! A space where knowledge, inspiration, and diverse experiences come together. 
        Whether you're looking for articles on technology, business, self-development, or the latest trends, 
        we have everything for you to explore.Here, we focus on sharing valuable and accessible content to 
        help you stay ahead in the digital world and embrace new ideas with easy-to-understand and practical articles.
        </p>
        </div>
      </div>
      <div className="aboutItem">
        <ul className="aboutList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="aboutListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="aboutItem">
        <span className="aboutTitle">FOLLOW US</span>
        <div className="aboutSocial">
          <i className="aboutIcon fab fa-facebook-square"></i>
          <i className="aboutIcon fab fa-twitter-square"></i>
          <i className="aboutIcon fab fa-pinterest-square"></i>
          <i className="aboutIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}