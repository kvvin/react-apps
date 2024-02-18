import React from "react";
import App from "./App";
import{ createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App color="blue" size="20px"/>);