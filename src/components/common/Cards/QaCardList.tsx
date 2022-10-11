import { Stack } from '@mui/system'
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

  return <Stack spacing={10}>{list}</Stack>
}

export default QaCardList