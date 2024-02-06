"use client"

import { ErrorPageProps } from "../../../types"

export default function Error({reset}: ErrorPageProps) {
  return (
    <div className="p-10">
      <h1>😢</h1>
      <p>Ha ocurrido un error mi pana!</p>
      <button onClick={reset}>Recargar</button>
    </div>
  )
}
