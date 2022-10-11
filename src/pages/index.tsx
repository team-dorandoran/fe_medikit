import Button from 'components/common/Button'
import { example } from 'components/common/Cards/constants'
import QaCardList from 'components/common/Cards/QaCardList'
import FloatingBtn from 'components/common/FloatingBtn'
import CustomModal from 'components/common/Modal'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button>primary</Button>
      <Button sizes="sm" color="secondary">
        secodary
      </Button>
      <Button sizes="lg" outlined={true}>
        outlined
      </Button>
      <Button onClick={handleOpen}>Open modal</Button>
      <CustomModal open={open} handleClose={handleClose}>
        asdfdsa
      </CustomModal>
      <QaCardList qaList={example} />
      <FloatingBtn />
    </div>
  )
}

export default Home
