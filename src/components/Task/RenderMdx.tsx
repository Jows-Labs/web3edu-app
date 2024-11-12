import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { useMDXComponents } from "@/mdx-components";
import { MotionButton } from "../ui/Button";

interface MdxSectionProps {
  fetchDone: (param: Boolean) => Promise<void>;
  id: any;
  trailId: any;
  isLast: Boolean;
}

export default function MdxSection({
  id,
  trailId,
  fetchDone,
  isLast,
}: MdxSectionProps) {
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
          const decodedContent = decodeURIComponent(
            escape(atob(base64Content))
          );
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
        setMdxSource({ ...source, components: useMDXComponents });
      };
      renderMdx();
    }
  }, [sectionContent]);

  return (
    <>
      {mdxSource !== null ? (
        <>
          <div className="flex flex-col gap-5">
            {mdxSource ? (
              <MDXRemote {...mdxSource} />
            ) : (
              <div>Carregando...</div>
            )}
          </div>

          <MotionButton
            rightIcon={true}
            label="Marcar como concluído"
            type="button"
            className="bg-green text-neutral w-2/5 min-h-12 self-end"
            func={() => fetchDone(isLast)}
          />
        </>
      ) : (
        <>
          <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="skeleton h-full w-full"></div>
          <div className="skeleton h-full w-full"></div>
        </>
      )}
    </>
  );
}
