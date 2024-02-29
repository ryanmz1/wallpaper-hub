function useTheme(theme = 'black') {
  document.documentElement.setAttribute("data-theme", theme)
}

export default useTheme;