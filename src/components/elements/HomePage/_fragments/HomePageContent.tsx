import Button from 'components/common/Button'
import { example } from 'components/common/Cards/constants'
import QaCardList from 'components/common/Cards/QaCardList'
import SearchBar from 'components/common/Input'
import { styled } from 'styles/globalStitches'

import styles from './HomePageContent.module.scss'

const HomePageContent = () => {
  return (
    <div className={styles.wrapper}>
      <SearchBar />
      <QaWrapper>
        <QaCardList qaList={example} />
      </QaWrapper>
      <Button sizes="md" radii="round" color="tertiary">
        추천 메디킷 더보기
      </Button>
    </div>
  )
}

export default HomePageContent

const QaWrapper = styled('div', {
  width: '100%',
  marginTop: '28px',
})
