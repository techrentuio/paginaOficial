import { Laptop, Leaf, Users, Globe } from "lucide-react";
import missionImg from "../assets/mission.jpg"; // Pon tus imágenes reales
import visionImg from "../assets/vision.jpg";
import devicesImg from "../assets/devices.jpg";

export const Contacts = () => {
  return (
    <section className="Contacts">
      {/* Hero Section */}
      <section className="Contacts-hero">
        <h2 className="Contacts-hero--h1">Sobre Nosotros</h2>
        <p className="Contacts-hero--p">
          Revolucionando el acceso a la tecnología a través de soluciones sostenibles y accesibles para todos
        </p>
      </section>

      {/* Main Content */}
      <main className="Contacts-main">
        {/* Qué es Tech Rent */}
        <section className="Contacts-infoTech">
          <div className="Contacts-infoTech-text">
            <h2>¿Qué es Tech Rent?</h2>
            <p>
              Tech Rent es un servicio innovador que ofrece el alquiler de dispositivos electrónicos y tecnológicos, como laptops, tabletas, drones, consolas de videojuegos, impresoras 3D, entre otros.
            </p>
            <p>
              La idea detrás de nuestro servicio es proporcionar acceso temporal a dispositivos sin comprarlos, útil para proyectos, pruebas o quienes desean tecnología de vanguardia sin los altos costos.
            </p>
            <div className="Contacts-infoTech-features">
              <div className="feature">
                <Laptop size={20} />
                <span>Planes accesibles</span>
              </div>
              <div className="feature">
                <Leaf size={20} />
                <span>Sostenible</span>
              </div>
            </div>
          </div>
          <div className="Contacts-infoTech-img">
            <img src={devicesImg} alt="Dispositivos tecnológicos" className="Contacts-infoTech-img--img"/>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="Contacts-missionVision">
          <div className="mission">
            <img src={missionImg} alt="Misión" className="Contacts-missionVision-img"/>
            <div className="text">
              <Users size={24} />
              <h3>Misión</h3>
              <p>
                Nuestra misión es que cualquier persona, sin importar ubicación o recursos, pueda acceder a la tecnología más reciente de manera asequible y ecológica.
              </p>
            </div>
          </div>
          <div className="vision">
            <img src={visionImg} alt="Visión" className="Contacts-missionVision-img"/>
            <div className="text">
              <Leaf size={24} />
              <h3>Visión</h3>
              <p>
                Nuestra visión es liderar la revolución tecnológica hacia la sostenibilidad y la accesibilidad para todos, reduciendo la brecha digital y promoviendo la economía circular.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="Contacts-values">
          {[
            { icon: Globe, title: "Accesibilidad", desc: "Tecnología para todos sin importar su ubicación o recursos" },
            { icon: Leaf, title: "Sostenibilidad", desc: "Reducimos la contaminación electrónica y promovemos el consumo responsable" },
            { icon: Users, title: "Inclusión", desc: "Trabajamos para cerrar la brecha digital en todas las comunidades" },
          ].map((value, i) => (
            <div key={i} className="value-card">
              <value.icon size={32} />
              <h4>{value.title}</h4>
              <p>{value.desc}</p>
            </div>
          ))}
        </section>
      </main>
            {/* Footer */}
      <footer className="Contacts-footer">
        © 2025 Tech Rent.
      </footer>
    </section>
  );
};
