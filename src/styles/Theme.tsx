import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "bg1",
        color: "text1",
      },
      a: {
        color: "text1",
        _hover: {
          textDecoration: "underline",
        },
      },
      "html, body": {
        color: "text1",
        fontFamily: "GSans-Regular",
        fontSize: "md",
        letterSpacing: "regular",
        lineHeight: "regular",
      },
    },
  },
  colors: {
    primary: "rgba(249, 115, 22, 1)",
    secondary: "rgba(253, 186, 116, 1)",
    tertiary: "rgba(16, 185, 129, 1)",
    bg1: "rgba(248, 250, 252, 1)",
    bg2: "rgba(255, 255, 255, 1)",
    hover: "rgba(253,186,116,1)",
    hover2: "rgba(0, 47, 167, 1)",
    hover3: "rgba(255, 237, 213, 1)",
    text1: "rgba(30, 41, 59, 1)",
    text2: "rgba(100, 116, 139, 1)",
    text3: "rgba(148, 163, 184, 1)",
  },
  fontSizes: {
    sm: "0.813rem", //13px
    md: "1rem", //16px
    lg: "1.125rem", //18px
    xl: "1.375rem", //22px
  },
  fontWeights: {
    medium: 400,
    regular: 500,
    semibold: 600,
  },
  lineHeights: {
    par: "1.563rem", //25px
  },
  letterSpacings: {
    thin: "0.016rem", //0.26px
    title: "0.02rem", //0.32px
    par: "0.03rem", //0.48px
  },
  components: {
    Text: {
      baseStyle: {
        fontFamily: "GSans-Regular",
        fontWeight: "regular",
      },
      variants: {
        tit1: {
          color: "text1",
          fontFamily: "GSans-Semibold",
          fontSize: "xl",
          fontWeight: "semibold",
        },
        tit2: {
          fontFamily: "GSans-Semibold",
          fontSize: "lg",
          fontWeight: "semibold",
        },
        tit3: {
          fontFamily: "GSans-Semibold",
          fontWeight: "semibold",
        },
        par1: {
          color: "text1",
          letterSpacing: "par",
          lineHeight: "par",
        },
        par2: {
          color: "text2",
          fontSize: "lg",
          fontWeight: "medium",
          letterSpacing: "par",
          lineHeight: "par",
        },
        small: {
          color: "text3",
          fontSize: "sm",
          letterSpacing: "thin",
        },
      },
      defaultProps: {
        variant: "subdued",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "regular",
      },
      variants: {
        solid: (props: Record<string, any>) => ({
          bg: "primary",
          borderRadius: "6px",
          color: "bg2",
          gap: "9px",
          height: "39px",
          padding: "0px 20px",
          textTransform: "capitalize",
          _hover: {
            bg: "hover2",
          },
          _active: {
            bg: "bg2",
            color: "primary",
          },
        }),
        outline: (props: Record<string, any>) => ({
          border: "1.5px solid white",
          borderRadius: "6px",
          color: "bg2",
          height: "45px",
          padding: "10px",
          textTransform: "capitalize",
          _hover: {
            bg: "hover2",
          },
          _active: {
            bg: "bg2",
            color: "primary",
          },
        }),
        icon: (props: Record<string, any>) => ({
          bg: "transparent",
          _hover: {
            bg: "transparent",
          },
          _active: {
            bg: "transparent",
            opacity: "0",
          },
        }),
      },
      defaultProps: {
        size: "md",
        variant: "outline",
      },
    },
    Icon: {
      baseStyle: { boxSize: "25px" },
    },
    Divider: {
      baseStyle: {
        borderColor: "rgba(203, 213, 225, 0.35)",
        margin: "19px 0px 14px",
      },
    },
  },
  breakpoints: {
    sm: "20em", // 320px
    md: "48em", // 768px
    lg: "55.37em", // 832px
    xl: "64em", // 1024px
    "2xl": "80em", // 1280px
  },
})

export default theme
