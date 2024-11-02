function AboutList({ item }) {
  //   const { id, school, year, award, desc } = item;

  return (
    <div className="education-item mt-2.5" key={item.id}>
      <h3 className="school-title">{item.school}</h3>
      <h4 className="school-year">{item.year}</h4>
      <h4 className="school-award">{item.award}</h4>
      <p className="school-desc">{item.desc}</p>
    </div>
  );
}

export default AboutList;
