import { Input, Checkbox } from '@material-tailwind/react';
import UserBigIcon from './images/user-big.svg';
import GreenTickIcon from './images/green-tick.svg';
import './PersonalInformation.css';

function PersonalInformation() {
  return (
    <div className="mt-8">
      <div className="personalInformationTitle font-semibold">
        Personal Information
      </div>
      <div className="mt-4 flex gap-4">
        <div className="grow">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <Input label="First Name" size="lg" value="Petter" />
            </div>
            <div>
              <Input label="Last Name" size="lg" value="Cetera" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div>
              <Input label="City" size="lg" value="London" />
            </div>
            <div>
              <Input label="Postal Code" size="lg" value="E2 4XF" />
            </div>
          </div>
          <div class="grid grid-cols mt-6">
            <div>
              <Input label="Address" size="lg" value="123 Example" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div>
              <Input
                label="Email"
                size="lg"
                value="petter@gmail.com"
                type="email"
                icon={<img src={GreenTickIcon} alt="email-validated" />}
              />
            </div>
            <div>
              <Input label="Phone" size="lg" value="+442223334444" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div>
              <Input
                label="Password"
                size="lg"
                value="Password"
                type="password"
              />
            </div>
          </div>
          <div className="notificationDisclaimerText mt-4">
            Use this email to log in to your{' '}
            <a href="resumedone.io" target="_blank">
              resumedone.io
            </a>{' '}
            account and receive notifications.
          </div>
        </div>
        <div>
          <img src={UserBigIcon} alt="user-avatar" />
        </div>
      </div>
      <div className="mt-4">
        <button className="saveButton font-semibold text-white rounded">
          Save
        </button>
      </div>
      <div className="mt-6">
        <Checkbox
          label={
            <div className="hirethesbestDisclaimer font-medium">
              Show my profile to serious employers on{' '}
              <a href="hirethesbest.io" target="_blank">
                hirethesbest.io
              </a>{' '}
              for free
            </div>
          }
        />
      </div>
    </div>
  );
}

export default PersonalInformation;
