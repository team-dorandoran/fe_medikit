import { Card, CardContent, Stack } from '@mui/material';
import { styled } from 'styles/globalStitches';
import Text from '../Text';
import Row from '../_Grid/Row';


export interface QaCardProps {
  category: string;
  question: string;
  answer: string;
  answerNum: string;
  likes: string;
}

const QaCard = ({ category, question, answer, answerNum, likes }: QaCardProps) => {
  return (
    <Card style={{ boxShadow: 'none' }}>
      <CardContent style={{ width: '100%' }}>
        <Stack spacing={'20px'}>
          <Category>{category}</Category>
          <Question>Q <Text size='body1' weight='semiBold'>{question}</Text></Question>
          <Answer>A  <Text size='body1'>{answer}</Text></Answer>
          <Row>
            <Row>
              <div>1</div>
              <Text color='secondary' size='body2'>{answerNum}</Text>
            </Row>
            <Row>
              <div>2</div>
              <Text color='secondary' size='body2'>{likes}</Text>
            </Row>
          </Row>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default QaCard;

const Category = styled('span', {

})

const Question = styled('div', {})

const Answer = styled('div', {})
