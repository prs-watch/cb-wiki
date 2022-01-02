import { Grid, GridItem, Center, Divider } from '@chakra-ui/react';
import { InferGetStaticPropsType, NextPage } from 'next';

import Md from '../components/md';
import PageList from '../components/pageList';
import { getAllMarkdowns, getMarkdownContent } from '../utils/mdutils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

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

export const getStaticProps = async ({ params }: any) => {
  const item = getMarkdownContent(params.path, [
    'path',
    'title',
    'date',
    'tags',
    'content',
  ]);

  return {
    props: {
      item: item,
      markdowns: getAllMarkdowns(['path', 'title']),
    },
  };
};

const Page: NextPage<Props> = ({ item, markdowns }) => {
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
          <Md content={item.content} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Page;
