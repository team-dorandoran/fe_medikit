/* eslint-disable object-shorthand */
import { ButtonBase } from '@mui/material';
import { styled } from 'styles/globalStitches';




const Button = styled(ButtonBase, {
  variants: {
    color: {
      primary: { backgroundColor: '$primary_btn', color: '$white' },
      secondary: {
        backgroundColor: '$GRAY3', color: '$white'
      },
    },
    sizes: {
      sm: { padding: '12px 20px' },
      md: { padding: '16px 24px' },
      lg: { padding: '18px 24px' },
    },
    radii: {
      rect: { borderRadius: '4px' },
      round: { borderRadius: '30px' }
    },
    outlined: { true: { border: 'solid 1px black', color: '$primary_text', backgroundColor: 'transparent' } },
  },
  defaultVariants: {
    color: 'primary',
    radii: 'rect',
    sizes: 'md'
  }
})



export default Button;
