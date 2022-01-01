import { InferGetStaticPropsType, NextPage } from "next"
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { getAllMarkdowns, getMarkdownContent } from "../../utils/mdutils"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Grid, GridItem, Center, Divider, List, ListItem, ListIcon, Link, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths = async () => {
    const markdowns = getAllMarkdowns(["path"]);

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
    const item = getMarkdownContent(params.path, ["path", "title", "date", "tags", "content"])

    return {
        props: {
            item: item,
            markdowns: getAllMarkdowns(["path", "title"])
        }
    }
}

const Page: NextPage<Props> = ({ item, markdowns }) => {
    return (
        <>
            <Grid templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={1}>
                    <List>
                        {
                            markdowns.map((markdown) => {
                                return (
                                    <ListItem>
                                        <Link href={markdown.path}>
                                            <Text fontSize="lg">
                                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                                {markdown.title}
                                            </Text>
                                        </Link>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </GridItem>
                <GridItem colSpan={1}>
                    <Center height="100%">
                        <Divider orientation="vertical" />
                    </Center>
                </GridItem>
                <GridItem colSpan={3}>
                    <ReactMarkdown components={ChakraUIRenderer()} children={item.content} remarkPlugins={[remarkGfm]} skipHtml />
                </GridItem>
            </Grid>
        </>
    )
}

export default Page