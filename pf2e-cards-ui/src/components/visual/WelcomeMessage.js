import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Highlight from './Highlight';

const WelcomeMessage = React.memo(({ name }) => {
  /** useMemo Hook vs React.memo : no advanced calculation is needed, so we use React.memo
   |--------------------------------------------------
   | WelcomeMessage is the child of a form, SignUp.js
   | This form will re-render it's children when its input fields cause controlled state changes, as expected
   | Said re-renders will force the children to re-render though
   | In this case, WelcomeMessage will re-render when an input field changes in its parent
   | Since WelcomeMessage does not need to re-render, we choose to memoize
   |--------------------------------------------------
   */
  const renderCounter = useRef(0);
  // To see the memo diff, remove the React.memo wrapper.
  console.log('Memo:', renderCounter.current += 1);

  return (
    <p>
      Welcome,
      <Highlight>
        {` ${name}`}
      </Highlight>
    </p>
  );
});

WelcomeMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default WelcomeMessage;
