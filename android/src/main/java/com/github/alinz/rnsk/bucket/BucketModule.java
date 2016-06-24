package com.github.alinz.rnsk.bucket;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BucketModule extends ReactContextBaseJavaModule {
    ReactApplicationContext context;

    public BucketModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.context = reactApplicationContext;
    }

    private SharedPreferences getBucket(String bucketName) {
        return context.getApplicationContext().getSharedPreferences(bucketName, Context.MODE_PRIVATE);
    }

    @Override
    public String getName() {
        return "RNSKBucket";
    }

    @ReactMethod
    public void get(String key, String bucketName, Callback callback) {
        SharedPreferences preferences = getBucket(bucketName);

        Object value = preferences.getAll().get(key);
        if (value != null) {
            callback.invoke(value.toString());
        } else {
            callback.invoke(null);
        }
    }

    @ReactMethod
    public void set(String key, String value, String bucketName) {
        SharedPreferences preferences = getBucket(bucketName);

        SharedPreferences.Editor editor = preferences.edit();
        editor.putString(key, value);
        editor.commit();
    }

    @ReactMethod
    public void remove(String key, String bucketName) {
        SharedPreferences preferences = getBucket(bucketName);

        SharedPreferences.Editor editor = preferences.edit();
        editor.remove(key);
        editor.commit();
    }
}
