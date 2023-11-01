/*
*parcel:
**HMR 
**file watcher algoritm written in C++   (they watch the changes and hmr happening)
** Https on dev

*/



import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {}, "This is heading");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);