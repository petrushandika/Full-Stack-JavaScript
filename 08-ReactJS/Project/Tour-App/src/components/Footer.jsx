import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHours={openHours} closeHours={closeHours} />
      ) : (
        <p>Sorry, we are currently closed.</p>
      )}
    </footer>
  );
};

export default Footer;
