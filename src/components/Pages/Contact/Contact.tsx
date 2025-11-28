export default function Contact() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty ">
                Get in touch
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  Email
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:collaborate@example.com"
                        className="font-semibold text-indigo-600"
                      >
                        Info@cre8studios.com{" "}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  Phone
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">Phone number</dt>
                    <dd>Türkiye: +90 531 241 21 54</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>Qatar: +974 662 644 22</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty ">
                Locations
              </h2>
            </div>
            <div className="flex flex-col gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900 mb-2">
                  Istanbul, Türkiye
                </h3>
                <iframe
                  width="100%"
                  height="300"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3152.0!2d28.982212!3d41.102726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1700000000000"
                ></iframe>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900 mb-2">
                  Lusail, Qatar
                </h3>
                <iframe
                  width="100%"
                  height="300"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0000000000000!2d51.521623!3d25.387427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c3b7fc90e879%3A0xa51e806d1b7c1423!2sID8+Media!5e0!3m2!1sen!2s!4v1"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
