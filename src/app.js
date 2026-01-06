// This file contains the main JavaScript logic for the web application.
// It initializes the application and may handle routing or state management.

import { createHeader } from './components/header';

function initApp() {
    const appContainer = document.getElementById('app');
    const header = createHeader();
    appContainer.appendChild(header);
}

document.addEventListener('DOMContentLoaded', initApp);