import { Learn } from "@/components/learn/Learn";

export default function trailPage({ params }: { params: { id: string } }) {
  return <Learn trailId={params.id} />;
}
