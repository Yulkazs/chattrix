import Image from "next/image";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Background } from "./components/Background";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <ThemeSwitcher />
        <h1 className="text-4xl font-bold text-center mt-10">Welcome to Quoro</h1>
      </div>
    </div>
  );
}