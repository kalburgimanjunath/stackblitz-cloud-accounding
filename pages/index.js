import { Sidebar } from '../components/';
import { useState } from 'react';
export default function Home() {
  const menuitems = [
    { title: 'Balance Sheet', link: './balance' },
    { title: 'FDs', link: './fds' },
    { title: 'Mutual Funds', link: './mutualfunds' },
    { title: 'NFTs', link: './nfts' },
    { title: 'Shares', link: './shares' },
    { title: 'Property', link: './property' },
  ];
  const [selectedItem, onClickHandler] = useState();

  return (
    <div className="grid grid-cols-2">
      <div className="grid-cols-1">
        <Sidebar menuitems={menuitems} onClickHandler={onClickHandler} />
      </div>
      <div className="grid-cols-2 p-2">
        <h1 className="font-bold">{selectedItem}</h1>
      </div>
    </div>
  );
}
