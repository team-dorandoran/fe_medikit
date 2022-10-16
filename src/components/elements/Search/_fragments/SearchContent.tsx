import Col from 'components/common/_Grid/Col'
import { styled } from 'styles/globalStitches'
import RecentKeyWords from './RecentKeyWords'
import TrendKeyWords from './TrendKeyWords'
import IconBack from 'assets/svg/iconBack.svg'

const SearchContent = () => {
  return (
    <Wrapper>
      <SearchBarWrapper>
        <IconBack />
        <SearchInput placeholder="어떻게 아프신가요?" />
      </SearchBarWrapper>
      <RecentKeyWords />
      <TrendKeyWords />
    </Wrapper>
  )
}

export default SearchContent

const Wrapper = styled(Col, {
  padding: '20px',
})

const SearchBarWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  height: '57px',
  padding: '16px 48px',
  borderBottom: '1px solid $GRAY2',
  background: '$white',

  '& svg': {
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
})

const SearchInput = styled('input', {
  width: '100%',
  height: '100%',
  border: 'none',
})
