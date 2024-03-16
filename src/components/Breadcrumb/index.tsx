import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";
import Link from "next/link";

import styles from "./Breadcrumb.module.css";

interface BreadcrumbProps {
  breads: {
    title: string;
    href: string;
  }[];
}

const Breadcrumb = ({ breads }: BreadcrumbProps) => {
  return (
    <ChakraBreadcrumb>
      {breads.map((item, index) => {
        return (
          <BreadcrumbItem
            key={index}
            isCurrentPage={index === breads.length - 1}
          >
            <Link href={item.href}>{item.title}</Link>
          </BreadcrumbItem>
        );
      })}
    </ChakraBreadcrumb>
  );
};

export default Breadcrumb;
