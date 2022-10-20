// LOCAL
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Links from "./components/Links/Links";
import Section from "./components/Section/Section";
import Icon_btns from "./components/ui_components/Buttons/icon_btns/Icon_btns";
import { icons } from "./Assets/icons";

// CSS
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";

const self_project_data = {
  title: "Projects",
  list: [
    {
      heading: "Youtube Clone Application",
      subHeading: "",
      more_info_list: ["Frontend project deployed on Netlify", "Sep-22"],
      item_details_list: [
        "Tech Stack: React | CSS | RapidAPI",
        "Fully responsive, work on all types of devices, supports 500 req/day.",
        "Have used react-reusable components strategy and have integrated search feature with Home,Channel and Video page.",
      ],
      links: {
        code: "https://github.com/SudhAnshuRanjan149/react_youtube_clone",
        live: "https://youtube-clone-sudhanshu.netlify.app/",
      },
    },
    {
      heading: "Resume Application",
      subHeading: "",
      more_info_list: ["Frontend project deployed on Netlify", "Oct-22"],
      item_details_list: [
        "Tech Stack: React | CSS",
        "Future goal: Develop a Full stack Application where we can edit our details by login to our account and share the link to the world.",
        "Future Technologies: ExpressJs | NodeJS | MongoDB | JWT-Auth | BcryptJs",
      ],
      links: {
        code: "https://github.com/SudhAnshuRanjan149/live_resume_mern",
        live: "https://sudhanshu-ranjan-resume.netlify.app/",
      },
    },
  ],
};
const experience_data = {
  title: "Experience",
  list: [
    {
      heading: "TCS",
      subHeading: "Assistant System Engineer",
      more_info_list: [
        "Full Stack Web Developer",
        "Aug 2021-Present",
        "1Year+ Exp.",
      ],
      item_details_list: [
        "Tech Stack : React | Redux | Express | PostgreSQL | SCSS | JMeter | DotNet Web-API",
        "Extensively  worked on frontend and developed 3 Applications and many UI pages using React js.",
        "Developed many react-reusable components that can be directly used in any new application. It has improved our developement time by 50% and reduced code size by 1/3rd.",
        "Have also worked on few backend application , written many APIs in express,dotnet and written many DB functions using PL/PGSQL.",
        "Developed a Live-Streaming-Service using react,express,socket.io and apache-kafka. Developed and implemented the architecture from scratch to serve the live data on our web-application.",
      ],
    },
  ],
};
const publication_data = {
  title: "Publications",
  list: [
    {
      heading: "Date Range Selector For React",
      subHeading: "",
      more_info_list: ["React UI package available on npmjs.com", "Aug-22"],
      item_details_list: [
        "Tech Stack: React | CSS",
        "More than 1000 downloads till date.",
        "Written from scratch, have zero dev and prod dependency.",
      ],
      links: {
        code: "https://github.com/SudhAnshuRanjan149/new-React-Date-Range-Selector",
        live: "https://www.npmjs.com/package/date-range-selector-for-react",
      },
    },
    {
      heading: "A simple chrome theme extension",
      subHeading: "",
      more_info_list: ["Available on chrome web store", "Sep-22"],
      item_details_list: [
        "Tech Stack: HTML | CSS | JavaScript",
        "Have an beautiful UI with integrated analog watch, also new qoutes and wallpaper on each new tab on every page refresh.",
      ],
      links: {
        code: "https://github.com/SudhAnshuRanjan149/vanila_js_projects/tree/master/chrome_theme",
        live: "https://chrome.google.com/webstore/detail/a-simple-chrome-theme/dpniiegmilafcplcdpabdcledeofncmf?hl=en&authuser=0",
      },
    },
  ],
};

function App() {
  const componentRef = useRef();
  return (
    <>
      <div
        className="Resume-container"
        id="resume-container"
        ref={componentRef}
      >
        <Header />

        <div className="resume-body">
          <div className="sidebar">
            <Education />
            <Skills />
            <Links />
          </div>
          <div className="rest-body">
            {/* <div className="body_add_icon">
              <Icon_btns Icon={<icons.AddIcon />} toolTip="Add New" />
            </div> */}

            <Section section_data={experience_data} />
            <Section section_data={self_project_data} />
            <Section section_data={publication_data} last={true} />
          </div>
        </div>

        <div className="resume-footer">
          <Footer compRef={componentRef} />
        </div>
      </div>
    </>
  );
}

export default App;
