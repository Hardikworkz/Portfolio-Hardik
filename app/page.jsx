import "./portfolio.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuGithub , LuLinkedin} from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
 import { MdLocalPhone } from "react-icons/md";
import { PiFileCppFill , PiFileSqlFill} from "react-icons/pi";
import { SiCodingninjas } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { BiLogoKubernetes } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
 import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaPython , FaReact, FaNode} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiDjango } from "react-icons/di";
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
            Detail-oriented Software Engineer Intern with strong foundations in computer science, data structures,
algorithms, and cloud-based application development. Hands-on experience building scalable backend systems,
SQL-driven applications, and cloud-deployed services using AWS, Docker, and CI/CD pipelines. Proven ability
to collaborate effectively in agile team environments, solve complex technical problems, and deliver secure,
performance-optimized, customer-focused software solutions.
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
              Software Engineer · MERN-Stack · AL/ML-Focused · DevOps 
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
              <span className="chip"><BiLogoTypescript />DJango</span>
             
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
              <span className="chip"><FaDocker />Docker</span>
              <span className="chip"><BiLogoKubernetes/>Kubernetes</span>
              <span className="chip"><FaAws/>Aws</span>
              
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
              <div className="flex items-center mb-2 gap-4"> <h3>Agri-Support · Full-Stack AI Platform</h3>
             <a href="https://github.com/Hardikworkz/Agri-Support"> 
                <LuGithub /> </a> </div>
              <p> 
               Engineered a distributed backend with event-driven microservices across 10+ services; made deliberate architectural choices around routing and data flow that improved system scalability and deployment speed by 20%.
Improved prediction accuracy by 18% and cut API response time by 32% through PostgreSQL query optimization and efficient data transformation pipelines — direct impact of algorithmic decisions on quality and latency. Configured AWS CI/CD pipelines for automated multi-environment rollouts, reducing deployment overhead and enabling fast iteration cycles.

              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-2 gap-4"> <h3>BreatheWise · AI-Driven Air Quality Analytics</h3>
             <a className="cursor-pointer" href="https://github.com/Hardikworkz/BreathWise"> 
                <LuGithub /> </a> </div>
              
              <p>
               Built and maintained REST API endpoints handling real-time data ingestion from multiple external sources using async workflows and concurrent call patterns. Integrated an LLM-backed conversational assistant using LangChain and OpenAI API as a standalone inference workflow, reducing information lookup time by 40%. Implemented JWT-based role-aware authentication with 99% uptime, ensuring data integrity and clean access control across user types.
              </p>
            </div>
          </section>

          {/* Work */}
          <section className="section">
            <h2 className="section-title">Work Experience</h2>

            <div className="card">
              <h3>Rookus.in</h3>
              <div className="flex justify-between"><h4>Software Developer Intern </h4>
              <span className="badge">May 2025 – July 2025</span>
              </div>
              <p>
            Architected and optimized a React-based analytics dashboard using memoization and efficient state management, significantly 
reducing unnecessary re-renders and improving UI responsiveness.
 Designed clean, maintainable REST API endpoints in Node.js with integrated logging and performance metrics, following industry 
best practices for modular, async-safe backend code.
 Reduced server load by 57% by redesigning API call patterns and implementing intelligent caching strategies, directly improving 
system reliability and uptime.
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
