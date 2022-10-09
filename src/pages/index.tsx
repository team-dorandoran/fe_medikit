import Button from 'components/common/Button'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <div>
      <Button>primary</Button>
      <Button sizes='sm' color='secondary'>secodary</Button>
      <Button sizes='lg' outlined={true}>outlined</Button>
    </div>
  )
}

export default Home
