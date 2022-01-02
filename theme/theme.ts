import { extendTheme } from '@chakra-ui/react';
import '@fontsource/kaisei-opti';
import '@fontsource/comic-mono';
import '@fontsource/noto-sans-jp'

// chakra-uiのテーマ拡張
const theme = extendTheme({
  fonts: {
    heading: 'Noto Sans JP',
    body: 'Noto Sans JP',
  },
  textStyles: {
    bold: {
      fontWeight: 'bold',
    }
  }
});

export default theme;
