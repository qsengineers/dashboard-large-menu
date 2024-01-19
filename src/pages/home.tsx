import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Header,
  SearchBar,
  ItemList,
  Modal,
  Item,
  ItemDetails,
} from "../components";
import { menuService } from "../services";
import { IMenuItem } from "../model";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState<IMenuItem[]>([]);
  const [selected, setSelected] = useState<IMenuItem | null>(null);

  const loadMenu = useCallback(async () => {
    try {
      const response = await menuService.getMenu();
      setItems(response.data);
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    loadMenu();
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  return (
    <div className="min-h-full">
      <Header>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Header>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Menu
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-8">
          <ItemList>
            {
              filteredItems.map((itemMenu) => (
                <Item
                  key={itemMenu.id}
                  itemMenu={itemMenu}
                  setSelected={setSelected}
                />
              )) as PropsWithChildren
            }
          </ItemList>
        </div>
      </main>
      <Modal show={!!selected} onClose={() => setSelected(null)}>
        {selected && <ItemDetails itemMenu={selected} />}
      </Modal>
    </div>
  );
};
