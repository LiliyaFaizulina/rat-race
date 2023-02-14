const Section = ({ children, text, mainColor }) => {
  return (
    <section className="section">
      <h2 className={`subtitle has-text-${mainColor}-dark`}>{text}</h2>
      {children}
    </section>
  );
};

export default Section;
