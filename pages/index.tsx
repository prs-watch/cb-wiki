import { Center, Divider, Grid, GridItem } from '@chakra-ui/react';
import type { InferGetStaticPropsType, NextPage } from 'next';

import Md from '../components/md';
import PageList from '../components/pageList';
import { getAllMarkdowns } from '../utils/mdutils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const topMarkdown = `
## 概要

- 中国の野球（**中國棒球**）について整理したwikiページです。
- カバー対象は国家隊・省隊・旅外・アカデミー・アマ。その他、棒球協會関連のネタも。
- 記法は日本人の可読性を重視して、**繁体字**で統一。
`;

export const getStaticProps = async () => {
  const markdowns = getAllMarkdowns(['path', 'title', 'date', 'tags']);
  return {
    props: { markdowns },
  };
};

const Top: NextPage<Props> = ({ markdowns }) => {
  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)'>
        <GridItem colSpan={1}>
          <PageList markdowns={markdowns} />
        </GridItem>
        <GridItem colSpan={1}>
          <Center height='100%'>
            <Divider orientation='vertical' />
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <Md content={topMarkdown} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Top;
