import BoardHeader from '../../headers/HomeHeader/HomeHeader'
import styles from './BoardLayout.module.scss'

interface HomeLayoutProps {
  header?: JSX.Element
  footer?: JSX.Element
  content?: JSX.Element
}

const BoardLayout = ({
  //
  header,
  footer,
  content,
}: HomeLayoutProps) => {
  return (
    <>
      {header}
      <div className={styles.contentWrapper}>{content}</div>
      {footer}
    </>
  )
}

export default BoardLayout
