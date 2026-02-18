import { useRef } from 'react'
import { motion } from 'motion/react'

function App() {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Motion Drag Demo
        </h1>
        <p className="text-sm text-slate-300 sm:text-base">
          Drag the block inside the canvas.
        </p>

        <div
          ref={constraintsRef}
          className="relative mt-3 h-[480px] w-full overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.5)]"
        >
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.08}
            dragMomentum={false}
            whileTap={{ scale: 1.02 }}
            whileDrag={{ scale: 1.08, rotate: -4 }}
            className="absolute left-6 top-6 flex h-28 w-28 select-none items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(56,189,248,0.45)] hover:cursor-grab active:cursor-grabbing"
          >
            Drag me
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default App
