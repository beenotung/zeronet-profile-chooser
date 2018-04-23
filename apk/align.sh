#!/usr/bin/env bash
v=$(ls /opt/android-sdk/build-tools/ | sort -n | tail -n 1)
/opt/android-sdk/build-tools/${v}/zipalign -v 4 app-release-unsigned.apk app-release-signed.apk
