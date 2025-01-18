import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'
import { Config } from 'tailwindcss'

export interface ThemeColors {
  primary: Record<string, string>
  info: Record<string, string>
  success: Record<string, string>
  warning: Record<string, string>
  error: Record<string, string>
}

type Themes = { colors?: Partial<ThemeColors> }

type SrcubeUIPluginConfig = {
  prefix?: string
  themes?: Themes
}

const defaultColors = {
  primary: colors.blue,
  info: colors.sky,
  success: colors.green,
  warning: colors.yellow,
  danger: colors.red,
}

const convertColors = (prefix: string, colors: Record<string, unknown>) =>
  Object.entries(colors).reduce((acc, [key, value]) => {
    // Contains color shades
    if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([shade, color]) => {
        acc[`--${prefix}-${key}-${shade}`] = color
      })
    } else {
      // Normal color value
      acc[`--${prefix}-${key}`] = value
    }
    return acc
  }, {})

const SrcubeUI = (config: SrcubeUIPluginConfig = {}) => {
  const { prefix = 'srcube', themes = {} } = config

  return plugin(
    ({ addBase }) => {
      const themeColors = {
        ...defaultColors,
        ...themes.colors,
      }

      addBase({
        'view, text': convertColors(prefix, themeColors),
      })
    },
    {
      theme: {
        extend: {
          colors: {
            ...defaultColors,
            ...themes.colors,
          },
        },
      },
    },
  )
}

export default SrcubeUI
