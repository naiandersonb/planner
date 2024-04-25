'use client'

import { useMemo, useState } from "react"

export default function PlannerPage() {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle =() => setIsOpen(prev => !prev)


  const { content, sidebar } = useMemo(() => {
    const sidebar = isOpen? "max-w-[280px]" : "max-w-[70px]"
    const content = isOpen? "ml-[280px]" : "ml-[70px]"

    return { sidebar, content }
  }, [isOpen])

  return(
    <>
      <p>planner</p>
    </>
  )
}