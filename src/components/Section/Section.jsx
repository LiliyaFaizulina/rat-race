const Section = ({ children, text, mainColor }) => {
  return (
    <section className="section">
      <div className="container is-max-desktop">
        <h2 className={`subtitle has-text-${mainColor}-dark`}>{text}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
