import { IMenuItem } from "../../model";
import { formatDate, formatter } from "../../utils";
interface IItemDetailsProps {
  itemMenu: IMenuItem;
}
export const ItemDetails = ({ itemMenu }: IItemDetailsProps) => {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Menu Item Details
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Item Name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {itemMenu.internalName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Display Name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {itemMenu.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {itemMenu.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Created At
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formatDate(itemMenu.created)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Availability
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div
                  className={`flex-none rounded-full p-1 ${
                    itemMenu.available
                      ? "bg-emerald-500/20 "
                      : "bg-rose-500/20 "
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
              </div>{" "}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Price
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formatter.format(itemMenu.price)}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
