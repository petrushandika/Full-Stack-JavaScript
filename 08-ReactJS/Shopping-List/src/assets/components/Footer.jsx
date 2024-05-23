import "../styles/Footer.css";

const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const persentage = (numPacked / numItems) * 100;
  return (
    <div className="footer">
      {persentage === 100
        ? "Shopping Done"
        : `Total Item: ${numItems} Completed Item: ${numPacked} ${persentage}%`}
    </div>
  );
};

export default Footer;
