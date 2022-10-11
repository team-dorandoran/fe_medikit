import Link from 'next/link'

import Row from 'components/common/_Grid/Row'

import { styled } from 'styles/globalStitches'

import Logo from 'assets/svg/logo.svg'

const HomeHeader = () => {
  return (
    <Wrapper>
      <Logo />
      <Link href="/signin">로그인</Link>
    </Wrapper>
  )
}

const Wrapper = styled(Row, {
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '60px',
})

export default HomeHeader
