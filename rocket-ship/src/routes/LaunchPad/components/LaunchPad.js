import React, { useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => { 
    /** Temporary removed for a quick fix to stop reder triggers */
    //triggerRerender(rerenderCount + 1); 
  }, 500);

  return (
    <div className="launchpad">
      <FunctionalRocket />
      <ClassRocket />
    </div>
  );
}
