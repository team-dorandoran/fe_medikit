import Button from "components/common/Button";
import styles from "./HomeHeader.module.scss";

const HomeHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>logo</div>
      <Button className={styles.loginBtn}>로그인</Button>
    </div>
  );
};

export default HomeHeader;
