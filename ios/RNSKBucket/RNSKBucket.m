
#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface RNSKBucket : NSObject <RCTBridgeModule>
@end

@implementation RNSKBucket

- (NSUserDefaults *)bucketByName:(NSString*)name {
  return [[NSUserDefaults alloc] initWithSuiteName: name];
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(set:(NSString *) key
                  value:(NSString *) value
                  bucketName:(NSString*) bucketName)
{
  NSUserDefaults* bucket = [self bucketByName: bucketName];
  [bucket setObject:value forKey:key];
  [bucket synchronize];
}

RCT_EXPORT_METHOD(get:(NSString *) key
                  bucketName:(NSString*) bucketName
                  callback:(RCTResponseSenderBlock)callback)
{
  NSUserDefaults* bucket = [self bucketByName: bucketName];
  id value = [bucket objectForKey:key];

  if (value == nil) {
    value = [NSNull null];
  }

  callback(@[value]);
}

RCT_EXPORT_METHOD(remove:(NSString *) key
                  bucketName:(NSString*) bucketName)
{
  NSUserDefaults* bucket = [self bucketByName: bucketName];
  [bucket removeObjectForKey: key];
  [bucket synchronize];
}

@end
