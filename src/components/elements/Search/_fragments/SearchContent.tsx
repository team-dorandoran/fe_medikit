import { IconCloseGray, IconSearch, IconBack } from 'assets/svg'
import Col from 'components/common/_Grid/Col'
import { styled } from 'styles/globalStitches'

import RecentKeyWords from './RecentKeyWords'
import TrendKeyWords from './TrendKeyWords'

const SearchContent = () => {
  return (
    <>
      <SearchBarWrapper>
        <IconBack data-back />
        <SearchInput placeholder="어떻게 아프신가요?" />
        <IconCloseGray data-closeGray />
        <IconSearch data-search />
      </SearchBarWrapper>
      <Wrapper>
        <RecentKeyWords />
        <TrendKeyWords />
      </Wrapper>
    </>
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
  padding: '16px 20px 16px 60px',
  borderBottom: '1px solid $GRAY2',
  background: '$white',

  ['& [data-back]']: {
    position: 'absolute',
    left: '35px',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
  ['& [data-closeGray]']: {
    position: 'absolute',
    right: '60px',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
  ['& [data-search]']: {
    position: 'absolute',
    right: '25px',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
})

const SearchInput = styled('input', {
  width: '100%',
  height: '100%',
  border: 'none',
})
