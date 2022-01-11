import {
  Grid,
  GridItem,
  Heading,
  Center,
  Divider,
  Box,
  Badge,
  Text,
  LinkOverlay,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { isMobileOnly } from 'react-device-detect';

import SideMenu from '../components/sideMenu';
import { Item } from '../types/Item';

type Props = {
  tag: string;
  markdowns: Item[];
  fullMarkdowns: Item[];
};

const TagLayout = ({ tag, markdowns, fullMarkdowns }: Props) => {
  return isMobileOnly ? (
    <>
      <Box></Box>
      <Center bg='white' h='3em'>
        <Heading size='2xl'>タグ：{tag}</Heading>
      </Center>
      <Center bg='white' h='3em'>
        <Divider orientation='horizontal' />
      </Center>
      <Box bg='white' p={5}>
        {markdowns
          .filter((markdown) => markdown.tags.includes(tag))
          .map((markdown) => {
            return (
              <Box
                key={markdown.title}
                bg='white'
                borderWidth={1}
                borderRadius='lg'
                overflow='hidden'
                h='7em'
              >
                <NextLink href={`/${markdown.path}`} passHref>
                  <LinkOverlay>
                    <Heading size='md' p={2}>
                      {markdown.title}
                    </Heading>
                    <Text isTruncated p={2}>
                      {markdown.content}
                    </Text>
                  </LinkOverlay>
                </NextLink>
                {markdown.tags.map((tag) => {
                  return (
                    <NextLink key={tag} href={`/tags/${tag}`} passHref>
                      <Badge
                        variant='outline'
                        ml='1'
                        borderRadius='lg'
                        colorScheme='green'
                      >
                        {tag}
                      </Badge>
                    </NextLink>
                  );
                })}
              </Box>
            );
          })}
      </Box>
      <Box w='100%' p={10}>
        <SideMenu markdowns={fullMarkdowns} />
      </Box>
    </>
  ) : (
    <>
      <Grid templateColumns='repeat(4, 1fr)'>
        <GridItem colSpan={1} p={10}>
          <SideMenu markdowns={fullMarkdowns} />
        </GridItem>
        <GridItem colSpan={3} bg='white' p={10}>
          <Heading size='2xl'>タグ：{tag}</Heading>
          <Center h='3em'>
            <Divider orientation='horizontal' />
          </Center>
          <Box bg='white' p={5}>
            {markdowns
              .filter((markdown) => markdown.tags.includes(tag))
              .map((markdown) => {
                return (
                  <Box
                    key={markdown.title}
                    bg='white'
                    borderWidth={1}
                    borderRadius='lg'
                    overflow='hidden'
                    h='7em'
                  >
                    <NextLink href={`/${markdown.path}`} passHref>
                      <LinkOverlay>
                        <Heading size='md' p={2}>
                          {markdown.title}
                        </Heading>
                        <Text isTruncated p={2}>
                          {markdown.content}
                        </Text>
                      </LinkOverlay>
                    </NextLink>
                    {markdown.tags.map((tag) => {
                      return (
                        <NextLink key={tag} href={`/tags/${tag}`} passHref>
                          <Badge
                            variant='outline'
                            ml='1'
                            borderRadius='lg'
                            colorScheme='green'
                          >
                            {tag}
                          </Badge>
                        </NextLink>
                      );
                    })}
                  </Box>
                );
              })}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default TagLayout;
