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
  Box,
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
      <Center h='5em'>
        <Heading size='md'>記事一覧</Heading>
      </Center>
      <Center h='3em'>
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
            .map((markdown) => {
              return (
                <ListItem key={markdown.path}>
                  <NextLink href={markdown.path} passHref>
                    <Link>
                      <Text textStyle='bold' fontSize='sm'>
                        <ListIcon as={CheckCircleIcon} color='green' />
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
        <List spacing={5}>
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