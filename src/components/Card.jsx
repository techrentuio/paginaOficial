export const Card = ({ title, value, children }) => {
  return (
    <section className="Card">
      <h2 className="Card-title">{title}</h2>
      <section className="Card-price">
        <h3 className="Card-price--value">
          {value}
          <span className="Card-price--span">/día</span>
        </h3>
      </section>
      <section className="Card-info">{children}</section>
    </section>
  );
};
