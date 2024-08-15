import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navigation } from "@/constants/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#180735] mt-10 py-10 text-zinc-300">
      <Container className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-left">
        <Logo className="text-white mb-4 md:mb-0" spanClassName="bg-white text-black" />
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center md:justify-start mb-4 md:mb-0">
          {navigation.map((item) => (
            <li key={item._id} className="hover:text-white duration-200">
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <p className="text-lg md:text-right">Made By Ibrahim Shebl</p>
      </Container>
    </div>
  );
};

export default Footer;
