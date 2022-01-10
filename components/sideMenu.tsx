import { CheckCircleIcon, WarningTwoIcon } from '@chakra-ui/icons';
import {
  List,
  ListItem,
  Link,
  Text,
  Input,
  Center,
  Divider,
  ListIcon,
  Heading,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import Links from '../public/resources/links.json';
import { Item } from '../types/Item';

// プロパティ型
type Props = {
  markdowns: Item[];
};

// サイドメニューのページリストコンポーネント
const SideMenu = (props: Props) => {
  let markdowns: Item[] = props.markdowns;
  const [value, setValue] = React.useState('');

  // onChangeでリストを動的に出し入れする
  const handleOnChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Center h='3em'>
        <Heading size='md'>記事一覧</Heading>
      </Center>
      <Center h='5em'>
        <Input
          width='70%'
          value={value}
          placeholder='検索'
          onChange={handleOnChange}
          bg='white'
        />
      </Center>
      <Center>
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
            // ステータス順でソート
            .sort((f, s) => {
              if (f.status < s.status) return -1
              if (f.status > s.status) return 1
              return 0
            })
            .map((markdown) => {
              return (
                <ListItem key={markdown.path}>
                  <NextLink href={markdown.path} passHref>
                    <Link>
                      <Text textStyle='bold' fontSize='sm'>
                        <ListIcon
                          as={
                            markdown.status === 'close'
                              ? CheckCircleIcon
                              : WarningTwoIcon
                          }
                          color={
                            markdown.status === 'close'
                              ? 'green.500'
                              : 'yellow.300'
                          }
                        />
                        {markdown.title}
                      </Text>
                    </Link>
                  </NextLink>
                </ListItem>
              );
            })}
        </List>
      </Center>
      <Center h='3em'>
        <Divider orientation='horizontal' />
      </Center>
      <Center h='5em'>
        <Heading size='md'>外部リンク</Heading>
      </Center>
      <Center>
        <List spacing={3}>
          {Links.map((link) => {
            return (
              <ListItem key={link.url}>
                <Link href={link.url} isExternal>
                  <Text fontSize='sm' color='blue.500'>
                    {link.title}
                  </Text>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Center>
    </>
  );
};

export default SideMenu;
