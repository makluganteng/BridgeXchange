import Link from "next/link";
import Image from "next/image";
import openseaLogo from "../assets/opensea.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import WalletButton from "./WalletButton";

const style = {
  wrapper: `bg-[#ded3a9] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#f3efe0] rounded-[0.8rem] hover:bg-[#f3efe0]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#6d67e4]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-[#6d67e4] px-4 font-bold text-[#6d67e4] hover:text-white cursor-pointer`,
  headerIcon: `text-[#6d67e4] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

export default function Header({
  setPanel,
}: {
  setPanel: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image
            src={openseaLogo}
            height={40}
            width={40}
            alt="image of opensea"
          />
          <div className={style.logoText}>Opensea</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className={style.headerItems}>
        <Link href="/collections/0x66a576A977b7Bccf510630E0aA5e450EC11361Fa">
          <div className={style.headerItem}> Collections </div>
        </Link>
        <div className={style.headerItem}> Stats </div>
        <div className={style.headerItem}> Resources </div>
        <div className={style.headerItem}> Create </div>
        <Link href="/profile">
          <div className={style.headerIcon}>
            <CgProfile />
          </div>
        </Link>
        <div className={style.headerIcon}>
          <WalletButton setPanel={setPanel}></WalletButton>
        </div>
      </div>
    </div>
  );
}
