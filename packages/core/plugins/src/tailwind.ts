import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

export interface ThemeColors {
  primary: Record<string, string>
  info: Record<string, string>
  success: Record<string, string>
  warning: Record<string, string>
  error: Record<string, string>
}

interface Theme { colors?: Partial<ThemeColors> }

interface SrcubeUIPluginConfig {
  prefix?: string
  theme?: Theme
}

const defaultColors = {
  primary: {
    DEFAULT: colors.blue[500],
    ...colors.blue,
  },
  info: {
    DEFAULT: colors.sky[500],
    ...colors.sky,
  },
  success: {
    DEFAULT: colors.green[500],
    ...colors.green,
  },
  warning: {
    DEFAULT: colors.yellow[500],
    ...colors.yellow,
  },
  danger: {
    DEFAULT: colors.red[500],
    ...colors.red,
  },
}

function convertColors(prefix: string, colors: Record<string, unknown>) {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    // Contains color shades
    if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([shade, color]) => {
        acc[`--${prefix}-${key}-${shade}`] = color
      })
    }
    else {
      // Normal color value
      acc[`--${prefix}-${key}`] = value as string
    }
    return acc
  }, {} as Record<string, string>)
}

function srcubeUI(config: SrcubeUIPluginConfig = {}) {
  const { prefix = 'srcube', theme = {} } = config

  return plugin(
    ({ addBase }) => {
      const themeColors = {
        ...defaultColors,
        ...theme.colors,
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
            ...theme.colors,
          },
        },
      },
    },
  )
}

export default srcubeUI
