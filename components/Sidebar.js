import Link from 'next/link';
export default function Sidebar({ menuitems, onClickHandler }) {
  return (
    <div>
      {menuitems.map((item) => {
        return (
          <div className="bg-gray-300 hover:bg-gray-400 cursor-pointer p-2">
            <div onClick={() => onClickHandler(item.title)}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}
