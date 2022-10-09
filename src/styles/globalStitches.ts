import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      // GrayScale
      GRAY9: "#0a0a0a",
      GRAY8: "#1b1d1f",
      GRAY7: "#26282b",
      GRAY6: "#464c53",
      GRAY5: "#73787f",
      GRAY4: "#9ea4aa",
      GRAY3: "#c9cdd2",
      GRAY2: "#e8ebed",
      GRAY1: "#f7f8f9",

      GTRANS4: "rgba(176, 179, 188, 0.7)",
      GTRANS3: "rgba(176, 179, 188, 0.5)",
      GTRANS2: "rgba(176, 179, 188, 0.3)",
      GTRANS1: "rgba(176, 179, 188, 0.1)",

      // TextColor
      primary_text: "#1b1d1f", //Gray 8
      secondary_text: "#464c53", //Gray 6
      tertiary_text: "#9ea4aa", //Gray 4
      white: "#ffffff",

      // btn
      primary_btn: "#1b1d1f",
      secondary_btn: "#000000", // FIX: need to change
      tetiary_btn: "#C9CDD2",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      bold: 700,
      semiBold: 600,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      H1: "32px",
      H2: "26px",
      H4: "18px",
      BODY1: "15px",
      BODY2: "12px",
      BODY3: "11px",
      CAPTION: "10px",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {
      GNB: 1000,
      DROPDOWN: 1001,
      CHECK_ICON: 11,
      CHECK_BOX: 10,
    },
    transitions: {},
  },
});
