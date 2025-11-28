const services = [
  {
    title: "Original IPs & Content Development",
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
          <p className="text-base/7 font-semibold text-indigo-600">
            What we do
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-pretty  sm:text-5xl">
            We specialise in original IPs, film and series, and full production
            services, covering every step of the journey:
          </h1>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8 space-y-12">
            {services.map((service) => (
              <div key={service.title}>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  {service.title}
                </h2>

                <ul className="mt-4 space-y-2 text-base/7 text-gray-600 list-disc pl-5">
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
