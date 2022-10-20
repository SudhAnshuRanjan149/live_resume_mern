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
      more_info_list: ["Frontend project deployed on Netlify", "Oct-22"],
      item_details_list: [
        "Tech Stack: React, CSS, RapidAPIs",
        "Fully Responsive,work on all types of devices.",
        "Supports 500 req/day",
        "Have integrated search feature with Home,Channel and Videos page.",
        "Have used React reusable components strategy to develop all UI to reduce code size.",
        "Have feature to show related videos suggestions on video page.",
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
		  "Tech Stack: React, CSS, RapidAPIs",
		  "Future goal in this project: Develop a Full stack Application where we can Edit our details by login to our account and share the link with the world.",
		  "Future Technologies that will used here: ExpressJs,NodeJS,MongoDB,JWT-Auth,BcryptJs"
		],
		links: {
		  code: "https://github.com/SudhAnshuRanjan149/react_youtube_clone",
		  live: "https://youtube-clone-sudhanshu.netlify.app/",
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
        "Tech Stack : React | Redux | ExpressJs | PostgreSQL | SCSS | JMeter | DotNet Web-API",
        "Extensively  worked on FrontEnd and Developed 3-Applications from scratch and developed many UI using React js.",
        "Developed many react-reusable components that can be directly used inany new application that improved our developement time by 50% and reduced code size by 30-40%.",
        "Have also worked on few Backend Application where i have written many APIs in Express,Dotnet and and written many funtion using PL/PGSQL for our DB.",
        "Also worked for 2 months as an API load tester where i have written many scripts to test APIs using Jmeter.",
        "Developed an Live-Streaming-Service using React,NodeJs,Express and Apache-Kafka. Developed the whole application from scratch to serve the live data on our web-application.",
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
      more_info_list: ["React UI package published on npmjs.com", "Aug-22"],
      item_details_list: [
        "Tech Stack: React | CSS",
        "More than 1000 downloads till date",
        "Written from scratch, Have zero dev or prod dependencies",
      ],
      links: {
        code: "https://github.com/SudhAnshuRanjan149/new-React-Date-Range-Selector",
        live: "https://www.npmjs.com/package/date-range-selector-for-react",
      },
    },
    {
      heading: "A Simple Chrome theme extension",
      subHeading: "",
      more_info_list: ["Published on chrome web store", "Sep-22"],
      item_details_list: [
        "Tech Stack: HTML | CSS | JavaScript",
        "Have an beautiful UI with an analog watch with new qoutes and wallpaper on each new tab on every page refresh",
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
            <Skills />
            <Education />
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
