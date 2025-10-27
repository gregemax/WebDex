import React from "react";

import Link from "next/link";
import { FaGithub, FaXTwitter, FaDiscord } from "react-icons/fa6"

let currentYear: number = new Date().getFullYear();

export interface FooterLinkItem {
  id: number;
  label: string;
  url: string;
}

export interface FooterLinkGroup {
  id: number;
  title: string;
  links: FooterLinkItem[];
}

// footerData.ts (or above Footer component)
export const footerLinks: FooterLinkGroup[] = [
  {
    id: 1,
    title: "Products",
    links: [
      { id: 1, label: "Wallet", url: "https://wallet.uniswap.org/" },
      { id: 2, label: "UniswapX", url: "https://x.uniswap.org/" },
      { id: 3, label: "API", url: "https://www.unichain.org/" },
      { id: 4, label: "Unichain", url: "https://www.unichain.org/" },
    ],
  },
  {
    id: 2,
    title: "Protocol",
    links: [
      { id: 1, label: "Vote", url: "https://vote.uniswapfoundation.org/" },
      { id: 2, label: "Governance", url: "https://uniswap.org/governance" },
      { id: 3, label: "Developers", url: "https://uniswap.org/developers" },
    ],
  },
  {
    id: 3,
    title: "Company",
    links: [
      { id: 1, label: "Docs", url: "https://about.uniswap.org/" },
      { id: 2, label: "GitHub", url: "https://github.com/Olorunshogo/WebDex/" },
      { id: 3, label: "Blog", url: "https://blog.uniswap.org/" },
      {
        id: 4,
        label: "Brand Aseets",
        url: "https://github.com/Olorunshogo/WebDex",
      },
    ],
  },
  {
    id: 4,
    title: "Need help?",
    links: [
      { id: 1, label: "Help Center", url: "https://help.uniswap.org/" },
      {
        id: 2,
        label: "Contact",
        url: "https://support.uniswap.org/hc/en-us/requests/new",
      },
    ],
  },
];

const socialLinks = [
  { id: 1, label: "GitHub", url: "https://github.com/Olorunshogo/WebDex", icon: <FaGithub /> },
  { id: 2, label: "X", url: "https://x.com/Uniswap", icon: <FaXTwitter /> },
  { id: 3, label: "Discord", url: "https://discord.gg/uniswap", icon: <FaDiscord /> },
];


/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="min-h-0 py-5 px-4 lg:px-6 mt-12 mb-11 lg:mb-0 w-full max-w-7xl mx-auto">
      <div className="w-full">
        {/* <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="text-center">&#xA9; Cohort 7 BlockheaderWeb3</div>
          </div>
        </ul> */}

        <div className="flex flex-col gap-6 w-full">
          {/* First Footer (dynamic grid) */}
          {/* <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="group text-white text-2xl transition-all duration-300"
                >
                  <span
                    className={`
                      flex
                      transition-all duration-300 
                      group-hover:rotate-45 
                      group-hover:scale-125
                      ${item.label === "GitHub" ? "group-hover:text-green-400" : ""}
                      ${item.label === "X" ? "group-hover:text-sky-400" : ""}
                      ${item.label === "Discord" ? "group-hover:text-blue-500" : ""}
                    `}
                  >
                    {item.icon}
                  </span>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {footerLinks.map((group) => (
                <div key={group.id} className="flex flex-col gap-4 p-2 lg:p-4">
                  <div className="text-white lg:text-lg font-semibold">
                    {group.title}
                  </div>
                  {group.links.map((link) => (
                    <li
                      key={link.id}
                      className="text-sm lg:text-base font-medium list-none"
                    >
                      <Link
                        href={link.url}
                        className="text-white hover:text-gray-500 cursor-pointer duration-300 ease-in-out transition-all"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </div>
              ))}
            </div>

          </div> */}


          {/* Second Footer */}
          <div className="flex items-center justify-between gap-2 text-sm font-medium">
            <div className="flex items-center gap-2 text-white">
              &copy;
              <span>{currentYear}</span>
              Cohort 7 blockheaderWeb3
            </div>

            <div className="flex items-center gap-4">
              <Link
                href={"/privacy"}
                className="text-gray-500 hover:text-white cursor-pointer duration-300 ease-in-out transition-all"
              >
                Privacy Policy
              </Link>

              <Link
                href={"/trademark"}
                className="text-gray-500 hover:text-white cursor-pointer duration-300 ease-in-out transition-all"
              >
                Trademark Policy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
