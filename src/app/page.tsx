import Submit from "@/components/submit";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="bg-gray-300 flex flex-col items-center justify-between"
      style={{ height: "100vh" }}
    >
      <p className="text-black font-bold text-2xl mt-2">Age Calculator</p>
      <Submit />
      <p className="text-black font-semibold mb-2">
        &copy; 2024 Ye Yint Thway - @CodeAlpha.
      </p>
    </div>
  );
}
