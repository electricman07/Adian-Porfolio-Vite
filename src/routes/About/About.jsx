import Image from "@/components/Image/Image";
import ImgIcon from "../../../public/assets/images/AdrianStandingNoBackground.png";
import AboutList from "../../components/AboutList/AboutList";
import education from "./items";

function About() {
  const list = education;

  return (
    <>
      <section
        className="about-container h-screen flex justify-items-center items-center"
        id="about"
      >
        <div className="image-side w-2/6">
          <Image ImgIcon={ImgIcon} />
        </div>
        <div className="eduction-center w-2/6">
          <h2 className="education-header  text-center mb-10 text-2xl">
            Education
          </h2>
          {list.map((item) => (
            <AboutList item={item} key={item.id} />
          ))}
        </div>
        <div className="experience-side w-2/6 text-2xl text-center">
          <h2 className="experience-header">Experience</h2>
        </div>
      </section>
    </>
  );
}

export default About;
