import MyTemplates from './MyTemplates';
import ResumizemeLogo from './images/Resumizeme.svg';
import UserIcon from './images/user.svg';
import SettingsIcon from './images/settings.svg';
import './../../App.css';
import './SideBar.css';

function Sidebar() {
  return (
    <div className="sideBar h-screen border-r borderColor fixed bg-white">
      <header className="px-2 py-3 border-b borderColor">
        <img src={ResumizemeLogo} className="App-logo" alt="Resumizeme-logo" />
      </header>
      <div className="overflow-y-auto sideBarMenus">
        <MyTemplates />
      </div>
      <div className="p-4 border-t borderColor">
        <div className="flex items-center gap-3">
          <img src={UserIcon} alt="user" />
          <div className="font-bold menuTitle grow">Carla</div>
          <img src={SettingsIcon} alt="settings" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
