const services = [
  {
    title: "Original IPs & Content Development",
    description:
      "We develop original scripted and factual formats tailored for broadcasters, OTT platforms, and co-production partners.",
    items: [
      "Scripted & factual format development",
      "Series & show concepts",
      "Documentaries & factual formats",
      "Original film & short-film ideas",
      "Pitch decks, pilot scripts & co-production packaging",
    ],
  },
  {
    title: "Film, Series & Branded Content",
    description: "We bring stories to life across screens and formats.",
    items: [
      "Film & TV production",
      "Episodic and digital series",
      "Commercials & advertising campaigns",
      "Corporate & institutional films",
      "Branded content for social & digital platforms",
    ],
  },
  {
    title: "Production Services (End-to-End)",
    description:
      "From the first idea to the final master, we manage the full production pipeline.",
    items: [
      "Creative development & scriptwriting",
      "Storyboarding & visual planning",
      "Casting & talent sourcing",
      "Location scouting & permits",
      "Production management, scheduling & budgeting",
      "Studio, on-location & multi-camera shoots",
      "Aerial & drone cinematography",
      "360° / VR / immersive production",
    ],
  },
  {
    title: "Post-Production & Finishing",
    description:
      "We polish every frame to ensure your story lands with impact.",
    items: [
      "Offline & online editing",
      "Color correction & grading",
      "Sound design & mixing",
      "Motion graphics & animation",
      "VFX & CGI integration",
      "Subtitling, localization & transcoding",
      "Final delivery for broadcast, cinema, and digital platforms",
    ],
  },
];
export default function WhatWeDo() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <h1 className=" block max-w-5xl mt-2 max-w-5xl text-5xl font-bold tracking-tight text-pretty   sm:text-7xl">
            What we do
          </h1>
          <p className="mt-6 block max-w-5xl  text-3xl  tracking-tight text-balance text-primary-800 sm:text-4xl  font-semibold  ">
            {" "}
            We specialise in original IPs, film and series, and full production
            services, covering every step of the journey:
          </p>
        </div>
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8 space-y-12">
            {services.map((service) => (
              <div key={service.title}>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                  {service.title}
                </h2>
                <p className="font-medium text-2xl tracking-tight text-gray-600 mt-2 italic">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2 text-base text-gray-600 list-disc pl-5">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8 h-full">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt="Original IP concept art and story planning"
                  src="/whatWeDo/original-ip.jpg"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt="Production services crew filming on set"
                  src="/whatWeDo/production-services.jpg"
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt="Post-production editor color grading footage"
                  src="/whatWeDo/post-production.jpg"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt="Branded content shoot for a client campaign"
                  src="/whatWeDo/branded-content.jpg"
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
