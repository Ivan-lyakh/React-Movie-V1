import { useState } from "react";

export function usePage() {

  const [page, setPage] = useState(1)

  const pageGoStart = () => {
    setPage(1)
  }

  const pageGoNext = () => {
    setPage(prev => prev + 1)
  }

  const pageGoBack = () => {
    setPage(prev => prev - 1)
  }


  return { page, pageGoStart, pageGoBack, pageGoNext }
}