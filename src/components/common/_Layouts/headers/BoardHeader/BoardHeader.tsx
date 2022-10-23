import { styled } from 'styles/globalStitches'
import { useRouter } from 'next/router'

import IconBack from 'assets/svg/iconBack.svg'
interface BoardHeaderProps {
  title?: string
}

const BoardHeader = ({ title }: BoardHeaderProps) => {
  const router = useRouter()

  return (
    <Wrapper>
      <button onClick={() => router.back()}>
        <IconBack />
      </button>
      <h1>{title}</h1>
    </Wrapper>
  )
}

export default BoardHeader

const Wrapper = styled('header', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '57px',

  ['button']: {
    position: 'absolute',
    top: '50%',
    left: '20px',
    background: 'transparent',
    border: 'none',
    padding: '0px',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  },

  ['h1']: {
    fontSize: '$H4',
  },
})
