const theme = {
  brand: {
    main: '#E3004A'
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px',
  }
}

const devices = {
  tablet: `(min-width: ${theme.breakpoints.tablet})`,
  laptop: `(min-width: ${theme.breakpoints.desktop})`,
}

export { theme, devices };