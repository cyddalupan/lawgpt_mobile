# LawGPT Mobile

This is a hybrid mobile application for both Android and iOS named "LawGPT". The app's primary function is to act as a wrapper, displaying the website located at `https://topbarassist-agpl.reviewcenterphil.com/page/lawgpt` in a seamless, native-like web view.

## Getting Started

### Prerequisites

- Node.js
- Ionic CLI
- Android Studio (for Android builds)
- Xcode (for iOS builds)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/lawgpt_mobile.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running on the Web

To run the application in a web browser, use the following command:

```bash
ionic serve
```

### Building for Android

Building the Android application requires a few troubleshooting steps. Here's a detailed guide on how to build the APK:

#### 1. Install Android SDK Command-line Tools

The default Android SDK installation might not include all the necessary tools, including `sdkmanager`. To ensure you have a working `sdkmanager`, install the Google Android command-line tools. In this project, we used version 13.0.

```bash
sudo apt-get install -y google-android-cmdline-tools-13.0-installer
```

#### 2. Accept SDK Licenses

After installing the command-line tools, you need to accept the Android SDK licenses. You can do this using the `sdkmanager` command:

```bash
yes | sudo /usr/bin/sdkmanager --licenses
```

#### 3. Install the Correct Build Tools and Platform

The project requires a specific version of the build tools and platform. You can find these versions in the `android/variables.gradle` file. For this project, we needed `build-tools;34.0.0` and `platforms;android-35`.

Use `sdkmanager` to install them:

```bash
sudo /usr/bin/sdkmanager "build-tools;34.0.0" "platforms;android-35"
```

#### 4. Build the Application

Once the licenses are accepted and the correct build tools and platform are installed, you can build the application.

First, set the `ANDROID_HOME` environment variable:

```bash
export ANDROID_HOME=/usr/lib/android-sdk
```

Then, navigate to the `android` directory and run the Gradle build command:

```bash
cd android
./gradlew build
```

This will generate the APK file in the `android/app/build/outputs/apk/debug` directory.

### Building for iOS

Building the iOS application requires Xcode. Open the iOS project in Xcode and use the "Archive" feature to build the app.

```bash
ionic cap open ios
```