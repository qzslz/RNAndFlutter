//
//  RNAndNativeHelper.m
//  RNAndFlutter
//
//  Created by qzslz on 2021/5/7.
//

#import "RNAndNativeHelper.h"
#import <flutter_boost/FlutterBoost.h>

@implementation RNAndNativeHelper

RCT_EXPORT_MODULE();

/** RN跳转flutter
 *@param 界面跳转传参
 */
RCT_EXPORT_METHOD(pushToFlutter:(NSString *)param)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [[FlutterBoost instance] open:@"/" arguments:@{@"animated":@(YES),@"params":param}];
  });
}

@end
