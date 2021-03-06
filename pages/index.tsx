import type { InferGetStaticPropsType, NextPage } from 'next';

import Layout from '../layouts/layout';
import { getAllMarkdowns, getMarkdownContent } from '../utils/mdutils';

// ページのprops型
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// 静的リソース生成のためのプロパティ取得
export const getStaticProps = async () => {
  const item = getMarkdownContent('', ['path', 'title', 'status', 'tags', 'content']);
  const markdowns = getAllMarkdowns(['path', 'title', 'status', 'tags', 'content']);

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
      <Layout item={item} markdowns={markdowns} />
    </>
  );
};

export default Top;
