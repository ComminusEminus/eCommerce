import { Link } from "react-router-dom";
import * as React from 'react';

const LinkBehavior = React.forwardRef((props, ref) => (
  <Link ref = {ref} {...props} />
));

export default LinkBehavior;
