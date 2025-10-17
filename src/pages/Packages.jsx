import { Card } from "../components/Card";
import designImage from "../assets/design-plan.jpg";
import vrImage from "../assets/vr-plan.jpg";

export const Packages = () => {
  return (
    <section className="Packages">
      <h1 className="Packages-title">Nuestros Planes</h1>
      <p className="Packages-subtitle">
        Elige el plan perfecto para tus necesidades.
        Todos nuestros equipos son de última generación y están listos para usar.
      </p>

      <div className="Packages-container">
        <Card title="Plan Estudiantil de Diseño" value="$9" image={designImage}>
          <ul className="Card-list">
            <li>✔ Laptop de gama media-alta</li>
            <li>✔ Licencia de Adobe Creative Cloud incluida</li>
            <li>✔ Tarjeta gráfica dedicada</li>
            <li>✔ SSD para rendimiento rápido</li>
          </ul>
          <button className="Card-button">+ Agregar al Carrito</button>
        </Card>

        <Card title="Plan de Realidad Virtual" value="$20" image={vrImage}>
          <ul className="Card-list">
            <li>✔ Kit de realidad virtual completo</li>
            <li>✔ Auriculares, controladores y sensores</li>
            <li>✔ Juegos y experiencias preinstaladas</li>
            <li>✔ Laptop compatible con requisitos de RV</li>
          </ul>
          <button className="Card-button">+ Agregar al Carrito</button>
        </Card>
      </div>
    </section>
  );
};
