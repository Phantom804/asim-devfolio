import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import styles from "./Profiles.module.scss";

const Profiles = () => {
  return (
    <div className={styles.profile}>
      <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="link"
        rel="noreferrer"
        target="_blank"
        aria-label="mail">
        <HiOutlineMail />
      </a>
      <a href={process.env.NEXT_PUBLIC_LINKDIN_URL} className="link"
        rel="noreferrer"
        target="_blank"
        aria-label="linkedin">
        <FiLinkedin />
      </a>
      <a href={process.env.NEXT_PUBLIC_GITHUB_URL} className="link"
        rel="noreferrer"
        target="_blank"
        aria-label="github">
        <FiGithub />
      </a>
      <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} className="link"
        rel="noreferrer"
        target="_blank"
        aria-label="Instagram" >
        <BsInstagram />
      </a>
      <a href={process.env.NEXT_PUBLIC_X_URL} className="link"
        rel="noreferrer"
        target="_blank"
        aria-label="TwitterX">
        <BsTwitterX />
      </a>
    </div>
  );
};

export default Profiles;
