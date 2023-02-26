import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Card style={{ width: "60rem", margin: "5% auto" }}>
      <Card.Img
        variant="top"
        src="https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/294928850_452414430224238_3915722542966760327_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=y8b22JTfHM4AX90FGFG&_nc_ht=scontent.ftun6-1.fna&oh=00_AfB1Z9N0vknjhMpYGKYzJA07PqFvaWSPYslBhnP2xVE8mw&oe=640014F5"
      />
      <Card.Body>
        <Card.Title style={{ color: "darkmagenta" }}>
          Welcome to Zaytouna Store
        </Card.Title>
        <Card.Text>
          To access all products please click the button below
        </Card.Text>
        <Link to="/product">
          <Button variant="primary" style={{ width: "100%" }}>
            Products
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Home;
