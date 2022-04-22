//
//  React3lNativeKit.h
//  React3lNativeKit
//
//  Created by Thanh Tùng on 21/04/2022.
//  Copyright © 2022 Facebook. All rights reserved.
//

#ifndef React3lNativeKit_h
#define React3lNativeKit_h

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface React3lNativeKit : RCTEventEmitter<RCTBridgeModule>

+ (void)showSplash:(NSString*)splashScreen inRootView:(UIView*)rootView;
+ (void)showSplashScreen;
+ (void)hideSplashScreen;

- (void)activateKeepAwake;
- (void)deactivateKeepAwake;

@end

#endif /* React3lNativeKit_h */
