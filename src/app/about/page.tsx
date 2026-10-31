import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { siteConfig, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Saudi K-KEM: an industrial services and engineering consultation company headquartered in Al Jubail, Eastern Province, Saudi Arabia.",
  alternates: { canonical: "/about" },
};

// TODO: replace with approved company text (founding story, leadership, locations, certifications).
export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="container-x">
          <p className="eyebrow !text-brand-400">About Saudi K-KEM</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            A premier industrial services and engineering consultation company
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Headquartered in {siteConfig.address}, we help asset owners inspect, understand and maintain critical
            plant equipment.
          </p>
        </div>
      </section>

      <div className="container-x py-16">
        <dl className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="card flex flex-col-reverse justify-end p-6">
              <dt className="mt-1 text-sm text-slate-500">{s.label}</dt>
              <dd className="font-display text-4xl font-bold text-navy-800">
                {s.value.toLocaleString("en-US")}
                {s.suffix}
              </dd>
            </div>
          ))}
        </dl>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold text-navy-800">What we do</h2>
          <p className="mt-3 leading-relaxed text-slate-500">
            Our service lines span the asset lifecycle, from inspection and integrity management to condition
            monitoring and overhaul support.
          </p>
          <ul className="mt-5 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="font-medium text-brand-600 hover:text-brand-700">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
