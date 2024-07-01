import { BrowserRouter, useLocation } from 'react-router-dom';
import {
  AppLayout,
  HelpPanel,
  SideNavigation,
} from '@cloudscape-design/components';
import I18nProvider from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.ko';
import { useState } from 'react';
import Routers from './components/router';

const LOCALE = 'ko';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  const [navi, setNavi] = useState(true);
  const [helpPanel, setHelpPanel] = useState(false);

  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      {window.location.pathname.startsWith('/auth') ? (
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      ) : (
        <AppLayout
          navigationOpen={navi}
          onNavigationChange={() => setNavi((e) => (!e ? true : false))}
          navigation={
            <SideNavigation
              header={{ href: '/', text: '기능' }}
              items={[
                {
                  type: 'link',
                  text: '가입 회사 리스트',
                  href: '/',
                },
                {
                  type: 'link',
                  text: '가입 가맹점 리스트',
                  href: '/restaurant',
                },
                {
                  type: 'link',
                  text: '수락 대기',
                  href: '#',
                },
              ]}
            />
          }
          toolsOpen={helpPanel}
          onToolsChange={() => setHelpPanel((e) => (!e ? true : false))}
          tools={
            <HelpPanel header={<h2>식사임당</h2>}>관리자 페이지</HelpPanel>
          }
          content={
            <BrowserRouter>
              <Routers />
            </BrowserRouter>
          }
        />
      )}
    </I18nProvider>
  );
}

export default App;
