'use strict';

import debugToolbar from 'think-debug-toolbar';

export default {
  view_filter : ['append', debugToolbar({})],
}