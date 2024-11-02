function JobsList({ job }) {
  return (
    <div className="experience-item mt-2.5" key={job.id}>
      <h3 className="jobs-workplace m-3">{job.workplace}</h3>
      <h4 className="jobs-title mx-3">{job.title}</h4>
      <h4 className="jobs-year mx-3">{job.year}</h4>
      <p className="jobs-desc mx-3">{job.desc}</p>
    </div>
  );
}

export default JobsList;
