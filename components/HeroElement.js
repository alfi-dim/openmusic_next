import Link from 'next/link';
import Image from 'next/image';

export default function HeroElement() {
  return (
    <div className="bg-white h-fit">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden bg-gray-900 sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#279EFF" />
                <stop offset={1} stopColor="#0C356A" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              OpenMusic Express
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              OpenMusic is an API built using Express.js and MongoDB,
              originally inspired by the Dicoding: Belajar Fundamental Aplikasi Back-End course,
              which used Hapi.js and PostgreSQL.
              The API is now reimagined and improved with Express.js and MongoDB,
              using Mongoose as the ODM.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/play"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <a href="https://github.com/alfi-dim/openmusic_express#readme" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
