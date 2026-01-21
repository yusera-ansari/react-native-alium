#import "RNAlium.h"

@import Alium;

@implementation RNAlium
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(config:(NSString *)url){
  dispatch_async(dispatch_get_main_queue(), ^{
    [_Alium configWithKey:url];
  });
 
}

RCT_EXPORT_METHOD(trigger:(NSString *)screenName
                  customerVariables:(NSDictionary *)customerVariables){
  dispatch_async(dispatch_get_main_queue(), ^{
    NSMutableDictionary *variables = [NSMutableDictionary dictionary];

       for (NSString *key in customerVariables) {
         variables[key] = customerVariables[key];
//         RCTLogInfo(@"variables[%@] = %@", key, customerVariables[key]);
       }

       
    _SurveyParameters *surveyParameters =
    [[_SurveyParameters alloc] initWithScreenName:screenName
                                 customerVariables:variables];
    [_Alium triggerWithParameters:surveyParameters];
    
  });
}

RCT_EXPORT_METHOD(stop:(NSString *)screenName){
  dispatch_async(dispatch_get_main_queue(), ^{
    [_Alium stopOn:screenName];
  });
}

@end
