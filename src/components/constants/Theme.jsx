export const darkTheme = Object.freeze({
  colors: {
    text: '#fafafa',
    background: '#181515',
    accent: '#ff7700',
    error: '#ff0000',
    icon: '#fafafa',
  },
  spacing: value => `${4 * value}px`,
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: 'none',
    normal: '4px',
    round: '50%',
  },
  fontSizes: {
    small: '20px',
    medium: '24px',
    mediumPlus: '30px',
    large: '36px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    mediumPlus: '600',
    bolt: '700',
  },
});

export const lightTheme = Object.freeze({
  colors: {
    text: '#303030',
    background: '#fafafa',
    accent: '#ff7700',
    error: '#ff0000',
    icon: '#303030',
  },
  spacing: value => `${4 * value}px`,
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: 'none',
    normal: '4px',
    round: '50%',
  },
  fontSizes: {
    small: '20px',
    medium: '24px',
    mediumPlus: '30px',
    large: '36px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    mediumPlus: '600',
    bolt: '700',
  },
});
