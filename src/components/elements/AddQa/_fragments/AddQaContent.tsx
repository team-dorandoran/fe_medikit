import { ChangeEvent, useState } from 'react'

import Col from 'components/common/_Grid/Col'

import Button from 'components/common/Button'
import { styled } from 'styles/globalStitches'
import Text from 'components/common/Text'
import CategoryDrawer from './CategoryDrawer'
import IconCaret from 'assets/svg/iconCaret.svg'
import { Box } from '@mui/material'
import TagBox from './TagBox'
import Row from 'components/common/_Grid/Row'

const AddQaContent = () => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('')
  const [openDrawer, setOpenDrawer] = useState(true)

  const handleChangeContent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { subject } = e.currentTarget.dataset
    subject === 'title' && setTitle(e.currentTarget.value)
    subject === 'content' && setContent(e.currentTarget.value)
  }

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen)
  }

  return (
    <Col css={{ height: '100%' }}>
      <ContentWrapper>
        <TitleInput
          placeholder="증상을 한 문장으로 요약해 주세요"
          data-subject="title"
          value={title}
          onChange={handleChangeContent}
        />
        <ContentArea
          placeholder="증상을 자세히 작성해 주세요"
          data-subject="content"
          value={content}
          onChange={handleChangeContent}
        />
      </ContentWrapper>
      <SelectionBox>
        <Col>
          <Text weight="bold">아픈 부위</Text>
          <CategoryWrapper />
        </Col>
        <Col css={{ marginBottom: '40px' }}>
          <Text weight="bold">태그</Text>
          <TagBox />
        </Col>
      </SelectionBox>
      <Row
        css={{
          width: '100%',
          position: 'absolute',
          left: '50%',
          gap: '12px',
          transform: 'translateX(-50%)',
          bottom: '0',
          padding: '12px 6px',
        }}
      >
        <Button
          css={{
            width: '100%',
            flex: 1,
          }}
          color="tertiary"
        >
          임시 저장
        </Button>
        <Button
          css={{
            width: '100%',
            flex: 1,
          }}
          color="secondary"
        >
          작성 완료
        </Button>
      </Row>
      <CategoryDrawer setCategory={setCategory} open={open} setOpen={setOpen} />
    </Col>
  )
}

export default AddQaContent

// STYLE ///////////////////

const ContentWrapper = styled(Col, {
  height: '45vh',
  padding: '24px 20px 0 20px',
  ['& input']: {
    color: '$secondary_text',
    border: 'none',
    backgroundColor: 'transparent',
  },
})

const SelectionBox = styled(Col, {
  flex: '1',
  width: '100%',
  height: '100%',
  backgroundColor: '$white',
  gap: '24px',
  padding: '24px 20px 0',
})

const TitleInput = styled('textarea', {
  fontSize: '$H4',
  fontWeight: '$bold',
  marginBottom: '20px',
  backgroundColor: 'transparent',
  resize: 'none',
  border: 'none',
})

const ContentArea = styled('textarea', {
  flexGrow: 1,
  height: '100%',
  fontSize: '$BODY1',
  fontFamily: 'Pretandard',
  backgroundColor: 'transparent',
  resize: 'none',
  border: 'none',
})

const CategoryWrapper = styled(Row, {
  width: '100%',
  marginTop: '6px',
  minHeight: '47px',
  border: '1px solid $GRAY2',
  borderRadius: '4px',
  gap: '2px',
  padding: '12px 16px',
  fontSize: '15px',
})
