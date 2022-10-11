import { Stack } from '@mui/system'
import { styled } from 'styles/globalStitches'
import Text from '../Text'
import QaCard, { QaCardProps } from './QaCard'

interface QaCardListProps {
  qaList: QaCardProps[]
}

const QaCardList = ({ qaList }: QaCardListProps) => {
  const list = qaList.map(qa => (
    <QaCard
      key={qa.question + qa.answer}
      category={qa.category}
      question={qa.question}
      answer={qa.answer}
      answerNum={qa.answerNum}
      likes={qa.likes}
      isLiked={qa.isLiked}
    />
  ))

  return (
    <>
      <Title size="h2" weight="bold">
        추천 메디킷
      </Title>
      <Stack style={{ marginTop: '24px' }} spacing={'16px'}>
        {list}
      </Stack>
    </>
  )
}

export default QaCardList

// STYLE ////////////////////

const Title = styled(Text, {})
