@import UIKit;
#import "RNSKText.h"

@implementation RNSKText

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(calcSize:(NSString *)text
                  fontFamily:(NSString *)fontFamily
                  fontSize:(int)fontSize
                  callback:(RCTResponseSenderBlock)callback)
{
  UIFont *font = [UIFont fontWithName:fontFamily size:fontSize];
  NSDictionary *userAttributes = @{NSFontAttributeName: font,
                                   NSForegroundColorAttributeName: [UIColor blackColor]};
  
  const CGSize textSize = [text sizeWithAttributes: userAttributes];
  
  callback(@[[NSNull null],
             [NSNumber numberWithDouble: textSize.width],
             [NSNumber numberWithDouble: textSize.height]]);
}

@end