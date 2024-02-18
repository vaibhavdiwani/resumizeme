import './App.css';
import DeleteAccount from './components/DeleteAccount';
import Footer from './components/Footer';
import PersonalInformation from './components/PersonalInformation';
import PremiumAccount from './components/PremiumAccount';
import Sidebar from './components/SideBar';
import SupportDetails from './components/SupportDetails';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-20 pt-8 pb-4 mainContent">
        <PremiumAccount />
        <PersonalInformation />
        <DeleteAccount />
        <SupportDetails />
        <Footer />
      </div>
    </div>
  );
}

export default App;
