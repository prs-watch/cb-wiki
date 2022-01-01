import { InferGetStaticPropsType, NextPage } from "next"
import { getAllMarkdowns, getMarkdownContent, markdownToHTML } from "../../utils/mdutils"

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
    const content = await markdownToHTML(item.content)

    return {
        props: {
            item: {
                "path": item.path,
                "title": item.title,
                "date": item.date,
                "tags": item.tags,
                "content": content
            }
        }
    }
}

const Page: NextPage<Props> = ({ item }) => {
    return (
        <>
            <h1>{item.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </>
    )
}

export default Page