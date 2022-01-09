import { Grid, GridItem, Heading, Center, Divider } from '@chakra-ui/react';

import Md from '../components/md';
import SideMenu from '../components/sideMenu';
import { Item } from '../types/Item';

type Props = {
  item: Item;
  markdowns: Item[];
};

const Layout = ({ item, markdowns }: Props) => {
  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)'>
        <GridItem colSpan={2} p={10}>
          <SideMenu markdowns={markdowns} />
        </GridItem>
        <GridItem colSpan={10} bg='white' p={10}>
          <Heading size='lg'>{item.title}</Heading>
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
