#!/usr/bin/env bash
jarsigner -verbose -tsa http://timestamp.comodoca.com/rfc3161 -sigalg SHA1withRSA -digestalg SHA1 -keystore *.keystore app-release-unsigned.apk zeronet_profile_chooser
