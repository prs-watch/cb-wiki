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
    <>
    </>
  )
}

export default Top
