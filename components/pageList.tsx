import { List, ListItem, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import { Item } from '../types/Item';

// プロパティ型
type Props = {
  markdowns: Item[];
};

// サイドメニューのページリストコンポーネント
const PageList = (props: Props) => {
  return (
    <List>
      {props.markdowns.map((markdown) => {
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
  );
};

export default PageList;
