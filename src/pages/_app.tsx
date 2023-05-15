import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import type { GetSiweMessageOptions } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { env } from "../env.mjs"
import { NextSeo } from "next-seo";

import "~/src/styles/globals.css";

const { chains, provider } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: env.NEXT_PUBLIC_ALCHEMY_ID }), publicProvider()]
);
const {connectors} = getDefaultWallets({
  appName: "tagsio",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: "Sign in to TagsIO",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
        {/* @todo */}
          <NextSeo
        titleTemplate="tagsio"
        defaultTitle="tagsio"
        description=""
        openGraph={{
          url: "",
          title: "",
          description: "",
          images: [
            {
              url: "",
              alt: "",
              type: "image/jpeg",
            },
          ],
          site_name: "",
        }}
        twitter={{
          handle: "",
          site: "",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          // {
          //   rel: "stylesheet",
          //   href: "https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
          // }
        ]}
      />
    <SessionProvider session={session}>
       <WagmiConfig client={wagmiClient}>
       <RainbowKitSiweNextAuthProvider
            getSiweMessageOptions={getSiweMessageOptions}
          >
            <RainbowKitProvider chains={chains}>
      <Component {...pageProps} />
      </RainbowKitProvider>
      </RainbowKitSiweNextAuthProvider>
      </WagmiConfig>
    </SessionProvider>
    </>
  );
};

export default MyApp;
