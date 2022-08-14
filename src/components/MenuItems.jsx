import React, {useState} from 'react';
import GuildModal from './Modals/GuildModal';
import CypherModal from './Modals/CypherModal';


function MenuItems(props) {

  const [cypherModal, setCypherModal] = useState(false);
  const [guildModal, setGuildModal] = useState(false);

  const handleCypherModalOpen = () => {
    setCypherModal(true);
  };

  const handleGuildModalOpen = () => {
    setCypherModal(true);
  };

  const goDownToRenounSection = () => {
    window.scrollBy({
      top: findPos(document.getElementById("mint-section")),
      behavior: 'smooth'
    })
  }


  return (
    <ul className="pt-10">
      <li></li>
      <li onClick={handleCypherModalOpen} className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-lightGrey`}>
        <img src={`./assets/icons/storefont.png`} className='w-6 h-6'/>
        <span className={`${!props.open && 'hidden'} origin-left duration-200`}>Storefront</span>
      </li>
      <CypherModal visible={cypherModal} setCypherModal={setCypherModal} />
      <li onClick={handleCypherModalOpen} className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-lightGrey`}>
        <img src={`./assets/icons/wayfare.png`} className='w-6 h-6'/>
        <span className={`${!props.open && 'hidden'} origin-left duration-200`}>Wayfare</span>
      </li>
      <li onClick={handleGuildModalOpen} className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-9 hover:bg-lightGrey`}>
        <img src={`./assets/icons/storefont.png`} className='w-6 h-6'/>
        <span className={`${!props.open && 'hidden'} origin-left duration-200`}>Guilds</span>
      </li>
      <GuildModal visible={guildModal} setGuildModal={setGuildModal} />
      <li className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-lightGrey`}>
        <img src={`./assets/icons/wayfare.png`} className='w-6 h-6'/>
        <span className={`${!props.open && 'hidden'} origin-left duration-200`}>Instructables</span>
      </li>
      <li className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-lightGrey`}>
        <img src={`./assets/icons/wayfare.png`} className='w-6 h-6'/>
        <span className={`${!props.open && 'hidden'} origin-left duration-200`}>Renewables</span>
      </li>
      <li onClick={handleCypherModalOpen} className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-lightGrey`}>
        <img src={`./assets/icons/wayfare.png`} className='w-6 h-6'/>
        <span className={`${!props.open && 'hidden'} origin-left duration-200`}>Explore Realms</span>
      </li>
    </ul>
  )
}

export default MenuItems