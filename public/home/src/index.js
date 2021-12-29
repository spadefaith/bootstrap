// Import all plugins
// import * as bootstrap from 'bootstrap';

// Or import only needed plugins
import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';


import alert from './components/alert.js';
import modal from './components/modal.js';


console.log(alert);

alert('hello from alert');
modal('hello from modal');