#!/bin/bash

set -ex
APP="BLUE DiSH Soothing Music"

# electron-packager . \
#   "$APP" \
#   --asar \
#   --overwrite \
#   --platform=mas \
#   --app-bundle-id=org.pcotandy.bluedishsoothingmusic \
#   --app-version="1.0.0" \
#   --build-version="1.0.0" \
#   --arch=x64 \
#   --icon=./scripts/icons/icon.icns \
#   --out=build \
#   --extend-info=scripts/mas/info.plist \
#   --ignore=/src
./node_modules/.bin/electron-builder

APP_PATH="./dist/mas-universal/$APP.app"
RESULT_PATH="./dist/mas-universal/$APP.pkg"
APP_KEY="3rd Party Mac Developer Application: Peoples Coalition of Tandy LLC (J8RGCPA877)"
INSTALLER_KEY="3rd Party Mac Developer Installer: Peoples Coalition of Tandy LLC (J8RGCPA877)"
FRAMEWORKS_PATH="$APP_PATH/Contents/Frameworks"
LIBRARY_PATH="$APP_PATH/Contents/Library"
CHILD_PLIST="./scripts/mas/child.plist"
PARENT_PLIST="./scripts/mas/parent.plist"

codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/Electron Framework.framework/Versions/A/Electron Framework"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/Electron Framework.framework/Versions/A/Libraries/libffmpeg.dylib"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/Electron Framework.framework/Versions/A/Libraries/libEGL.dylib"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/Electron Framework.framework/Versions/A/Libraries/libGLESv2.dylib"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/Electron Framework.framework/Versions/A/Libraries/libvk_swiftshader.dylib"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/Electron Framework.framework"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/$APP Helper.app/Contents/MacOS/$APP Helper"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/$APP Helper.app/"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/$APP Helper (GPU).app/Contents/MacOS/$APP Helper (GPU)"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/$APP Helper (GPU).app/"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/$APP Helper (Renderer).app/Contents/MacOS/$APP Helper (Renderer)"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/$APP Helper (Renderer).app/"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/$APP Helper (Plugin).app/Contents/MacOS/$APP Helper (Plugin)"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$FRAMEWORKS_PATH/$APP Helper (Plugin).app/"

codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$LIBRARY_PATH/LoginItems/$APP Login Helper.app/Contents/MacOS/$APP Login Helper"
codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$LIBRARY_PATH/LoginItems/$APP Login Helper.app"

codesign -s "$APP_KEY" -f --entitlements "$CHILD_PLIST" "$APP_PATH/Contents/MacOS/$APP"

codesign -s "$APP_KEY" -f --entitlements "$PARENT_PLIST" "$APP_PATH"

productbuild --component "$APP_PATH" /Applications --sign "$INSTALLER_KEY" "$RESULT_PATH"
