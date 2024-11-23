import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, LikedIcon, HistoryIcon, SubscriptionsIcon, DashboardIcon, YourChannelIcon, SupportIcon} from "./Icons";

const upperLinks = [
  { name: "Home", to: "/", Icon: HomeIcon },
  { name: "Liked Videos", to: "/liked-videos", Icon: LikedIcon },
  { name: "History", to: "/history", Icon: HistoryIcon },
  { name: "Subscriptions", to: "/subscriptions", Icon: SubscriptionsIcon },
  
];

const belowLinks = [
  { name: "Dashboard", to: "/dashboard", Icon: DashboardIcon },
  { name: "Your Channel", to: "/your-channel", Icon: YourChannelIcon },
  { name: "Support", to: "/support", Icon: SupportIcon },
]

export default function Sidebar() {
  return (
    <div className="h-[880px] bg-transparent border-r-2 border-zinc-600 w-[250px] flex flex-col justify-between">
      <div className="flex flex-col gap-2 p-3">
        {upperLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-lg ${
                isActive ? "bg-zinc-700" : "hover:bg-zinc-700"
              }`
            }
          >
            <link.Icon />
            <p className="text-xl font-semibold">{link.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col gap-1 p-5">
        {belowLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-lg ${
                isActive ? "bg-zinc-700" : "hover:bg-zinc-700"
              }`
            }
          >
            <link.Icon />
            <p className="text-xl font-semibold">{link.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

