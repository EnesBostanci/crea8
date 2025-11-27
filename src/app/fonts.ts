import localFont from "next/font/local";

export const nadea = localFont({
  src: [
    {
      path: "../../public/fonts/nadea/Nadea-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/nadea/Nadea-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/nadea/Nadea-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/nadea/Nadea-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/nadea/Nadea-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-nadea",
});
