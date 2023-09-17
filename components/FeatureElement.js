import {
  QueueListIcon, UserIcon, FaceSmileIcon, PlayCircleIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Basic User Feature',
    description:
      'Just things like fullname and username, and a password.',
    icon: UserIcon,
  },
  {
    name: 'Basic Songs and Albums Manager Feature',
    description:
      'This is for an Admin users, it can manage songs and albums content.',
    icon: PlayCircleIcon,
  },
  {
    name: 'Basic Playlists and Collaborations Feature',
    description:
      'You can create playlist for your own, and invite people to collaborate with your playlist.',
    icon: QueueListIcon,
  },
  {
    name: 'That\'s it i guess',
    description:
      'This is just a simple website, please don\'t expect too much, but if you have an idea, please inform me as well, through contact below (or at openmusic express API repo on github).',
    icon: FaceSmileIcon,
  },
];

export default function FeatureElement() {
  return (
    <div className="bg-[#279EFF] py-24 sm:py-32" id="feature">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-white">OpenMusic</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Just have basic feature
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Please don&apos;t expect too much from a &quot;Back-End&quot; person like me,
            well even though I&apos;m also a newbie on that as well.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0C356A]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
