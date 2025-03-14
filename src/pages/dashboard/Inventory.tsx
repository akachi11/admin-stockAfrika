import { useEffect, useState } from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FiSearch, FiInfo, FiX } from "react-icons/fi";
import { CiBoxList } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import InventryTableRow from "../../components/dashboard/InventryTableRow";
import { Link } from "react-router-dom";
import { GoUpload } from "react-icons/go";
import { getToken } from "../../services/AuthServices";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Stock } from "../../types";
import { baseAPI } from "../../utils/apiUrls";

type LayoutType = "list" | "grid";

export default function Inventory() {
  const [tab, setTab] = useState<number>(0);
  const [layout, setLayout] = useState<LayoutType>("list");
  const [stocks, setStocks] = useState<Stock[]>([])
  const [fetchingStocks, setFetchingStocks] = useState<boolean>(false)
  const [sortedStocks, setSortedStocks] = useState<Stock[]>([])
  const [sortOption, setSortOption] = useState('last-added');
  const [activeStock, setActiveStock] = useState<Stock>()
  const [approveModal, setApproveModal] = useState<boolean>(false)

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortOption(value);
    sortItems(value);
  };

  const toggleStock = (stock?: Stock) => {
    if (stock) {
      setActiveStock(stock)
    }

    setApproveModal(true)
  }

  const approveStock = async (stockId?: string) => {
    if (stockId === undefined) return;

    setStocks(prevStocks =>
      prevStocks.map(stock =>
        stock.stock_id === stockId ? { ...stock, approved: true } : stock
      )
    );

    setApproveModal(false)

    try {
      const token = getToken();
      const response = await axios.patch(
        `${baseAPI}/contributor/approve-stock/${stockId}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response)
    } catch (error) {
      console.log(error);
    }

    setActiveStock(undefined)
  };

  const sortItems = (option: string) => {
    let sortedItems = [...stocks];
    if (option === 'last-added') {
      sortedItems.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    } else if (option === 'approved') {
      sortedItems = sortedItems.filter(item => item.approved === true);
    } else if (option === 'not-approved') {
      sortedItems = sortedItems.filter(item => item.approved === false);
    }
    setSortedStocks(sortedItems);
  };

  const fetchStocks = async () => {
    setFetchingStocks(true)
    try {
      const token = getToken();
      const response = await axios.get(
        `${baseAPI}/contributor/all-stocks/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setFetchingStocks(false)
      setStocks(response?.data);
      setSortedStocks(response?.data);
    } catch (error) {
      console.log(error);
      setFetchingStocks(false)
    }
  };

  useEffect(() => {
    fetchStocks()
  }, [])

  useEffect(() => {
    sortItems(sortOption);
  }, [stocks, sortOption]);

  return (
    <section className="lg:h-[100%] flex lg:flex-row flex-col-reverse gap-5">
      <div className="lg:w-[100%] h-auto lg:h-auto w-full bg-white rounded-3xl overflow-hidden shadow py-9 lg:px-8 px-4">
        <div className="flex items-center justify-between mb-5 lg:mb-0">
          <div className="flex items-center lg:gap-2">
            <p className="text-[15px] font-bold leading-[18px]">My Inventory</p>
            <button className="border-none outline-none text-[#B0B0B0] text-lg">
              <RxOpenInNewWindow />
            </button>
          </div>
          <div className="hidden lg:flex gap-6">
            <button
              onClick={() => setTab(0)}
              className={`${tab === 0
                ? "text-accent border-accent font-semibold"
                : "text-primary_black border-transparent"
                } py-4 border-b-2 transition-all duration-200 ease-linear text-xs`}
            >
              All ({stocks.length})
            </button>
            <button
              onClick={() => setTab(1)}
              className={`${tab === 1
                ? "text-accent border-accent font-semibold"
                : "text-primary_black border-transparent"
                } py-4 border-b-2 transition-all duration-200 ease-linear text-xs`}
            >
              Photos
            </button>
            <button
              onClick={() => setTab(2)}
              className={`${tab === 2
                ? "text-accent border-accent font-semibold"
                : "text-primary_black border-transparent"
                } py-4 border-b-2 transition-all duration-200 ease-linear text-xs`}
            >
              Videos
            </button>
            <button
              onClick={() => setTab(3)}
              className={`${tab === 3
                ? "text-accent border-accent font-semibold"
                : "text-primary_black border-transparent"
                } py-4 border-b-2 transition-all duration-200 ease-linear text-xs`}
            >
              Illustrations
            </button>
            <div className="flex items-center">
              <div className="h-[20%] w-[1px] bg-[#B0B0B0]"></div>
              <button
                onClick={() => setTab(4)}
                className={`${tab === 4
                  ? "text-accent border-accent font-semibold"
                  : "text-primary_black border-transparent"
                  } py-4 px-3 border-b-2 transition-all duration-200 ease-linear text-xs`}
              >
                Collections
              </button>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="text-[10px] rounded-full border border-primary_black outline-none pl-8 pr-2 py-2"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <FiSearch />
            </div>
          </div>
        </div>
        <div className="bg-primary_black w-full h-[1px] mb-5"></div>
        <div className="flex items-center justify-between mb-3">
          {/* sort by */}
          <div className="flex items-center font-medium">
            <p className="text-neutral-500">Sort by :</p>
            <select
              name="sort"
              id="sort"
              className="font-medium outline-none border-none"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="last-added">Last Added</option>
              <option value="approved">Approved</option>
              <option value="not-approved">Not Approved</option>
            </select>
          </div>
          {/* layout */}
          <div className="flex items-center text-[8px]">
            <p className="text-[#535353]">Layout : &nbsp;</p>
            <div className="flex gap-1">
              <button
                onClick={() => setLayout("grid")}
                className={`${layout === "grid" && "text-accent"
                  } outline-none border-none`}
              >
                <IoGridOutline size={15} />
              </button>
              <button
                onClick={() => setLayout("list")}
                className={`${layout === "list" && "text-accent"
                  } outline-none border-none`}
              >
                <CiBoxList size={15} />
              </button>
            </div>
          </div>
        </div>
        {/* table */}
        <div
          // className={`${
          //   layout === "grid" ? "grid grid-cols-2 gap-5" : ""
          // } overflow-y-scroll h-full pb-[85px] pr-5 duration-200 transition-all ease-linear`}
          className="text-center"
        >
          {fetchingStocks ?
            <LoadingSpinner />
            : sortedStocks.length > 0 ?
              <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,max-content))] justify-start gap-4">
                {sortedStocks.map((stock, i) => (
                  <InventryTableRow setStock={toggleStock} stock={stock} key={i} />
                ))}
              </div>
              :
              (<>
                No assets in inventory
                <button className="outline-none rounded-full border border-black m-auto mt-2 flex items-center px-3 py-1 gap-1">
                  <GoUpload size={20} />
                  <Link to={"/uploads"}>
                    <p className="font-medium text-[15px]">Upload</p>
                  </Link>
                </button>
              </>)
          }
        </div>
      </div>

      {approveModal &&
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 relative rounded-lg shadow-lg mt-4 w-[90%] lg:w-[65%] max-h-[70%] overflow-auto">
            <div onClick={() => setApproveModal(false)} className="absolute top-4 right-4 cursor-pointer text-black">
              <FiX size={20} />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center">
              <div className="flex-[2]">
                <h2 className="text-lg font-semibold mb-1">{activeStock?.description}</h2>

                <p className="text-xs mb-2">#{activeStock?.stock_id}</p>

                <img src={activeStock?.main_file} className="w-full bg-neutral-200 h-[400px] bg-red object-contain" alt="" />
              </div>
              <div className="flex-[1] mt-4 flex flex-col gap-4">
                <div className="flex gap-8">
                  <div>
                    <p className="font-semibold text-sm flex items-center gap-1">File Type <FiInfo /></p>
                    <p className="mt-2 text-xs font-light bg-neutral-100 border-neutral-200 text-center text-neutral-500 border-[1px] rounded-md">{activeStock?.type}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm flex items-center gap-1">Usage Type <FiInfo /></p>
                    <p className="mt-2 text-xs font-light bg-neutral-100 border-neutral-200 text-center text-neutral-500 border-[1px] rounded-md">Commercial</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-sm flex items-center gap-1">Keywords <FiInfo /></p>

                  <div className="mt-2 flex gap-2 flex-wrap">
                    {activeStock?.keywords.map((keyword, i) => (
                      <p key={i} className="text-xs bg-neutral-100 text-neutral-500 px-2 py-1 rounded-md">{keyword}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" disabled checked={activeStock?.matured_content} />
                  <p className="text-xs text-neutral-500">Mature Content</p>
                </div>

                <div>
                  <p className="font-semibold flex items-center gap-2">Release form <FiInfo /></p>

                  <a className="text-xs text-accent" href={activeStock?.main_file}>Release form</a>
                </div>

                {activeStock?.approved ?
                  <div className="mt-4 px-4 py-2 border-green-300 text-xs border-[1px] text-green-300 rounded-3xl w-[150px] text-center m-auto">Approved</div>
                  :
                  <div className="flex gap-4">
                    <button onClick={() => { approveStock(activeStock?.stock_id) }} className="mt-4 px-4 py-2 border-green-600 text-xs border-[1px] text-green-600 rounded-3xl w-[150px]">Approve Stock</button>
                    <button onClick={() => { setApproveModal(false) }} className="w-[150px] mt-4 px-4 py-2 border-red-600 text-xs border-[1px] text-red-600 rounded-3xl">Reject Stock</button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      }

    </section>
  );
}
