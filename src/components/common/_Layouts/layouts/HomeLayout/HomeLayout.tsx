import HomeHeader from "../../headers/HomeHeader/HomeHeader";
import styles from "./HomeLayout.module.scss";

interface HomeLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
}

const HomeLayout = ({
  //
  header = <HomeHeader />,
  footer,
  content,
}: HomeLayoutProps) => {
  return (
    <>
      {header}
      <div className={styles.contentWrapper}>{content}</div>
      {footer}
    </>
  );
};

export default HomeLayout;
