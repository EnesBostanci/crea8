import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/Template/FadeIn";

import { Container } from "@/components/Template/Container";
import { socialMediaProfiles } from "@/components/Layout/SocialMedia";
import Image from "next/image";

const logos = [
  { alt: "C8", src: "/8Group/C8.svg" },
  { alt: "ID8", src: "/8Group/ID8.svg" },
  { alt: "P8", src: "/8Group/P8.svg" },
  { alt: "R8", src: "/8Group/R8.svg" },
];
const navigation = [
  {
    title: "Our Work",
    links: [
      { title: "Our Projects", href: "/ourwork" },
      // {
      //   title: (
      //     <>
      //       See all <span aria-hidden="true">&rarr;</span>
      //     </>
      //   ),
      //   href: "/portfolio",
      // },
    ],
  },

  {
    title: "About Us",
    links: [
      // { title: "Home", href: "/" },
      { title: "What We Do", href: "/ourwork" },
      { title: "Our Story", href: "/about" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Let’s Connect",
    links: socialMediaProfiles,
  },
];

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-1  gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className=" text-sm font-semibold tracking-wider text-primary-800">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="flex  flex-col  items-center  gap-4  ">
            <Image
              className=" max-w-[300 px] lg:max-w-full"
              width={300}
              height={100}
              alt="The8GroupLogo"
              src={"The8GroupLogo.svg"}
            />
            <FadeInStagger faster>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {logos.map((logo) => (
                  <FadeIn key={logo.alt}>
                    <img
                      alt={logo.alt}
                      src={logo.src}
                      width={200}
                      height={48}
                      className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                  </FadeIn>
                ))}
              </div>
            </FadeInStagger>
          </div>

          <Navigation />
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-end gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          {/* <Link href="/" aria-label="Home">
            <Image
              height={230}
              width={171}
              alt="FooterLogo"
              src={"cre8Logos/blackLogo.svg"}
            />
          </Link> */}
          <p className="text-sm text-neutral-700 ">
            © CRE8 STUDIOS Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
