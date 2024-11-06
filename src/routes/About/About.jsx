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
        className="about-container w-full max-sm:h-[140vh] pt-28 max-sm:pt-12"
        id="about"
      >
        <div className="about-header mb-10 mt-10 text-3xl text-center">
          <h2>About Me</h2>
        </div>
        <div className="section-container w-[90%] flex justify-items-center items-center gap-6 max-sm:flex-col">
          <div className="image-side w-2/6 max-sm:hidden">
            <Image ImgIcon={ImgIcon} />
          </div>
          <div className="eduction-center w-2/6 max-sm:w-full">
            <h2 className="education-header text-center mb-10 text-2xl">
              Education
            </h2>
            {list.map((item) => (
              <AboutList item={item} key={item.id} />
            ))}
          </div>
          <div className="experience-side w-2/6 max-sm:w-full">
            <h2 className="experience-header text-2xl mb-10 text-center">
              Experience
            </h2>
            {jobs.map((job) => (
              <JobsList job={job} key={job.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
