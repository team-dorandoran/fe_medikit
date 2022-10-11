import Row from 'components/common/_Grid/Row'

import styles from './BoardHeader.module.scss'

interface BoardHeaderProps {
  title?: string
}

const BoardHeader = ({ title }: BoardHeaderProps) => {
  return (
    <Row className={styles.wrapper}>
      <button></button>
      <h1>{title}</h1>
    </Row>
  )
}

export default BoardHeader
