import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        <nav className="w-full bg-zinc-900/80 backdrop-blur-xl p-4 flex justify-between items-center shadow-xl sticky top-0 z-50">
          <h1 className="text-2xl font-bold">Nikola Birac</h1>
          <div className="flex gap-6 text-lg">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/story" className="hover:text-blue-400 transition">My Story</Link>
            <Link to="/goals" className="hover:text-blue-400 transition">Goals</Link>
            <Link to="/gallery" className="hover:text-blue-400 transition">Gallery</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 max-w-4xl mx-auto"><h2 className="text-4xl font-bold mb-3">Welcome</h2><p className="text-lg opacity-90">I'm Nikola — finance student.</p></motion.div>);
}

function Story() {
  return (<motion.div initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="p-10 max-w-4xl mx-auto"><h2 className="text-4xl font-bold mb-3">My Story</h2><p className="text-lg opacity-90">Born with curiosity...</p></motion.div>);
}

function Goals() {
  return (<motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-10 max-w-4xl mx-auto"><h2 className="text-4xl font-bold mb-3">My Goals</h2><ul className="list-disc pl-6 text-lg opacity-90 space-y-2"><li>Goal 1</li></ul></motion.div>);
}

function Gallery() {
  return (<motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="p-10 max-w-5xl mx-auto"><h2 className="text-4xl font-bold mb-6">Image Gallery</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{[1,2,3].map(n => <motion.div key={n} whileHover={{ scale: 1.05 }} className="w-full h-60 rounded-2xl bg-zinc-800 shadow-xl flex items-center justify-center text-xl opacity-80">Photo {n}</motion.div>)}</div></motion.div>);
}