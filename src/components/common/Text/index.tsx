import { styled } from 'styles/globalStitches';

const Text = styled('span', {
  variants: {
    color: {
      primary: { color: '$primary_text' },
      secondary: { color: '$secondary_text' },
      tertiary: { color: '$tertiary_text' },
      white: { color: '$white' }
    },
    size: {
      h1: { fontSize: '32px' },
      h2: { fontSize: '26px' },
      h4: { fontSize: '18px' },
      body1: { fontSize: '15px' },
      body2: { fontSize: '12px' },
      body3: { fontSize: '11px' },
      caption: { fontSize: '10px' },

    },
    weight: {
      bold: { fontWeight: 700 },
      semiBold: { fontWeight: 600 },
      normal: { fontWeight: 400 },
    }
  },
  defaultVariants: { color: 'primary', size: 'body1', weight: 'normal' }
})

export default Text