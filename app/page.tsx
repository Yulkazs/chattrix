import Image from "next/image";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <h1 className="text-4xl font-bold text-center mt-10">Welcome to Chattrix</h1>
    </div>
  );
}