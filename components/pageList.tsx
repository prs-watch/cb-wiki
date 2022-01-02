import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  List,
  ListItem,
  Link,
  Text,
  Input,
  Center,
  Divider,
  ListIcon,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { Item } from '../types/Item';

// プロパティ型
type Props = {
  markdowns: Item[];
};

// サイドメニューのページリストコンポーネント
const PageList = (props: Props) => {
  let markdowns: Item[] = props.markdowns;
  const [value, setValue] = React.useState('');

  // onChangeでリストを動的に出し入れする
  const handleOnChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Input value={value} placeholder='検索' onChange={handleOnChange} />
      <Center h='30px'>
        <Divider orientation='horizontal' />
      </Center>
      <List spacing={5}>
        {props.markdowns
          .filter((markdown) => {
            if (value === '') {
              return true;
            }
            // タイトル & 全文検索
            return (
              markdown.title.indexOf(value) !== -1 ||
              markdown.content.indexOf(value) !== -1
            );
          })
          .map((markdown) => {
            return (
              <ListItem key={markdown.path}>
                <NextLink href={markdown.path} passHref>
                  <Link>
                    <Text textStyle='bold' fontSize='xl'>
                      <ListIcon as={CheckCircleIcon} color='green' />
                      {markdown.title}
                    </Text>
                  </Link>
                </NextLink>
              </ListItem>
            );
          })}
      </List>
    </>
  );
};

export default PageList;
