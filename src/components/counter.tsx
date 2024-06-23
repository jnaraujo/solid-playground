import { createSignal, onCleanup } from "solid-js"

export function Counter() {
  const [count, setCount] = createSignal(0)
  const interval = setInterval(()=>{
    setCount(c => c + 1)
  }, 1000)

  onCleanup(()=>{
    clearInterval(interval)
  })
  
  return <div>
    <h2>Counter: {count()}</h2>
    <button
    class="bg-zinc-50 text-zinc-950 px-2 rounded"
    onClick={()=>{
      setCount(0)
    }}>
      Reset counter
    </button>
  </div>
}