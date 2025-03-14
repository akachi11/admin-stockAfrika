import { Stock } from "../../types";

interface InventoryItemProps {
  stock: Stock
  setStock: (stock: Stock) => void
}

const InventoryTableRow: React.FC<InventoryItemProps> = ({ stock, setStock }) => {
  return (
    <div onClick={() => { setStock(stock) }} className="p-4 flex flex-col bg-slate-50 hover:bg-slate-200 cursor-pointer rounded-md" title={stock.description}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-[100px] h-[100px] cursor-pointer rounded overflow-auto">
          <img
            className="w-full h-full object-cover"
            src={stock.main_file}
            alt="Inventory item"
          />
        </div>
        <div className="w-[150px] h-[40px] overflow-hidden">
          <p className="font-semibold text-xs leading-[14px] line-clamp-2">
            {stock.description}
          </p>
          <p className="text-gray-600 text-xs mt-2">13/03/2023</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryTableRow;