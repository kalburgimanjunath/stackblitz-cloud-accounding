import Link from 'next/link';
export default function Sidebar({ menuitems, onClickHandler }) {
  return (
    <div className="shadow-md bg-white h-full w-lg">
      {menuitems.map((item) => {
        return (
          <div className="hover:bg-gray-400 cursor-pointer p-4">
            <div onClick={() => onClickHandler(item.title)}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}
