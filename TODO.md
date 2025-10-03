**Overall Goal:** To develop a hybrid mobile application for both Android and iOS named "lawgpt". The app's primary function is to act as a wrapper, displaying the website located at `https://topbarassist.reviewcenterphil.com/page/lawgpt` in a seamless, native-like web view. Key features include a custom-designed offline screen to handle lack of internet connectivity and a clear checklist of all required media assets for future design and branding updates.

- [x] **Setup: Initialize Project Structure** - Create a new, blank Ionic/React project which will serve as the foundation for the app.
- [x] **Setup: Install Dependencies** - Run the `npm install` command to download and install all the necessary libraries and packages defined in the project's `package.json`.
- [x] **Setup: Add Android Platform** - Integrate the Android platform configuration into the project using the command `ionic cap add android`.
- [x] **Setup: Add iOS Platform** - Integrate the iOS platform configuration into the project using the command `ionic cap add ios`.
- [x] **Feature: Install In-App Browser** - Install the Cordova In-App Browser plugin and its Ionic wrapper (`@awesome-cordova-plugins/in-app-browser`) to enable web content rendering.
- [x] **Feature: Clear Homepage** - Open `src/pages/Home.tsx` and remove the default placeholder content inside the `<IonContent>` tags to prepare for the web view.
- [ ] **Feature: Implement Web View** - In `Home.tsx`, use a `useEffect` hook to programmatically open `https://topbarassist.reviewcenterphil.com/page/lawgpt` with the In-App Browser as soon as the page loads.
- [ ] **Feature: Configure Web View** - Set the In-App Browser options to hide the location bar (`location=no`) to ensure the website looks like a part of the native app.
- [ ] **Feature: Install Network Plugin** - Install the Capacitor Network plugin (`@capacitor/network`) to allow the app to check for an active internet connection.
- [ ] **Offline Page: Generate Component** - Create a new, separate page component for the offline screen using the command `ionic generate page Offline`.
- [ ] **Offline Page: Design Creative Content** - In the `Offline.tsx` file, implement the offline screen layout. This will include a headline ('Connection Lost'), a descriptive message, and a placeholder for a custom SVG graphic.
- [ ] **Offline Page: Implement Routing Logic** - In the main `App.tsx` file, add logic to check the network status on startup and route the user to the `Offline` page if disconnected, or the `Home` page if connected.
- [ ] **Documentation: Create Media Checklist File** - Create a new file named `MEDIA_NEEDED.md` to list all required visual assets for future reference.
- [ ] **Documentation: Add Detailed Media Descriptions** - Populate `MEDIA_NEEDED.md` with detailed descriptions for the App Icon, Splash Screen, and the custom Offline Page Graphic, including format and dimension specifications.