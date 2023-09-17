import Image from 'next/image';

export default function AboutElement() {
  return (
    <div className="hero min-h-screen bg-white" id="about">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src="/logo/openmusic.png" width={640} height={640} className="max-w-sm" alt="openmusic logo"/>
        <div>
          <h1 className="text-5xl font-bold text-blue-400">About this project</h1>
          <p className="py-6 text-black">
            Welcome to OpenMusic Next, a web application designed to seamlessly integrate with the&nbsp;
            <a href="https://github.com/alfi-dim/openmusic_express" className="link link-primary" target="_blank" rel="noopener">
              OpenMusic Express API project
            </a>.
            This platform offers users a user-friendly interface to discover and (not) enjoy music (because music player is not yet implemented), manage playlists, and explore collaborative opportunities within the users.
          </p>
        </div>
      </div>
    </div>
  );
}
