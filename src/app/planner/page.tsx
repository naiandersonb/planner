"use client";

import { monthsList } from "@/components/finance-planner/months-list";
import Link from "next/link";
import { useMemo, useState } from "react";

const RANGE = 10

export default function PlannerPage() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const years = useMemo(() => {
    const listYears = []
    const nextYears = currentYear + RANGE
    const oldYears = currentYear - RANGE
    const totalYears = nextYears + oldYears
    for (let year = oldYears; year <= totalYears; year++) {
      listYears.push(year);
    }

    return listYears;
  }, [currentYear])

  return (
    <>
      <div className="min-h-[80vh] w-full md:p-8 p-4">
        <section className="max-w-sm">
          <select 
          className="border text-sm rounded-lg block w-full p-3 bg-dark-secondary border-neutral-800 placeholder-gray-400 text-white focus:ring-rose-500 focus:border-blue-500"
          value={currentYear} 
          onChange={evt => {
            setCurrentYear(Number(evt.target.value))
          }}>
            <option value="">Select year</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </section>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4 max">
          {monthsList.map((month) => (
            <Link key={month.slug} href={`/planner/month/${month.slug}`}>
              <article className="w-full h-[250px] border border-neutral-800 rounded-lg text-neutral-300 flex flex-col justify-between p-4 cursor-pointer hover:border-rose-500/50 bg-dark-secondary">
                <header>
                  <h2 className="md:text-2xl text-xl uppercase">{`${
                    month.slug
                  }/${currentYear}`}</h2>
                  <p className="text-sm text-neutral-500">0 Itens</p>
                </header>

                <footer className="flex divide-y divide-neutral-900 flex-col">
                  <h3 className="text-neutral-500 uppercase mb-1 text-sm">
                    Total
                  </h3>
                  <div className="pt-2 flex items-center text-2xl justify-between">
                    <span>R$</span>
                    <span>00,00</span>
                  </div>
                </footer>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}
