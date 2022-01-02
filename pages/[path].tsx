import { Grid, GridItem, Center, Divider } from '@chakra-ui/react';
import { InferGetStaticPropsType, NextPage } from 'next';

import Md from '../components/md';
import PageList from '../components/pageList';
import { getAllMarkdowns, getMarkdownContent } from '../utils/mdutils';

// ページのprops型
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// 静的リソース生成のためのパス取得
export const getStaticPaths = async () => {
  const markdowns = getAllMarkdowns(['path']);

  return {
    paths: markdowns.map((markdown) => {
      return {
        params: {
          path: markdown.path,
        },
      };
    }),
    fallback: false,
  };
};

// 静的リソース生成のためのプロパティ取得
export const getStaticProps = async ({ params }: any) => {
  const item = getMarkdownContent(params.path, ['path', 'title', 'content']);

  return {
    props: {
      item: item,
      markdowns: getAllMarkdowns(['path', 'title', 'content']),
    },
  };
};

// markdownレンダリングページ
// ダイナミックルーティングをして、markdownリソースを取得する
const Page: NextPage<Props> = ({ item, markdowns }) => {
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

export default Page;
