# Gemini Development Documentation

This document outlines the development process and key decisions made during the development of the LawGPT mobile application.

## Building the Android App (APK)

Building the Android application required a few troubleshooting steps. Here's a detailed guide on how to build the APK:

### 1. Accept SDK Licenses

First, you need to accept the Android SDK licenses. You can do this using the `sdkmanager` command:

```bash
yes | sudo /usr/bin/sdkmanager --licenses
```

### 2. Install the Correct Build Tools and Platform

The project requires a specific version of the build tools and platform. You can find these versions in the `android/variables.gradle` file. For this project, we needed `build-tools;34.0.0` and `platforms;android-35`.

Use `sdkmanager` to install them:

```bash
sudo /usr/bin/sdkmanager "build-tools;34.0.0" "platforms;android-35"
```

### 3. Build the Application

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
