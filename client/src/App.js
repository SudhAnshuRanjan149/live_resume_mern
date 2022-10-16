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
      heading: "TCS",
      subHeading: "ASE trainee",
      more_info_list: ["info1", "info2"],
      item_details_list: [
        "item1 sbadjshdb jhsdbdsbd nbsdvjhsdb hsdbjhsdbsd nbhvsdfnjsbd hjsdfhsdb",
        "item2 bvsbsdv jhbsajhsbd bjshbdsabd bvsdjhcbsd bgjshdbgsjhd vbjhsdbjsh bvsjhdgfjs bjhsgbdfjsbd bsjhbgsd.",
      ],
      links: {
        code: "https://github.com/SudhAnshuRanjan149",
        live: "https://github.com/SudhAnshuRanjan149",
      },
    },
    {
      heading: "TCS",
      subHeading: "ASE trainee",
      more_info_list: ["info1", "info2"],
      item_details_list: [
        "item1 sbadjshdb jhsdbdsbd nbsdvjhsdb hsdbjhsdbsd nbhvsdfnjsbd hjsdfhsdb",
        "item2 bvsbsdv jhbsajhsbd bjshbdsabd bvsdjhcbsd bgjshdbgsjhd vbjhsdbjsh bvsjhdgfjs bjhsgbdfjsbd bsjhbgsd.",
      ],
      links: {
        code: "https://github.com/SudhAnshuRanjan149",
        live: "https://github.com/SudhAnshuRanjan149",
      },
    },
  ],
};
const experience_data = {
  title: "Experience",
  list: [
    {
      heading: "TCS",
      subHeading: "ASE trainee",
      more_info_list: ["info1", "info2"],
      item_details_list: [
        "item1 sbadjshdb jhsdbdsbd nbsdvjhsdb hsdbjhsdbsd nbhvsdfnjsbd hjsdfhsdb",
        "item2 bvsbsdv jhbsajhsbd bjshbdsabd bvsdjhcbsd bgjshdbgsjhd vbjhsdbjsh bvsjhdgfjs bjhsgbdfjsbd bsjhbgsd.",
      ],
    },
    {
      heading: "TCS",
      subHeading: "ASE trainee",
      more_info_list: ["info1", "info2"],
      item_details_list: [
        "item1 sbadjshdb jhsdbdsbd nbsdvjhsdb hsdbjhsdbsd nbhvsdfnjsbd hjsdfhsdb",
        "item2 bvsbsdv jhbsajhsbd bjshbdsabd bvsdjhcbsd bgjshdbgsjhd vbjhsdbjsh bvsjhdgfjs bjhsgbdfjsbd bsjhbgsd.",
      ],
    },
  ],
};
const publication_data = {
  title: "Publications",
  list: [
    {
      heading: "TCS",
      subHeading: "ASE trainee",
      more_info_list: ["info1", "info2"],
      item_details_list: [
        "item1 sbadjshdb jhsdbdsbd nbsdvjhsdb hsdbjhsdbsd nbhvsdfnjsbd hjsdfhsdb",
        "item2 bvsbsdv jhbsajhsbd bjshbdsabd bvsdjhcbsd bgjshdbgsjhd vbjhsdbjsh bvsjhdgfjs bjhsgbdfjsbd bsjhbgsd.",
      ],
      links: {
        code: "https://github.com/SudhAnshuRanjan149",
        live: "https://github.com/SudhAnshuRanjan149",
      },
    },
    {
      heading: "TCS",
      subHeading: "ASE trainee",
      more_info_list: ["info1", "info2"],
      item_details_list: [
        "item1 sbadjshdb jhsdbdsbd nbsdvjhsdb hsdbjhsdbsd nbhvsdfnjsbd hjsdfhsdb",
        "item2 bvsbsdv jhbsajhsbd bjshbdsabd bvsdjhcbsd bgjshdbgsjhd vbjhsdbjsh bvsjhdgfjs bjhsgbdfjsbd bsjhbgsd.",
      ],
      links: {
        code: "https://github.com/SudhAnshuRanjan149",
        live: "https://github.com/SudhAnshuRanjan149",
      },
    },
  ],
};

function App() {

	const componentRef = useRef();
  return (
    <div className="Resume-container" id="resume-container" ref={componentRef}>
      <Header />

      <div className="resume-body">
        <div className="sidebar">
          <Education />
          <Skills />
          <Links />
        </div>
        <div className="rest-body">
          <div className="body_add_icon">
            <Icon_btns Icon={<icons.AddIcon />} />
          </div>

          <Section section_data={experience_data} />
          <Section section_data={self_project_data} />
          <Section section_data={publication_data} last={true} />
        </div>
      </div>

      <div className="resume-footer">
		<Footer compRef={componentRef}/>
	  </div>
    </div>
  );
}

export default App;
