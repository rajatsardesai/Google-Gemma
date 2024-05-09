import Main from "./sections/Main";
import Sidebar from "./sections/Sidebar";

export default function App() {
  return (
    <main className="flex">
      <section className="flex-none relative"><Sidebar /></section>
      <section className="grow"><Main /></section>
    </main>
  )
}