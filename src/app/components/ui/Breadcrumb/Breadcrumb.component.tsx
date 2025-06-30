"use client";

import { ArrowRight2 } from "iconsax-reactjs";
import Typography from "../Typography/Typography.component";


interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
  icon?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({items}: BreadcrumbProps) {
  return (
    <nav className="flex py-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index)=> {
          const isFirst = index === 0
          const icon =
            isFirst ? (
             <></>
            ) : (
              <ArrowRight2 className="m-2" size={16} color="#46009B"/>
            )
          // const isLast = index === items.length -1

          return (
            <li key={index} aria-current={item.current ? 'page' : undefined}>
              <div className="flex items-center">
                {!isFirst && icon}
                {item.current ? (
                  <Typography variant="bodyL" weight="semibold" className="text-[#FF950A]">
                    {item.label}
                  </Typography>
                  // <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  //   {item.label}
                  // </span>
                ) : (
                  <Typography variant="heading3" weight="semibold" className="text-[#FF7D00] cursor-pointer">
                    {item.label}
                  </Typography>
                  // <a
                  //   href={item.href}
                  //   className={clsx(
                  //     'inline-flex items-center text-sm font-medium',
                  //     isFirst
                  //       ? 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                  //       : 'ms-1 md:ms-2 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                  //   )}
                  // >
                  //    {isFirst && icon}
                  //   {item.label}
                  // </a>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  );
}
