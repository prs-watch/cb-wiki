import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import type { InferGetStaticPropsType, NextPage } from 'next';

import Md from '../components/md';
import PageList from '../components/pageList';
import { getAllMarkdowns, getMarkdownContent } from '../utils/mdutils';

// ページのprops型
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// 静的リソース生成のためのプロパティ取得
export const getStaticProps = async () => {
  const item = getMarkdownContent('', ['path', 'title', 'content']);
  const markdowns = getAllMarkdowns(['path', 'title', 'content']);

  return {
    props: {
      item: item,
      markdowns: markdowns,
    },
  };
};

// トップページコンテンツ
const Top: NextPage<Props> = ({ item, markdowns }) => {
  return (
    <>
      <Grid templateColumns='repeat(13, 1fr)'>
        <GridItem boxShadow='2xl' colSpan={3}>
          <PageList markdowns={markdowns} />
        </GridItem>
        <GridItem colSpan={1} />
        <GridItem colSpan={9}>
          <Heading size='2xl'>{item.title}</Heading>
          <Box h='3em' />
          <Md content={item.content} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Top;
