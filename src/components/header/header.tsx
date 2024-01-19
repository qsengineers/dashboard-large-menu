import { ReactChildren } from "react";

interface IHeaderProps {
  children: JSX.Element;
}

export const Header = ({ children }: IHeaderProps) => {
  return (
    <nav className="sticky top-0 z-10  bg-gray-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className=" flex">{children}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
