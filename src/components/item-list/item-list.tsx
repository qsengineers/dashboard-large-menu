import { Children, ReactElement, cloneElement } from "react";
import type { PropsWithChildren } from "react";
import { Item } from "../item";

interface IItemListProps {
  children: PropsWithChildren;
}

export const ItemList = ({ children }: IItemListProps) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {Children.map(children, (child) => {
        if (typeof child === "string") {
          return child;
        }

        return cloneElement(child as ReactElement, {});
      })}
    </ul>
  );
};
