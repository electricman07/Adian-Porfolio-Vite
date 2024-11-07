function Button({ CV, buttonName, classList, buttonImage }) {
  return (
    <a href={CV} className={classList}>
      <span style={{ marginRight: "2px" }}>{buttonName}</span>
      <span style={{ fontSize: "1.5rem" }}> {buttonImage}</span>
    </a>
  );
}

export default Button;
