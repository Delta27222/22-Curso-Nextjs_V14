"use client"
interface ErrorProps {
  error: Error,
  reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {
  return (
    <div className="p-10">
      <h1>😢</h1>
      <p>Ha ocurrido un error mi pana!</p>
      <button onClick={reset}>Recargar</button>
    </div>
  )
}
