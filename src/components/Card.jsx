export const Card = ({ title, value, children, image }) => {
  return (
    <section className="Card">
      <h2 className="Card-title">{title}</h2>

      <div className="Card-image-container">
        <img src={image} alt={title} className="Card-image" />
        <div className="Card-price-hover">
          <span className="Card-price-text">{value}/día</span>
        </div>
      </div>

      <section className="Card-info">{children}</section>
    </section>
  );
};
