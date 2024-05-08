import Main from "./sections/Main";
import Sidebar from "./sections/Sidebar";

export default function App() {
  return (
    <main className="relative grid lg:grid-cols-2">
      <section><Sidebar /></section>
      <section><Main /></section>
    </main>
  )
}