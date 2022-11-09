import { Divider, List, ListItem } from '@mui/material'
import { styled } from 'styles/globalStitches'

interface PainSpotListProps {
  open: boolean
}

const PainSpotList = ({ open }: PainSpotListProps) => {
  return (
    <>
      {open && (
        <CustomList>
          <ListItem>1</ListItem>
          <Divider />
          <ListItem>1</ListItem>
          <Divider />
          <ListItem>1</ListItem>
        </CustomList>
      )}
    </>
  )
}

export default PainSpotList

const CustomList = styled(List, {
  position: 'absolute !important',
  top: '100%',
  left: '0',
  width: '100%',
  marginTop: '6px !important',
  backgroundColor: '$GRAY1',
  border: '1px solid $GRAY2',
  borderRadius: '4px',

  '& li': {
    height: '47px',
  },
})
