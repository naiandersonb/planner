'use client'

import { ReactNode, useMemo, useState } from "react"

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen(prev => !prev)

  const { content, sidebar } = useMemo(() => {
    const sidebar = isOpen? "max-w-[280px]" : "max-w-[70px]"
    const content = isOpen? "ml-[280px]" : "ml-[70px]"
    return { sidebar, content }
  }, [isOpen])

  return(
    <>
      <aside 
        onClick={onToggle} 
        className={`fixed top-0 left-0 col-span-2 max-w-[280px] bg-red-400 w-full h-full ${sidebar} transition-width ease-in-out`}
      >
        left sidebar
      </aside>

      <section className={`flex-1 col-span-10 ${content}`}>
        <header className="bg-yellow-300 w-full h-20">
          Header
        </header>

        <section className="bg-blue-400 w-full h-full">
          {children}
        </section>
      </section>
    </>
  )
}