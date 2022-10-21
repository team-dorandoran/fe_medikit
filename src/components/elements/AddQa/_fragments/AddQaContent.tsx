import { ChangeEvent, useState } from 'react'

import Col from 'components/common/_Grid/Col'

import Button from 'components/common/Button'
import { styled } from 'styles/globalStitches'
import Text from 'components/common/Text'
import CategoryDrawer from './CategoryDrawer'
import IconCaret from 'assets/svg/iconCaret.svg'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Box } from '@mui/material'

const AddQaContent = () => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('')
  const [openDrawer, setOpenDrawer] = useState(false)
  const handleChange = (
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
    <Col>
      <ContentWrapper>
        <TitleInput
          placeholder="증상을 한 문장으로 요약해 주세요"
          data-subject="title"
          value={title}
          onChange={handleChange}
        />
        <ContentArea
          placeholder="증상을 자세히 작성해 주세요"
          data-subject="content"
          value={content}
          onChange={handleChange}
        />
      </ContentWrapper>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="bottom"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={20}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            top: '-20px',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
        </Box>
        <SelectionBox>
          <Col>
            <Text weight="bold">아픈 부위</Text>
            <CategoryBtn onClick={() => setOpen(true)}>
              {category}
              <IconCaret />
            </CategoryBtn>
          </Col>
          <Col css={{ marginBottom: '40px' }}>
            <Text weight="bold">태그</Text>
            <TagInput type="text" />
          </Col>
        </SelectionBox>
        <CategoryDrawer
          setCategory={setCategory}
          open={open}
          setOpen={setOpen}
        />
      </SwipeableDrawer>

      <Button
        css={{
          width: 'calc(100% - 40px)',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '70px',
        }}
        color="secondary"
        radii="round"
      >
        질문 올리기
      </Button>
    </Col>
  )
}

export default AddQaContent

// STYLE ///////////////////

const ContentWrapper = styled(Col, {
  height: '45vh',

  ['& input']: {
    color: '$secondary_text',
    border: 'none',
    backgroundColor: 'transparent',
  },
})

const SelectionBox = styled(Col, {
  position: 'fixed',
  left: '0',
  bottom: '20px',
  width: '100%',
  backgroundColor: '$white',
  gap: '24px',
  padding: '24px 20px 0',

  ['& span']: {
    marginBottom: '6px',
  },

  ['& button']: {
    display: 'flex',
    border: '1px solid $GRAY2',
  },
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

const CategoryBtn = styled('button', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: '$secondary_text',
  height: '48px',
  padding: '12px 16px',

  ['& svg']: {
    position: 'absolute',
    right: '12px',
    rotate: '270deg',
  },
})

const TagInput = styled('input', {
  border: 'solid 1px $GRAY6',
  height: '47px',
  padding: '12px 16px',
  borderRadius: '4px',
})

const Puller = styled(Box, {
  width: '30px',
  height: '3px',
  backgroundColor: 'grey',
  borderRadius: '3px',
  position: 'absolute',
  top: '8px',
  left: 'calc(50% - 15px)',
})
