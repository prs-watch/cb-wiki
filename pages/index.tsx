import type { InferGetStaticPropsType, NextPage } from "next"
import { getAllMarkdowns } from "../utils/mdutils";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const markdowns = getAllMarkdowns(["path", "title", "date", "tags"])
  return {
    props: { markdowns },
  };
};

const Top: NextPage<Props> = ({ markdowns }) => {
  return (
    <ul>
      {markdowns.map((markdown) => {
        return (
          <ul>
            <li>{markdown.title}</li>
            <li>{markdown.date}</li>
            <li>{markdown.tags}</li>
          </ul>
        )
      })}
    </ul>
  )
}

export default Top
