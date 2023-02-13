const Section = ({ children, text }) => {
  return (
    <section className="section">
      <h2 className="subtitle">{text}</h2>
      {children}
    </section>
  );
};

export default Section;
