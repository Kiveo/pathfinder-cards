import React from 'react';
// import { useRef } from 'react';
import PropTypes from 'prop-types';
import Highlight from './Highlight';

/* useMemo Hook vs React.memo : no advanced calculation is needed, so we use React.memo
|--------------------------------------------------
| WelcomeMessage is the child of a form, SignUp.js
| This form will re-render it's children when its input fields cause controlled state changes
| Said re-renders will force the children to re-render though
| In this case, WelcomeMessage will re-render when an input field changes in its parent
| Since WelcomeMessage does not need to re-render, we choose to memoize
| Login changes the welcome: every keystroke will render regardless of memo. Opposite for signup
| Uncomment and use bottom 2 lines & import to test memo
| const renderCounter = useRef(0);
| console.log('Memo:', renderCounter.current += 1);
|--------------------------------------------------
*/
const WelcomeMessage = React.memo(({ name }) => (
  <p>
    Welcome,
    <Highlight>
      {` ${name}`}
    </Highlight>
  </p>
));

WelcomeMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default WelcomeMessage;
