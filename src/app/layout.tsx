import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { GlobalStyles } from "./globalStyles";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Rock, Paper, Scissors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={barlowSemiCondensed.className}
        suppressHydrationWarning={true}
      >
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
