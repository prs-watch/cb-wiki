import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// プロパティ型
type Props = {
  content: string;
};

// markdownレンダリングコンポーネント
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
