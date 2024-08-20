const Order = ({ closeHours, openHours }) => {
  return (
    <div>
      <p>We are open from {openHours}:00 to {closeHours}:00</p>
      <button className="btn-order">Order</button>
    </div>
  );
};

export default Order;
