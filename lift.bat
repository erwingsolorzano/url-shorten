@echo off
cd /d "%userprofile%/Documents/GitHub/url-shorten"
start cmd /k "npm run client"
start cmd /k "npm run server"