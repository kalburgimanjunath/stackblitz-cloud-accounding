import { Sidebar } from '../components/';
import { useState } from 'react';
import { FD, MutualFunds, NFT, Property, Shares } from '../components/';
export default function Home() {
  const menuitems = [
    { title: 'Balance Sheet', link: './balance' },
    { title: 'FDs', link: './fds' },
    { title: 'Mutual Funds', link: './mutualfunds' },
    { title: 'NFT', link: './nfts' },
    { title: 'Shares', link: './shares' },
    { title: 'Property', link: './property' },
  ];
  const [selectedItem, onClickHandler] = useState();
  const RenderTabContent = () => {
    if (selectedItem == 'FDs') {
      return <FD />;
    } else if (selectedItem == 'Mutual Funds') {
      return <MutualFunds />;
    } else if (selectedItem == 'NFT') {
      return <NFT />;
    } else if (selectedItem == 'Shares') {
      return <Shares />;
    } else if (selectedItem == 'Property') {
      return <Property />;
    }
  };
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="grid-cols-1">
        <Sidebar menuitems={menuitems} onClickHandler={onClickHandler} />
      </div>
      <div className="grid-cols-2 p-2">
        <h1 className="font-bold">{selectedItem}</h1>
        <RenderTabContent />
      </div>
    </div>
  );
}
