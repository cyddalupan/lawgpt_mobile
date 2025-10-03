**Overall Goal:** To develop a hybrid mobile application for both Android and iOS named "lawgpt". The app's primary function is to act as a wrapper, displaying the website located at `https://topbarassist.reviewcenterphil.com/page/lawgpt` in a seamless, native-like web view. Key features include a custom-designed offline screen to handle lack of internet connectivity and a clear checklist of all required media assets for future design and branding updates.

- [x] **Setup: Initialize Project Structure** - Create a new, blank Ionic/React project which will serve as the foundation for the app.
- [x] **Setup: Install Dependencies** - Run the `npm install` command to download and install all the necessary libraries and packages defined in the project's `package.json`.
- [x] **Setup: Add Android Platform** - Integrate the Android platform configuration into the project using the command `ionic cap add android`.
- [x] **Setup: Add iOS Platform** - Integrate the iOS platform configuration into the project using the command `ionic cap add ios`.
- [x] **Feature: Install In-App Browser** - Install the Cordova In-App Browser plugin and its Ionic wrapper (`@awesome-cordova-plugins/in-app-browser`) to enable web content rendering.
- [x] **Feature: Clear Homepage** - Open `src/pages/Home.tsx` and remove the default placeholder content inside the `<IonContent>` tags to prepare for the web view.
- [x] **Feature: Implement Web View** - In `Home.tsx`, use a `useEffect` hook to programmatically open `https://topbarassist.reviewcenterphil.com/page/lawgpt` with the In-App Browser as soon as the page loads.
- [x] **Feature: Configure Web View** - Set the In-App Browser options to hide the location bar (`location=no`) to ensure the website looks like a part of the native app.
- [x] **Feature: Install Network Plugin** - Install the Capacitor Network plugin (`@capacitor/network`) to allow the app to check for an active internet connection.
- [x] **Offline Page: Generate Component** - Create a new, separate page component for the offline screen using the command `ionic generate page Offline`.

  > Manually created `src/pages/Offline/Offline.tsx` and `src/pages/Offline/Offline.css` because `ionic generate` is not supported in React projects.
- [x] **Offline Page: Design Creative Content** - In the `Offline.tsx` file, implement the offline screen layout. This will include a headline ('Connection Lost'), a descriptive message, and a placeholder for a custom SVG graphic.
- [x] **Offline Page: Implement Routing Logic** - In the main `App.tsx` file, add logic to check the network status on startup and route the user to the `Offline` page if disconnected, or the `Home` page if connected.
- [x] **Documentation: Create Media Checklist File** - Create a new file named `MEDIA_NEEDED.md` to list all required visual assets for future reference.
- [x] **Documentation: Add Detailed Media Descriptions** - Populate `MEDIA_NEEDED.md` with detailed descriptions for the App Icon, Splash Screen, and the custom Offline Page Graphic, including format and dimension specifications.

- [ ] **Phase 1: Final Configuration & Asset Creation**
    - [x] **Configure App Identity:** Update `capacitor.config.ts` with the final App ID (e.g., `io.ionic.starter` -> `com.lawgpt.app`), app name (`MyApp` -> `LawGPT`), and set the version number.
    - [x] **Create Source Media Assets:**
        - [x] Create a primary app icon source file (`icon.png`, 1024x1024px) and place it in a root `assets` folder.
        - [x] Create a primary splash screen source file (`splash.png`, 2732x2732px) and place it in the `assets` folder.
        - [x] Design and create the custom graphic for the offline page (`offline-graphic.png`).

- [ ] **Phase 2: Asset Integration**
    - [x] **Install Asset Generator:** Install the Capacitor assets tool by running `npm install @capacitor/assets`.
    - [x] **Generate Icons & Splash Screens:** Run the command `npx capacitor-assets generate` to automatically create and place all platform-specific icons and splash screens.
    - [x] **Place Offline Graphic:** Move the `offline-graphic.png` into the `public/assets/` directory and update the `<img>` tag in `src/pages/Offline/Offline.tsx` to point to it.

- [ ] **Phase 3: Final Testing & Building**
    - [ ] **Web App Testing:** Start the local development server with `ionic serve` and perform a final manual test to ensure all features (web view, offline page) work as expected in the browser.
    - [ ] **Sync Web Assets:** Run `ionic cap sync` to copy the final web build and configuration into the native Android and iOS projects.
    - [ ] **Build Android App (APK):** Run the command `ionic cap build android` to produce a production-ready APK file.
    - [ ] **Build iOS App (IPA):** Open the iOS project in Xcode (`ionic cap open ios`), then use Xcode's "Archive" feature to build the app and prepare it for distribution.

- [ ] **Phase 4: Documentation**
    - [ ] **Update README:** Edit `README.md` to include the final instructions for building the project and running it on the web.
    - [ ] **Create GEMINI.md:** Create a new `GEMINI.md` file to document the development plan, key decisions, and the collaboration process we've followed.
