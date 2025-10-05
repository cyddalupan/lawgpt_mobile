# Gemini Development Documentation

This document outlines the development process and key decisions made during the development of the LawGPT mobile application.

## Building the Android App (APK)

Building the Android application required a few troubleshooting steps. Here's a detailed guide on how to build the APK:

### 1. Install Android SDK Command-line Tools

The default Android SDK installation might not include all the necessary tools, including `sdkmanager`. To ensure you have a working `sdkmanager`, install the Google Android command-line tools. In this project, we used version 13.0.

```bash
sudo apt-get install -y google-android-cmdline-tools-13.0-installer
```

### 2. Accept SDK Licenses

After installing the command-line tools, you need to accept the Android SDK licenses. You can do this using the `sdkmanager` command:

```bash
yes | sudo /usr/bin/sdkmanager --licenses
```

### 3. Install the Correct Build Tools and Platform

The project requires a specific version of the build tools and platform. You can find these versions in the `android/variables.gradle` file. For this project, we needed `build-tools;34.0.0` and `platforms;android-35`.

Use `sdkmanager` to install them:

```bash
sudo /usr/bin/sdkmanager "build-tools;34.0.0" "platforms;android-35"
```

### 4. Build the Application

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

## Building the iOS App (IPA)

Building the iOS application requires Xcode, which is not available in the current CLI environment. Therefore, this step cannot be completed automatically. The project needs to be opened in Xcode on a macOS machine to be built and archived for distribution.

```bash
ionic cap open ios
```