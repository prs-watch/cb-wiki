import {
  Link,
  List,
  ListItem,
  ListIcon,
  Text,
  Center,
  Divider,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import type { InferGetStaticPropsType, NextPage } from 'next';
import { getAllMarkdowns } from '../utils/mdutils';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import NextLink from 'next/link';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const topMarkdown = `
## 概要

- 中国の野球（中國棒球）について整理したwikiページです。
- 記法は繁体字で統一。
- メンテナンスはGitHub上で実施するため、編集リクエスト等もこちらで受け付けます。
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
          <List>
            {markdowns.map((markdown) => {
              return (
                <ListItem key={markdown.path}>
                  <NextLink href={markdown.path} passHref>
                    <Link>
                      <Text fontSize='lg'>{markdown.title}</Text>
                    </Link>
                  </NextLink>
                </ListItem>
              );
            })}
          </List>
        </GridItem>
        <GridItem colSpan={1}>
          <Center height='100%'>
            <Divider orientation='vertical' />
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <ReactMarkdown
            components={ChakraUIRenderer()}
            remarkPlugins={[remarkGfm]}
            skipHtml
          >
            {topMarkdown}
          </ReactMarkdown>
        </GridItem>
      </Grid>
    </>
  );
};

export default Top;
