import { styled } from 'styles/globalStitches'
import IconSearch from 'assets/svg/iconSearch.svg'

const SearchBar = () => {
  const InputWrapper = styled('div', {
    position: 'relative',
    width: '100%',
  })

  const Input = styled('input', {
    width: '100%',
    padding: '9px 20px',
    borderRadius: '20px',
    border: '1px solid $primary',
  })

  const CustomIconSearch = styled(IconSearch, {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  })

  return (
    <InputWrapper>
      <Input placeholder="어떻게 아프신가요?" />
      <CustomIconSearch />
    </InputWrapper>
  )
}

export default SearchBar
