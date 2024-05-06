import Nav from "./components/Nav";
import Main from "./sections/Main";
import Sidebar from "./sections/Sidebar";

export default function App() {
  return (
    <main className="relative">
      <div className="grid lg:grid-cols-2">
        <section><Sidebar /></section>
        <section className="padding"><Main /></section>
      </div>
    </main>
  )
}