"use client";
import { NavConfig } from "@/app/common/model/navConfig.model";
import clsx from "clsx";
import {
  DirectboxReceive,
  DirectboxSend,
  DocumentText,
  Edit2,
  Home,
  MessageQuestion,
} from "iconsax-reactjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
interface SideItemProp {
  item: NavConfig;
}
const SideItem = ({ item }: SideItemProp) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href);
  // const [open, setOpen] = useState(isActive);

  return (
    <li>
      <Link
        href={item.href}
        className={clsx(
          "flex items-center p-2 text-(--purple-900) hover:text-white rounded-lg  hover:bg-(--purple-900)  group",
          {
            "text-white rounded-lg  bg-(--purple-900)": isActive,
          }
        )}
      >
        {iconMap[item.icon]}
        <span className="ms-3">{item.label} </span>
      </Link>
    </li>
  );
};

const iconMap: Record<string, JSX.Element> = {
  home: <Home />,
  directboxreceive: <DirectboxReceive />,
  directboxsend: <DirectboxSend />,
  edit: <Edit2 />,
  history: <DocumentText />,
  help: <MessageQuestion />,
};

export default SideItem;
