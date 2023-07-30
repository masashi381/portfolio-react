import { Link } from "react-router-dom";

export default function Sns(){
  return(
    <div>
    <p>Whether you want to get in touch,
       talk about a project collaboration, or just say hi,
        I'd love to hear from you. Simply fill the from and send me an email.
    </p>
    <div>
    <Link to="https://www.instagram.com/marcy.387" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
    <Link to="https://www.facebook.com/masashi.sawada.796/" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
    <Link to="https://github.com/masashi381" target="_blank"><i className="fa-brands fa-github"></i></Link>
    <Link to="https://www.linkedin.com/in/masashi-sawada-731705265/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
    <Link target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
    </div>
    </div>
  )
};