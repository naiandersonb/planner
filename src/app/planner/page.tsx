"use client";

import { monthsList } from "@/components/finance-planner/months-list";
import Link from "next/link";

export default function PlannerPage() {
  return (
    <>
      <div className="min-h-[80vh] w-full p-8">
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4 max">
          {monthsList.map((month) => (
            <Link key={month.slug} href={`/planner/month/${month.slug}`}>
              <article className="w-full h-[250px] border border-neutral-800 rounded-lg text-neutral-300 flex flex-col justify-between p-4 cursor-pointer hover:border-rose-500/50 bg-dark-secondary">
                <header>
                  <h2 className="font-bold text-xl uppercase">{`${
                    month.slug
                  }/${new Date().getFullYear()}`}</h2>
                  <p className="text-sm text-neutral-500">0 Itens</p>
                </header>

                <footer className="flex divide-y divide-neutral-900 flex-col">
                  <h3 className="text-neutral-500 uppercase mb-1 text-sm">
                    Total
                  </h3>
                  <div className="pt-2 flex items-center justify-between">
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
