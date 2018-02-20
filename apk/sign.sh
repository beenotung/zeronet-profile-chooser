#!/usr/bin/env bash
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore *.keystore app-release-unsigned.apk zeronet_profile_chooser
