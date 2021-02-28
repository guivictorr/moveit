import '../src/styles/globals.scss';

import ChallengesProvider from '../src/context/ChallengesContext';
import CountdownProvider from '../src/context/CountdownContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
