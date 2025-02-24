'use client'
import { Button } from "@/components/Button";
import Image from "next/image";

export default function Home() {
  function setIsModalOpen(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

  return (
    <div >
        <Button text="Click Me" className="mb-4" onClick={() => setIsModalOpen(true)} />
    </div>
  );
}
