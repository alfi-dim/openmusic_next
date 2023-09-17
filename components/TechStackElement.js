import Image from 'next/image';

const features = [
  {
    name: 'Next.js + Tailwind',
    description: 'The tech stack on this OpenMusic Next website consists of Next.js and Tailwind CSS. Next.js is a React framework that enables server-side rendering and static site generation, providing benefits such as fast page transitions and built-in CSS support. Tailwind CSS is a utility-first CSS framework that allows for rapid UI development by composing utility classes.',
  },
];

export default function TechStackElement() {
  return (
    <div className="bg-white" id="techstack">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">OpenMusic Next (this website) Tech Stack</h2>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
          <Image
            src="/logo/nextjs.svg"
            alt="Next.js logo."
            className="rounded-lg"
            width={200}
            height={200}
            loading="lazy"
          />
          <Image
            src="/logo/tailwind.svg"
            alt="Tailwind logo."
            className="rounded-lg"
            width={200}
            height={200}
            loading="lazy"
          />
        </div>
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            OpenMusic Express Tech Stack
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-max w-full object-contain lg:col-span-1"
              src="/logo/nodejs.svg"
              alt="Node.js"
              width={358}
              height={68}
              loading="lazy"
            />
            <Image
              className="col-span-2 max-h-max w-full object-contain lg:col-span-1"
              src="/logo/express.svg"
              alt="Express.js"
              width={358}
              height={68}
              loading="lazy"
            />
            <Image
              className="col-span-2 max-h-22 w-full object-contain lg:col-span-1"
              src="/logo/mongodb.svg"
              alt="MongoDB"
              width={358}
              height={68}
              loading="lazy"
            />
            <Image
              className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/logo/jwt.svg"
              alt="Json Web Token"
              width={358}
              height={68}
              loading="lazy"
            />
            <Image
              className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/logo/bottlejs.jpg"
              alt="Bottlejs"
              width={358}
              height={68}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
