import { IMenuItem } from "../../model";
import { formatDate } from "../../utils";

interface IItemProps {
  itemMenu: IMenuItem;
  setSelected: React.Dispatch<React.SetStateAction<IMenuItem | null>>;
}

export const Item = ({ itemMenu, setSelected }: IItemProps) => {
  return (
    <li
      key={itemMenu.id}
      className="flex cursor-pointer justify-between gap-x-6 py-5"
      onClick={() => setSelected(itemMenu)}
    >
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {itemMenu.name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {itemMenu.id}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Created At {formatDate(itemMenu.created)}
        </p>
        <div className="mt-1 flex items-center gap-x-1.5">
          <div
            className={`flex-none rounded-full p-1 ${
              itemMenu.available ? "bg-emerald-500/20 " : "bg-rose-500/20 "
            }`}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full ${
                itemMenu.available ? "bg-emerald-500" : "bg-rose-500"
              }`}
            ></div>
          </div>
          <p className="text-xs leading-5 text-gray-500">
            {itemMenu.available ? "Available" : "Unavailable"}
          </p>
        </div>
      </div>
    </li>
  );
};
