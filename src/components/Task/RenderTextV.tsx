import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";

export default function RenderTextV({ content }: any) {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    const renderMdx = async () => {
      const source = await serialize(content);
      setMdxSource(source);
    };

    renderMdx();
    console.log(mdxSource);
  }, [content]);

  return (
    <div>
      {mdxSource ? <MDXRemote {...mdxSource} /> : <div>Carregando...</div>}
    </div>
  );
}
