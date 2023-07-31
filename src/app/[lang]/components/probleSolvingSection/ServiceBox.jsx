import Styles from "./Services.module.css";

const ServiceBox = ({ text }) => {

  return (
    <div
      className={Styles.box}
    >
      <h2 className={Styles.header}>{text.header}</h2>
      <p className={Styles.info}>{text.info}</p>
      <p className={Styles.more}>More {`>`}</p>
    </div>
  );
};

export default ServiceBox;