import { Spinner } from "@/components/ui/spinner";
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center text-lg font-semibold text-slate-600">
      <Spinner className="mr-3 h-6 w-6 text-slate-500" />
      Streaming insights
    </div>
  );
}
