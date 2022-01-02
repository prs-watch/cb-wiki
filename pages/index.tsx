import { Center, Divider, Grid, GridItem } from '@chakra-ui/react';
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
      <Grid templateColumns='repeat(12, 1fr)'>
        <GridItem colSpan={2}>
          <PageList markdowns={markdowns} />
        </GridItem>
        <GridItem colSpan={1} />
        <GridItem colSpan={9}>
          <Md content={item.content} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Top;
