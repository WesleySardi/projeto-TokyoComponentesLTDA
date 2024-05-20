const theme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    danger: '#e74c3c',
    warning: '#f1c40f',
    success: '#2ecc71',
    info: '#3498db',
    light: '#ecf0f1',
    dark: '#34495e',
    white: '#ffffff',
    black: '#000000',
  },
  fonts: {
    sizes: {
      small: '12px',
      medium: '16px',
      large: '24px',
      xlarge: '32px',
    },
    family: {
      primary: '"Roboto", sans-serif',
      secondary: '"Open Sans", sans-serif',
      tertiary: ''
    },
  },
  spacing: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  borders: {
    radius: {
      small: '4px',
      medium: '8px',
      large: '16px',
    },
    widths: {
      thin: '1px',
      thick: '2px',
    },
  },
  breakpoints: {
    mobile: 'only screen and (max-width: 700px)',
    tablet: 'only screen and (max-width: 768px)',
    desktop: 'only screen and (min-width: 769px)',
    smalldesktop: 'only screen and (max-width: 1279px)',
  },
};

export default theme;
