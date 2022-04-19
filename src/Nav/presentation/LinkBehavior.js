import { Link } from "react-router-dom";
import * as React from 'react';

/*
 Forards props and ref to react router Link component. 
*/

const LinkBehavior = React.forwardRef((props, ref) => (
  <Link ref = {ref} {...props} />
));

export default LinkBehavior;
