import CareerIcon from './images/career.svg';
import './PremiumAccount.css';

function PremiumAccount() {
  return (
    <div className="premiumAccountContainer flex items-center gap-4 p-6 rounded-lg">
      <div>
        <div className="careerContainer p-3 bg-white rounded-full">
          <div>
            <img src={CareerIcon} alt="career" />
          </div>
        </div>
      </div>
      <div className="text-white">
        <div className="premiumAccountTitle font-semibold">Premium Account</div>
        <div className="premiumAccountDescription font-medium mt-1">
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </div>
      </div>
    </div>
  );
}

export default PremiumAccount;
