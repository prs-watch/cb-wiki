import { InferGetStaticPropsType, NextPage } from 'next';

import TagLayout from '../../layouts/tagLayout';
import { getAllMarkdowns } from '../../utils/mdutils';

// ページのprops型
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const tags = getAllMarkdowns(['tags'])
    .map((markdown) => markdown.tags)
    .reduce((prev, curr) => prev.concat(curr))

  return {
      paths: tags.map((tag) => { 
          return {
              params: {tag: tag}
          }
      }),
    fallback: false,
  };
};

// 動的遷移時のパスパラメータ型
type DynamicParams = {
  params: {
    tag: string;
  };
};

export const getStaticProps = async ({ params }: DynamicParams) => {
  const fullMarkdowns = getAllMarkdowns([
    'path',
    'title',
    'status',
    'tags',
    'content',
  ])
    
  const markdowns = fullMarkdowns.filter((markdown) => markdown.tags.includes(params.tag));

  return {
    props: {
      tag: params.tag,
      markdowns: markdowns,
      fullMarkdowns: fullMarkdowns
    },
  };
};

const TagPage: NextPage<Props> = ({ tag, markdowns, fullMarkdowns }) => {
    return (
        <>
            <TagLayout tag={tag} markdowns={markdowns} fullMarkdowns={fullMarkdowns}/>
        </>
    )
}

export default TagPage;