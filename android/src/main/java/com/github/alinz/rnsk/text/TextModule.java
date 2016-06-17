package com.github.alinz.rnsk.text;

import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Typeface;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TextModule extends ReactContextBaseJavaModule {

    public TextModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNSKText";
    }

    @ReactMethod
    public void calcSize(String value, String fontFamily, int fontSize, Callback callback) {
        Rect bounds = new Rect();

        Paint mPaint = new Paint();
        mPaint.setTextSize(fontSize);
        Typeface typeFace = Typeface.create(fontFamily, Typeface.NORMAL);
        mPaint.setTypeface(typeFace);
        mPaint.getTextBounds(value, 0, value.length(), bounds);

        callback.invoke(null, bounds.width(), bounds.height());
    }
}
