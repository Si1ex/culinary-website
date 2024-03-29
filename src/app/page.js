"use client"
import React, { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import NavBar from './components/NavBar';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const pluginWrapper = () => {};

const App = () => {
  const fullpages = [
    {
      component: <Page1 />,
      text: 'First Page',
    },
    {
      component: <Page2 />,
      text: 'Second Page',
    },
    {
      component: <Page3 />,
      text: 'Third Page',
    },
    {
      component: <Page4 />,
      text: 'Fourth Page',
    },
    {
      component: <Page5 />,
      text: 'Fifth Page',
    },
  ];

  const onLeave = (origin, destination, direction) => {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

  useEffect(() => {
    // Initialize fullpage.js here if needed
    // You might need to add cleanup logic when the component unmounts
    // For example, if you're using a fullpage.js API, you may want to destroy it when the component is unmounted.
    // return () => {
    //   // Cleanup logic here
    // };
  }, []); // Empty dependency array means it runs once on mount

  if (!fullpages.length) {
    return null;
  }

  return (
    <div className="App">
      <NavBar />
      <ReactFullpage
        debug /* Debug logging */
        pluginWrapper={pluginWrapper}
        navigation
        anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage']}
        sectionSelector={SECTION_SEL}
        onLeave={onLeave}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ component, text }) => (
              <div key={text} className={SEL}>
                <div className="slide">{component}</div>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default App;
