import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import LoadingScreen from '../loading-screen/loading-screen'

import './telegram-screen.scss';

const TelegramScreen = () => {
  
  const [copied, setCopied] = useState(false);
  
  const tgBotLink = `https://t.me/T800CBRDev_bot`;

  const code = useSelector(({LEADERS}) => LEADERS.code);

  if (!code) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="telegram">
      <span 
        className="telegram__text">
          Спасибо за регистрацию! Сохраните этот код и отправьте его нашему боту в telegram
      </span>

      <div className="telegram__block">
        <span className="telegram__code">{code}</span>

        <CopyToClipboard text={code}
            onCopy={() => setCopied(true)}>
            <button 
              className="telegram__action"
              type="button">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z">
                </path>
              </svg>
              </button>
        </CopyToClipboard>
      </div>

      {copied 
        ? <span className="telegram__copied">код скопирован в буфер обмена!</span>
        : null}

      <a
        className="telegram__link"
        href={tgBotLink}
        target='_blank' >
        Перейти в телеграм бот
      </a>
    </div>
  )
};

export default TelegramScreen;