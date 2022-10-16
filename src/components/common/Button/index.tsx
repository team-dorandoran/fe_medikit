/* eslint-disable object-shorthand */
import { ButtonBase } from '@mui/material'
import { styled } from 'styles/globalStitches'

const Button = styled(ButtonBase, {
  fontWeight: 'bold',
  variants: {
    color: {
      primary: { backgroundColor: '$primary_btn', color: '$white' },
      secondary: {
        backgroundColor: '$GRAY3',
        color: '$white',
      },
      tertiary: { backgroundColor: '$GRAY6', color: '$white' },
    },
    sizes: {
      sm: { padding: '12px 20px', fontSize: '$BODY1' },
      md: { padding: '16px 24px', fontSize: '$BODY2' },
      lg: { padding: '18px 24px', fontSize: '$BODY2' },
    },

    radii: {
      rect: { borderRadius: '4px' },
      round: { borderRadius: '30px' },
    },
    outlined: {
      true: {
        border: 'solid 1px black',
        color: '$primary_text',
        backgroundColor: 'transparent',
      },
    },
    badge: {
      true: {
        color: '$primary_text',
        backgroundColor: '$GRAY2',
        padding: '10px 16px',
        borderRadius: '17px',
        fontWeight: '600',

        '& svg': {
          width: '14px',
          height: '14px',
        },
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    radii: 'rect',
    sizes: 'md',
  },
})

export default Button
