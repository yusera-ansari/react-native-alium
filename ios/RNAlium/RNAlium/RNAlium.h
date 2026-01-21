
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAliumSpec.h"

@interface RNAlium : NSObject <NativeAliumSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RNAlium : NSObject <RCTBridgeModule>
#endif

@end
