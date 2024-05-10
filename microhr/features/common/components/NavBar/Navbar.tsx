import Link from "next/link";
import { LoggedInWorkerNavbarMenu } from "./LoggedInNavbarWorkerMenu";
import { LoggedInNavbarCompanyMenu } from "./LoggedInNavbarCompanyMenu";
import { NoLoginNavbarMenu } from "./NoLogInNavbarMenu";
import { cookies } from "next/headers";
import { SessionType } from "@/middleware";
import Image from "next/image";

const logoLinkUrl = (sessionType: SessionType) => {
  switch (sessionType) {
    case "company":
      return "/company";
    case "worker":
      return "/worker";
    default:
      return "/";
  }
};

const determineMenuComponent = (sessionType: SessionType) => {
  switch (sessionType) {
    case "company":
      return <LoggedInNavbarCompanyMenu />;
    case "worker":
      return <LoggedInWorkerNavbarMenu />;
    default:
      return <NoLoginNavbarMenu />;
  }
};

const getNavbarBgColor = (sessionType: SessionType) => {
  switch (sessionType) {
    case "company":
      return "bg-cyan-400";
    case "worker":
      return "bg-red-400";
    default:
      return "bg-green-400";
  }
};

export const Navbar = () => {
  const sessionType = cookies().get("sessionType")?.value as SessionType;
  const MenuComponent = determineMenuComponent(sessionType);

  return (
    <nav
      className={`w-full p-2 mb-10 drop-shadow-lg ${getNavbarBgColor(
        sessionType
      )}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-3xl font-bold">
          <Link href={logoLinkUrl(sessionType)}>
            <Image
              src="/logo.png"
              alt="ロゴ"
              priority
              width={120}
              height={52}
              className="w-auto"
            />
          </Link>
        </h1>
        {MenuComponent}
      </div>
    </nav>
  );
};
