import { Inter } from "next/font/google";
import GlobalStyles from "./_ui/styles/globals";
import StyledComponentsRegistry from "./_lib/registry";
import ThemeWrapper from "./_ui/styles/themeing";
import { Kaushan_Script } from "next/font/google";

// fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushanScript",
});

export const metadata = {
  title: "Sloppy | Restaurant",
  description: "Sloppy restaurant web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${kaushanScript.variable}`}
      >
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeWrapper>{children}</ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
