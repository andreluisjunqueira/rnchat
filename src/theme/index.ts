import { createTheme } from '@shopify/restyle'

const palette = {
  'black': '#000',
  'gray': '#7A7A7A',
  'gray-gainsboro': '#DBDBDB',
  'gray-whisper': '#ECEBEB',
  
  'white-smoke': '#F2F2F2',
  'white-snow': '#FCFCFC',
  'white': '#fff',

  'blue-alice':'#E9F2FF',

  'bg-gradient-start': '#F7F7F7',
  'bg-gradient-end': '#FCFCFC',
  'overlay': 'rgba(0,0,0,0.2)',
  'overlay-dark': 'rgba(0,0,0, 0.6)',

  'accent-blue': '#005FFF',
  'accent-red': '#FF3742',
  'accent-green': '#20E070',
};

const darkPalette = {
    'black': '#FFF',
    'gray': '#7A7A7A',
    'gray-gainsboro': '#2D2F2F',
    'gray-whisper': '#1C1E22',
    
    'white-smoke': '#13151B',
    'white-snow': '#070A0D',
    'white': '#101418',
  
    'blue-alice':'#00193D',
  
    'bg-gradient-start': '#0A0C0F',
    'bg-gradient-end': '#070A0D',
    'overlay': 'rgba(0,0,0,0.6)',
    'overlay-dark': 'rgba(0,0,0, 0.8)',

    'accent-blue': '#005FFF',
    'accent-red': '#FF3742',
    'accent-green': '#20E070',
}


export const theme = createTheme({
  colors: {
    'black': palette['black'],
    'gray': palette['gray'],
    'gray-gainsboro': palette['gray-gainsboro'],
    'gray-whisper': palette['gray-whisper'],
    
    'white-smoke': palette['white-smoke'],
    'white-snow': palette['white-snow'],
    'white': palette['white'],
  
    'blue-alice':palette['blue-alice'],
  
    'bg-gradient-start': palette['bg-gradient-start'],
    'bg-gradient-end': palette['bg-gradient-end'],
    'overlay': palette['overlay'],
    'overlay-dark': palette['overlay-dark'],

    'accent-blue': palette['accent-blue'],
    'accent-red': palette['accent-red'],
    'accent-green': palette['accent-green'],
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 26,
    xl: 40
  },
  zIndices: {

  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
    ...theme,
    colors: {
      'black': darkPalette['black'],
      'gray': darkPalette['gray'],
      'gray-gainsboro': darkPalette['gray-gainsboro'],
      'gray-whisper': darkPalette['gray-whisper'],
      
      'white-smoke': darkPalette['white-smoke'],
      'white-snow': darkPalette['white-snow'],
      'white': darkPalette['white'],
    
      'blue-alice':darkPalette['blue-alice'],
    
      'bg-gradient-start': darkPalette['bg-gradient-start'],
      'bg-gradient-end': darkPalette['bg-gradient-end'],
      'overlay': darkPalette['overlay'],
      'overlay-dark': darkPalette['overlay-dark'],
      
      'accent-blue': palette['accent-blue'],
      'accent-red': palette['accent-red'],
      'accent-green': palette['accent-green'],
    }
}
