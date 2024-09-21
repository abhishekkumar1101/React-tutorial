# what is package.json => pacakage.json is a configuration for npm.it keeps tracking what version you are using that package.if there is a caret(^) it means that it keeps track of if there is a minor upgrade install that also.

# what is package-lack.json => it keeps track of exact version.
# parcel => dev build ,local server , HMR - hot module replacement, image optimization , minification,bundling,compressing
# parcel using file watching algorthim - written in c++

-Default export/import

export default name;
import name from "path

-nmaed export/import
export const name
import {name} from [path]
# whenever we make changes in state variables react triggers a reconcilation (re-renders the component)


# Redux toolKit
- install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to out App
- slice (cartSlice) 
- dispatch(action)
- Selector

# Types of testing 
- Unit testing  => when only one component is being tested
- integration testing => where multiple component are communicating with each other
- End to End testing (e2e testing) => when a user lands a page and leaves the pages at the end

# setting up tesing in our App
 - Install react testing library
 - Installed jest
 - Install babel dependencies
 - configure babel
 - configure parcel config file to disable default babel transpilation
 - jest - npx jest --init
 - Install jsdom library

 # i have deleted the babel.config.js.so i am able to do test cases to use testi have to make this file manually and update its context from the website which is in episode-13