import "./portfolio.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuGithub , LuLinkedin} from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FaHtml5 } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { PiFileCppFill , PiFileSqlFill} from "react-icons/pi";
import { SiCodingninjas } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaPython , FaReact, FaNode} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
export default function Portfolio() {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <a className="username " href="mailto:workzhardik@gmail.com">@hardiklalwani</a>

        <div className="header-actions">
          <a className="icon-btn" 
          href="https://github.com/Hardikworkz"
          ><LuGithub /></a>
          <a className="icon-btn" 
          href= "https://www.linkedin.com/in/hardiklalwani/"
          ><LuLinkedin /></a>
          <a className="icon-btn"
          href="mailto:workzhardik@gmail.com"
          ><HiOutlineMail /></a>
          <button className="icon-btn"
          href="tel:+919669898720"
          ><MdLocalPhone /></button>
        </div>
      </header>

      {/* Layout */}
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3 className="sidebar-title">Hardik Lalwani</h3>
          <p className="sidebar-desc">
            I’m Hardik Lalwani, a MERN-Stack and ML-driven systems developer with expertise in building scalable, high-performance web applications. With a strong foundation in both front-end and back-end development, I specialize in creating dynamic user experiences and optimizing performance across various platforms.
          </p>
        </aside>

        {/* Main */}
        <main className="content">
          {/* Hero */}
          <section className="section">
            <h1 className="hero-title">
              Building Scalable Full-Stack & AI-Driven Systems.
            </h1>
            <p className="hero-subtitle">
              Software Engineer · MERN-Stack · ML-Focused
            </p>

            <div className="hero-meta">
              <a className="primary-btn" href="mailto:workzhardik@gmail.com">
                <IoMdCheckmarkCircleOutline />
                Hire Me</a>

              <div className="meta-block">
                <strong >900+</strong>
                <span>DSA Problems Solved</span>
              </div>

              <div className="meta-block">
                <strong>Narmadapuram, MP 🇮🇳</strong>
                <span>Location</span>
              </div>
            </div>
            <div className="h-[1px] bg-[#313131] mt-5 "></div>
          </section>

       

          {/* Tech Stack */}
          <section className="section">
            <h2 className="section-title"> Tech Stack</h2>

            <div className="tech-grid">
              <span className="chip"><PiFileCppFill />C++</span>
              <span className="chip"><FaPython />Python</span>
              <span className="chip"><IoLogoJavascript />JavaScript</span>
              <span className="chip"><BiLogoTypescript />TypeScript</span>
             
              <span className="chip"><FaGolang />GoLang</span>
              <span className="chip"><PiFileSqlFill />SQL</span>
              <span className="chip"><FaReact />React </span>
               <span className="chip"><BiLogoPostgresql />PostgreSQL</span>
              <span className="chip"><RiNextjsFill />Next </span>
              <span className="chip"><FaNode />Node </span>
              <span className="chip"><SiMongodb />MongoDB</span>
              
              <span className="chip"><FaGitAlt />Git</span>
              <span className="chip"><SiExpress />Express</span>
              <span className="chip"> 
                <LuGithub />GitHub</span>
              <span className="chip"><SiTailwindcss />Tailwind </span>
              <span 
              className="chip"><SiTensorflow />TensorFlow</span>
              <span className="chip"><SiScikitlearn />scikit-learn</span>
              <span className="chip"><SiNumpy />Numpy</span>
              {/* <span className="chip"> <FaHtml5 />HTML</span>
              <span className="chip"> <IoLogoCss3 />CSS</span> */}
            </div>
          </section>
          <section className="section">
          <h2 className="section-title">Coding Profile</h2>

          <div className="coding-card">
            {/* LeetCode */}
            <div className="coding-row">
              <div className="coding-left">
                <SiLeetcode />
                <a
                  href=" https://leetcode.com/u/basic_IQ/ "
                  target="_blank"
                  rel="noreferrer"
                  className="coding-link"
                >
                  @hardiklalwani
                </a>
              </div>
            </div>

            <div className="coding-divider" />

            {/* GeeksforGeeks */}
            <div className="coding-row">
              <div className="coding-left">
                <SiGeeksforgeeks />

                <a
                  href="https://www.geeksforgeeks.org/profile/lhardicn9v"
                  target="_blank"
                  rel="noreferrer"
                  className="coding-link"
                >
                  @hardikLalwani
                </a>
              </div>
            </div>
    
    <div className="coding-divider" />
            <div className="coding-row">
              <div className="coding-left">
                <SiCodingninjas />
                <a
                  href="https://www.naukri.com/code360/profile/c8222219-ff67-4e2f-a979-64caff1e79bd"
                  target="_blank"
                  rel="noreferrer"
                  className="coding-link"
                >
                  @hardikLalwani
                </a>
              </div>
            </div>
          </div>
        </section>


          {/* Projects */}
          <section className="section">
            <h2 className="section-title">Projects</h2>

            <div className="card">
              <h3>Agri-Support · Full-Stack AI Platform</h3>
              <p>
                Designed and implemented an AI-assisted decision-support backend that ingests real-time weather data via external APIs, processes it through AI-driven recommendation logic, and exposes optimized endpoints powering a conversational chatbot for non-technical users, while refactoring database queries and data pipelines to reduce API response latency by 25% and improve recommendation accuracy and user engagement by 25%.

              </p>
            </div>

            <div className="card">
              <h3>BreatheWise · AI-Driven Air Quality Analytics</h3>
              <p>
               Designed and deployed a hyperlocal air-quality monitoring and prediction system by engineering SQL-based data pipelines to aggregate traffic, satellite, and weather data, training and serving ensemble ML models (XGBoost, LSTM), and exposing the models through scalable REST APIs, resulting in an 18% improvement in smog hotspot prediction accuracy and a 32% reduction in end-to-end prediction latency.

              </p>
            </div>
          </section>

          {/* Work */}
          <section className="section">
            <h2 className="section-title">Work Experience</h2>

            <div className="card">
              <h3>Rookus.in</h3>
              <div className="flex justify-between"><h4>Software Developer Intern </h4>
              <span className="badge">June 2025 – July 2025</span>
              </div>
              <p>
               Designed and implemented scalable full-stack features across internal and client-facing platforms, optimizing analytics dashboards through memoization and component-level splitting to reduce unnecessary re-renders, while engineering a secure authentication layer using JWT, bcrypt, and role-based access control and tuning indexed database queries, resulting in a 40% reduction in unauthorized access and measurable backend performance gains.

              </p>
            </div>
          </section>

        

          {/* Contact */}
          <section className="section">
          <h2 className="section-title">Contact</h2>

          <div className="contact-card">
            <p className="contact-text">
              Best way to reach me is through:{" "}
              <a
                href="mailto:workzhardik@gmail.com"
                className="contact-link"
              >
                workzhardik@gmail.com
              </a>
            </p>
          </div>
        </section>

        </main>
      </div>
    </div>
  );
}
