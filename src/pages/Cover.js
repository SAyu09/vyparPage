import styles from "./Cover.module.css";

const Cover = () => {
  return (
    <div className={styles.cover}>
      <img className={styles.coverImageIcon} alt="" src="/cover-image@2x.png" />
    </div>
  );
};

export default Cover;
