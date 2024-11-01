import {
  IconChartBar,
  IconListDetails,
  IconStopwatch,
  IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";

const Nav = () => {
  const iconClassname =
    "w-12 h-12 text-white p-2 rounded-full hover:bg-primary-600";
  const links = [
    { href: "/", icon: <IconStopwatch className={iconClassname} /> },
    {
      href: "/projects",
      icon: <IconListDetails className={iconClassname} />,
    },
    { href: "/stats", icon: <IconChartBar className={iconClassname} /> },
    { href: "/settings", icon: <IconUserCircle className={iconClassname} /> },
  ];

  return (
    <nav className="w-full max-w-screen-xl m-auto">
      <ul className="flex justify-end items-center p-2 gap-4">
        {links.map(({ href, icon }) => (
          <li key={href}>
            <Link href={href}>{icon}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

type NavigationItemProps = {
  href: string;
  icon: React.ReactNode;
};

export default Nav;
