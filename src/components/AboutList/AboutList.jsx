function AboutList({ item }) {
  //   const { id, school, year, award, desc } = item;

  return (
    <div className="education-item mt-2.5" key={item.id}>
      <h3 className="school-title m-3">{item.school}</h3>
      <h4 className="school-year mx-3">{item.year}</h4>
      <h4 className="school-award mx-3">{item.award}</h4>
      <p className="school-desc mx-3">{item.desc}</p>
    </div>
  );
}

export default AboutList;
