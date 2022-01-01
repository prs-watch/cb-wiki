import { InferGetStaticPropsType, NextPage } from "next"
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { getAllMarkdowns, getMarkdownContent } from "../../utils/mdutils"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
            item
        }
    }
}

const Page: NextPage<Props> = ({ item }) => {
    return (
        <>
            <ReactMarkdown components={ChakraUIRenderer()} children={item.content} remarkPlugins={[remarkGfm]} skipHtml />
        </>
    )
}

export default Page