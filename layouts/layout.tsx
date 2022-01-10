import {
  Grid,
  GridItem,
  Heading,
  Center,
  Divider,
  Box,
  Text,
  Icon
} from '@chakra-ui/react';
import { isMobileOnly } from 'react-device-detect';
import { TiWarningOutline } from 'react-icons/ti';

import Md from '../components/md';
import SideMenu from '../components/sideMenu';
import { Item } from '../types/Item';

type Props = {
  item: Item;
  markdowns: Item[];
};

const Layout = ({ item, markdowns }: Props) => {
  return isMobileOnly ? (
    <>
      <Box></Box>
      <Center bg='white' h='3em'>
        <Heading size='2xl'>{item.title}</Heading>
      </Center>
      {item.status === 'wip' && (
        <Box bg='yellow.300' h='4em' p={5}>
          <Text>
            <Icon as={TiWarningOutline} />
            このページは編集中です。
          </Text>
        </Box>
      )}
      <Center bg='white' h='3em'>
        <Divider orientation='horizontal' />
      </Center>
      <Center bg='white' p={5}>
        <Md content={item.content} />
      </Center>
      <Box w='100%' p={10}>
        <SideMenu markdowns={markdowns} />
      </Box>
    </>
  ) : (
    <>
      <Grid templateColumns='repeat(3, 1fr)'>
        <GridItem colSpan={1} p={10}>
          <SideMenu markdowns={markdowns} />
        </GridItem>
        <GridItem colSpan={2} bg='white' p={10}>
          <Heading size='2xl'>{item.title}</Heading>
          {item.status === 'wip' && (
            <Box bg='yellow.300' h='4em' p={5} m={5}>
              <Text>
                <Icon as={TiWarningOutline} />
                このページは編集中です。
              </Text>
            </Box>
          )}
          <Center h='3em'>
            <Divider orientation='horizontal' />
          </Center>
          <Md content={item.content} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
