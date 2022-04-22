#import <React/RCTBridgeModule.h>
#import "React3lNativeKit.h"
#import "UIKit/UIKit.h"
#import <React/RCTBridge.h>

static bool waiting = true;
static bool addedJsLoadErrorObserver = false;
static UIView* loadingView = nil;


@implementation React3lNativeKit

RCT_EXPORT_MODULE(React3lNativeKit)

RCT_EXTERN_METHOD(activateKeepAwake)
- (void)activateKeepAwake
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [[UIApplication sharedApplication] setIdleTimerDisabled:YES];
    });
}

RCT_EXTERN_METHOD(deactivateKeepAwake)
- (void)deactivateKeepAwake
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [[UIApplication sharedApplication] setIdleTimerDisabled:NO];
    });
}

+ (void)showSplashScreen {
    if (!addedJsLoadErrorObserver) {
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(jsLoadError:) name:RCTJavaScriptDidFailToLoadNotification object:nil];
        addedJsLoadErrorObserver = true;
    }
    
    while (waiting) {
        NSDate* later = [NSDate dateWithTimeIntervalSinceNow:0.1];
        [[NSRunLoop mainRunLoop] runUntilDate:later];
    }
}

+ (void)showSplash:(NSString*)splashScreen inRootView:(UIView*)rootView {
    if (!loadingView) {
        loadingView = [[[NSBundle mainBundle] loadNibNamed:splashScreen owner:self options:nil] objectAtIndex:0];
        CGRect frame = rootView.frame;
        frame.origin = CGPointMake(0, 0);
        loadingView.frame = frame;
    }
    waiting = false;
    
    [rootView addSubview:loadingView];
}

+ (void)hideSplashScreen {
    if (waiting) {
        dispatch_async(dispatch_get_main_queue(), ^{
            waiting = false;
        });
    } else {
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.1 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
            [loadingView removeFromSuperview];
        });
    }
}

+ (void)jsLoadError:(NSNotification*)notification
{
    // If there was an error loading javascript, hide the splash screen so it can be shown.
    // Otherwise the splash screen will remain forever, which is a hassle to debug.
    [React3lNativeKit hideSplashScreen];
}

RCT_EXPORT_METHOD(hideSplashScreen) {
    [React3lNativeKit hideSplashScreen];
}

RCT_EXPORT_METHOD(showSplashScreen) {
    [React3lNativeKit showSplashScreen];
}

+ (BOOL)requiresMainQueueSetup
{
    return false;
}

- (NSArray<NSString *> *)supportedEvents
{
    return @[];
}

@end
