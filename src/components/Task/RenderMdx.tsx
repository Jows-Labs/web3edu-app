import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";

export default function RenderTextV({ id, trailId }: any) {
  const [sectionContent, setSecContent] = useState<any>(null);
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    if (id && trailId) {
      const fetchMdx = async () => {
        try {
          const response = await fetch(
            `https://api.github.com/repos/Web3EduBrasil/contents/contents/trails/${trailId}/${id}.mdx?ref=main`
          );
          const data = await response.json();
          const base64Content = data.content;
          const decodedContent = atob(base64Content);
          setSecContent(decodedContent);
        } catch (error) {
          console.error("Error fetching mdx content:", error);
        }
      };
      fetchMdx();
    }
  }, [id]);

  useEffect(() => {
    if (sectionContent) {
      const renderMdx = async () => {
        const source = await serialize(sectionContent);
        setMdxSource(source);
      };
      renderMdx();
    }
  }, [sectionContent]);

  return (
    <>{mdxSource ? <MDXRemote {...mdxSource} /> : <div>Carregando...</div>}</>
  );
}
