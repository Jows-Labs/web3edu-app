import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { toast } from "react-toastify";
import { MotionButton } from "../ui/Button";
import { useRouter } from "next/navigation";

interface MdxSectionProps {
  fetchDone: (param: Boolean) => Promise<void>;
  id: string;
  trailId: string;
  isLast: Boolean;
  done: Boolean;
  mdxSource?: any; // serialized MDX from server (next-mdx-remote)
}

export default function MdxSection({
  id,
  trailId,
  fetchDone,
  isLast,
  done,
  mdxSource,
}: MdxSectionProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      {mdxSource ? (
        <div className="prose prose-blue max-w-none">
          <MDXRemote {...mdxSource} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {done && !isLast ? (
        <MotionButton
          type="button"
          label="Avançar"
          className="w-fit bg-blue text-white"
          func={() => router.push(`/learn/${trailId}/${Number(id) + 1}`)}
        />
      ) : (
        <MotionButton
          type="button"
          label="Marcar como concluído"
          className="w-fit bg-blue text-white"
          func={() => {
            toast.promise(fetchDone(isLast), {
              pending: "Enviando...",
              success: "Tarefa concluída com sucesso!",
              error: "Erro ao concluir tarefa.",
            });
          }}
        />
      )}
    </div>
  );
}
