import React from 'react';
import './call-on-number.scss';

interface CallOnNumberProps {
  phoneNumber: string | undefined;
  cancel: React.Dispatch<React.SetStateAction<boolean>>;
}

const CallOnNumber: React.FC<CallOnNumberProps> = ({ phoneNumber, cancel }) => {
  return (
    <div className="call-container">
      <button className="call-container__phone-number call-container__btn">
        {phoneNumber ? phoneNumber : 'N/A'}
      </button>
      <button className="call-container__cancel call-container__btn" onClick={() => cancel(false)}>
        Cancel
      </button>
    </div>
  );
};

export default CallOnNumber;
