import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { toast } from "react-toastify";
import { MotionButton } from "../ui/Button";

interface MdxSectionProps {
  fetchDone: (param: Boolean) => Promise<void>;
  id: string;
  trailId: string;
  isLast: Boolean;
}

export default function MdxSection({
  id,
  trailId,
  fetchDone,
  isLast,
}: MdxSectionProps) {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    if (id && trailId) {
      const fetchMdx = async () => {
        try {
          const response = await fetch(
            `/api/mdx/content?trailId=${trailId}&Id=${id}`,
            {
              method: "GET",
            }
          );
          const data = await response.json();
          console.log(data);
          setMdxSource(data.mdxSource);
        } catch (error) {
          console.error("Error fetching MDX file:", error);
          setMdxSource(null);
        }
      };
      fetchMdx();
    }
  }, [id, trailId]);

  return (
    <div>
      {mdxSource ? <MDXRemote {...mdxSource} /> : <p>Loading...</p>}
      <MotionButton
        type="button"
        label="Marcar como concluído"
        func={() => {
          toast.promise(fetchDone(isLast), {
            pending: "Enviando...",
            success: "Tarefa concluída com sucesso!",
            error: "Erro ao concluir tarefa.",
          });
        }}
      />
    </div>
  );
}
