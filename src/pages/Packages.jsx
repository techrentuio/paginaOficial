import { Card } from "../components/Card";
import ps5Image from "../assets/funcion.png"; 
export const Packages = () => {
  return (
    <section className="Packages">
       <Card title="Entretenimiento" value="9.99">
        <img 
          src={ps5Image} 
          alt="PlayStation 5" 
          className="Card-image" 
        /> 
        <p>Work in progress</p> 
      </Card>
   
      <Card title="Innovador" value="8.99">Work in progress</Card>
      <Card title="Desarrollador" value="6.99">Work in progress</Card>
    </section>
  );
};
