import { extendTheme } from '@chakra-ui/react';
import '@fontsource/kaisei-opti';
import '@fontsource/comic-mono';

const theme = extendTheme({
  fonts: {
    heading: 'Comic Mono, Kaisei Opti',
    body: 'Comic Mono, Kaisei Opti',
  },
});

export default theme;
