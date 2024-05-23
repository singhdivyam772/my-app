import Image from "next/image";
import { Button } from "@/components/ui/button"
import Footer from "./MainComponents/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-slate-100">
      <Button>Click me</Button>
      <Footer/>
    </main>
  );
}
