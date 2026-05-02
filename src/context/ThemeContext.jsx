import { createContext, useContext, useEffect, useMemo } from 'react'
const DEFAULT_THEME_PATH = 'defaulttheme'
const themeJsonModules = import.meta.glob('../theme/themes/*/theme.json', {
  eager: true,
  import: 'default',
})
const themeAssetUrls = import.meta.glob('../theme/themes/*/assets/images/*', {
  eager: true,
  import: 'default',
})

function getThemeConfig(selectedThemePath) {
  const selectedThemeKey = `../theme/themes/${selectedThemePath}/theme.json`
  const fallbackThemeKey = `../theme/themes/${DEFAULT_THEME_PATH}/theme.json`

  return themeJsonModules[selectedThemeKey] ?? themeJsonModules[fallbackThemeKey]
}

function resolveThemeImagePath(selectedThemePath, relativeImagePath) {
  if (!relativeImagePath) {
    return undefined
  }

  const cleanedRelativePath = relativeImagePath.replace(/^\.\//, '')
  const assetKey = `../theme/themes/${selectedThemePath}/${cleanedRelativePath}`

  return themeAssetUrls[assetKey]
}

const initialTheme = getThemeConfig(DEFAULT_THEME_PATH)
const ThemeContext = createContext(initialTheme)

export function ThemeProvider({ children, selectedThemePath = DEFAULT_THEME_PATH }) {
  const selectedTheme = getThemeConfig(selectedThemePath)
  const selectedLogoPath = selectedTheme.logo?.image ?? selectedTheme.logo?.logo_header

  const theme = {
    ...selectedTheme,
    logo: {
      ...selectedTheme.logo,
      image: resolveThemeImagePath(selectedThemePath, selectedLogoPath),
    },
  }

  const cssVariables = useMemo(
    () => ({
      '--main-color': theme.colors.mainColor,
      '--secondary-main-color': theme.colors.secondaryMainColor,
      '--tertiary-main-color': theme.colors.tertiaryMainColor,
      '--main-text-color': theme.colors.mainTextColor,
      '--highlight-text-color': theme.colors.highlightTextColor,
      '--title-text-color': theme.colors.titleTextColor,
      '--highlight-color': theme.colors.highlightColor,
      '--border-color': theme.colors.borderColor,
      '--border-highlight-color': theme.colors.borderHighlightColor,
      '--button-select-color': theme.colors.buttonSelectColor,
    }),
    [theme.colors],
  )

  useEffect(() => {
    Object.entries(cssVariables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })
  }, [cssVariables])

  return (
    <ThemeContext.Provider value={theme}>
      <div>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
