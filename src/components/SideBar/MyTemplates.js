import { MY_BOARDS, MY_TEMPLATES } from './SideBarConfig';
import MyTemplatesIcon from './images/my-templates.svg';
import SearchIcon from './images/search.svg';
import PastTemplatesIcon from './images/past-template.svg';
import StartIcon from './images/star.png';
import MyBoardsIcon from './images/my-boards.svg';
import MyBoardIcon from './images/my-board.png';
import LockIcon from './images/lock.png';
import MiniAddIcon from './images/mini-add.svg';
import './SideBar.css';

function MyTemplates() {
  const getMyTemplates = () => {
    return MY_TEMPLATES.map((template) => (
      <div key={template.id} className="flex items-center gap-1.5 px-1 py-2">
        {template.isFavorite ? (
          <div className="flex items-center">
            <img src={StartIcon} alt="start-template" />
          </div>
        ) : (
          <div className="flex items-center">
            <img
              src={PastTemplatesIcon}
              alt="my-template"
              className="max-w-fit"
            />
          </div>
        )}
        <div className="text-ellipsis overflow-hidden whitespace-nowrap font-medium menuItemTitle">
          {template.title}
        </div>
      </div>
    ));
  };
  const getMyBoards = () => {
    return MY_BOARDS.map((board) => (
      <div key={board.id} className="flex items-center gap-1.5 px-1 py-2">
        {board.isLocked ? (
          <div className="flex items-center">
            <img src={LockIcon} alt="start-template" />
          </div>
        ) : (
          <div className="flex items-center">
            <img src={MyBoardIcon} alt="my-template" />
          </div>
        )}
        <div className="text-ellipsis overflow-hidden whitespace-nowrap font-medium menuItemTitle">
          {board.title}
        </div>
      </div>
    ));
  };

  return (
    <div className="px-1 py-2">
      <div className="flex items-center gap-1.5 px-1 py-2">
        <img src={MyTemplatesIcon} alt="my-templates" />
        <div className="font-bold menuTitle">My templates</div>
      </div>
      <div className="flex items-center gap-1.5 px-1 py-2">
        <img src={SearchIcon} alt="search-template" />
        <div className="font-bold menuTitle">Search</div>
      </div>
      <div>{getMyTemplates()}</div>
      <div className="flex items-center gap-1.5 px-1 py-2">
        <img src={MyBoardsIcon} alt="my-boards" />
        <div className="grow font-bold menuTitle">My boards</div>
        <img src={MiniAddIcon} alt="my-boards" className="cursor-pointer" />
      </div>
      <div>{getMyBoards()}</div>
    </div>
  );
}

export default MyTemplates;
