/* eslint-disable object-shorthand */
import { ButtonBase } from '@mui/material'
import { styled } from 'styles/globalStitches'

const Button = styled(ButtonBase, {
  fontWeight: 'bold',
  '&:disabled': {
    opacity: '0.8',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: '$primary_btn',
        color: '$white',
        '&:active': {
          backgroundColor: '$primary_pressed',
        },
        '&:hover': {
          backgroundColor: '$primary_pressed',
        },
      },
      secondary: {
        backgroundColor: '$GRAY3',
        color: '$white',
        '&:active': {
          backgroundColor: '$secondary_pressed',
        },
        '&:hover': {
          backgroundColor: '$secondary_pressed',
        },
      },
      tertiary: {
        backgroundColor: '$GRAY6',
        color: '$white',
        '&:active': {
          backgroundColor: '$tertiary_pressed',
        },
        '&:hover': {
          backgroundColor: '$tertiary_pressed',
        },
      },
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
      primary: {
        border: 'solid 1px $primary',
        color: '$primary_text',
        backgroundColor: 'transparent',
        '&:active': {
          backgroundColor: 'rgba(217, 244, 254, 0.32)',
        },
        '&:hover': {
          backgroundColor: 'rgba(217, 244, 254, 0.32)',
        },
      },
      secondary: {
        border: 'solid 1px $secondary',
        color: '$secondary_text',
        backgroundColor: 'transparent',
        '&:active': {
          backgroundColor: '$GRAY1',
        },
        '&:hover': {
          backgroundColor: '$GRAY1',
        },
      },
      tertiary: {
        border: 'solid 1px $tertiary',
        color: '$tertiary_text',
        backgroundColor: 'transparent',
        '&:active': {
          backgroundColor: '$GTRANS1',
        },
        '&:hover': {
          backgroundColor: '$GTRANS1',
        },
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
    default: {
      true: {
        backgroundColor: 'transparent',
        color: '$secondary_text',
        fontSize: '$BODY2',
        padding: '0px',
        border: 'none',
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
