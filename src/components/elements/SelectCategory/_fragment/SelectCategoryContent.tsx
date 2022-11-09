import Button from 'components/common/Button'
import Text from 'components/common/Text'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import TagBox from 'components/elements/AddQa/_fragments/TagBox'
import { useState } from 'react'
import { styled } from 'styles/globalStitches'
import PainSpotList from './PainSpotList'

const SelectCategoryContent = () => {
  const [open, setOpen] = useState(false)

  const handleFocus = () => {
    setOpen(true)
  }
  const handleBlur = () => {
    setOpen(false)
  }

  const handleFinish = () => {
    console.log('finish')
  }

  return (
    <SelectionBox>
      <Col css={{ position: 'relative' }}>
        <Text weight="bold">아픈 부위</Text>
        <CategoryWrapper onFocus={handleFocus} onBlur={handleBlur} />
        <PainSpotList open={open} />
      </Col>
      <Col css={{ marginBottom: '40px' }}>
        <Text weight="bold">태그</Text>
        <TagBox />
      </Col>
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
          onClick={handleFinish}
          css={{
            width: '100%',
            flex: 1,
          }}
          color="secondary"
        >
          작성 완료
        </Button>
      </Row>
    </SelectionBox>
  )
}

export default SelectCategoryContent

//STYLE ////////////////////////////////////

const SelectionBox = styled(Col, {
  flex: '1',
  width: '100%',
  height: '100%',
  backgroundColor: '$white',
  gap: '24px',
  padding: '24px 20px 0',
})

const CategoryWrapper = styled('input', {
  width: '100%',
  marginTop: '6px',
  minHeight: '47px',
  border: '1px solid $GRAY2',
  borderRadius: '4px',
  gap: '2px',
  padding: '12px 16px',
  fontSize: '15px',
  cursor: 'pointer',
})
