
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import env from './env';
import Test from './modules/index'; // code authored by you in this project

import React from 'react';
import { render } from 'react-dom';

console.log('Loaded environment variables:', env);
  		  
  var app = remote.app;
  var appDir = jetpack.cwd(app.getAppPath());
  // here files like it is node.js! Welcome to Electron world :)
  console.log('The author of this app is:', appDir.read('package.json', 'json').author);
  		  
  render(
     <Test />,
      document.getElementById("root")
    )