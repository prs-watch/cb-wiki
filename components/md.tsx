import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  content: string;
};

const Md = (props: Props) => {
  return (
    <ReactMarkdown
      components={ChakraUIRenderer()}
      remarkPlugins={[remarkGfm]}
      skipHtml
    >
      {props.content}
    </ReactMarkdown>
  );
};

export default Md;
