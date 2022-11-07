import Button from 'components/common/Button'
import { example } from 'components/common/Cards/constants'
import QaCardList from 'components/common/Cards/QaCardList'
import FloatingBtn from 'components/common/FloatingBtn'
import SearchBar from 'components/common/Input'
import { styled } from 'styles/globalStitches'

const HomePageContent = () => {
  return (
    <Wrapper>
      <SearchBar />
      <QaWrapper>
        <QaCardList qaList={example} />
      </QaWrapper>
      <Button
        css={{ marginTop: '10px' }}
        sizes="md"
        radii="round"
        color="secondary"
      >
        추천 메디킷 더보기
      </Button>
      <FloatingBtnWrapper>
        <FloatingBtn />
      </FloatingBtnWrapper>
    </Wrapper>
  )
}

export default HomePageContent

// STYLE ///////////////////

const Wrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

const QaWrapper = styled('div', {
  width: '100%',
  marginTop: '28px',
})

const FloatingBtnWrapper = styled('div', {
  '& button': {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
  },
})
