#!/usr/bin/env bash
/opt/android-sdk/build-tools/*/zipalign -v 4 app-release-unsigned.apk app-release-signed.apk
