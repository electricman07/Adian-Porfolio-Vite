import Image from "@/components/Image/Image";
import ImgIcon from "/assets/images/AdrianStandingNoBackground.png";
import AboutList from "../../components/AboutList/AboutList";
import JobsList from "@/components/JobsList/JobsList";
import { education, experience } from "./items";

function About() {
  const list = education;
  const jobs = experience;

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
          <h2 className="education-header  text-center mb-10 text-3xl">
            Education
          </h2>
          {list.map((item) => (
            <AboutList item={item} key={item.id} />
          ))}
        </div>
        <div className="experience-side w-2/6">
          <h2 className="experience-header text-3xl text-center">Experience</h2>
          {jobs.map((job) => (
            <JobsList job={job} key={job.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
