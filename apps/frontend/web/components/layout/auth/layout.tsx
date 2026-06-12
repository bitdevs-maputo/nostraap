import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex relative items-center justify-center">
     
      <div className="slide w-full h-screen bg-green-600 text-white items-center justify-center">
       
      </div>

      <div className="absolute w-full h-full sm:h-[95%] sm:rounded-4xl bg-amber-100 sm:w-[80%] md:w-1/2 lg:w-1/3 sm:right-5  flex items-center justify-center flex-col">
        {children}
      </div>
    </div>
  );
}