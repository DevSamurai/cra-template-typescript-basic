import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    colors: {
      white: string
      black: string
      red: string
      orange: string
      yellow: string
      green: string
      teal: string
      cyan: string
      blue: string
      indigo: string
      purple: string
      pink: string
      gray100: string
      gray200: string
      gray300: string
      gray400: string
      gray500: string
      gray600: string
      gray700: string
      gray800: string
      gray900: string
      primary: string
      secondary: string
    }
    fontFamily: {
      heading: string
      sans: string
      mono: string
    }
    fontSize: {
      xs: string
      sm: string
      md: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
    }
  }
}
