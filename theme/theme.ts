import { extendTheme } from '@chakra-ui/react';
import '@fontsource/kaisei-opti';
import '@fontsource/kiwi-maru';

// chakra-uiのテーマ拡張
const theme = extendTheme({
  fonts: {
    heading: 'Kiwi Maru',
    body: 'Kiwi Maru',
  },
  textStyles: {
    bold: {
      fontWeight: 'bold',
    },
  },
});

export default theme;
