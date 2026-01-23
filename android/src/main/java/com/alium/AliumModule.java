package com.alium;

import android.util.Log;
import android.view.ContextThemeWrapper;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;


import com.dwao.alium.models.SurveyParameters;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.module.annotations.ReactModule;
import com.dwao.alium.survey.Alium;

import java.util.HashMap;
import java.util.Map;

@ReactModule(name = AliumModule.NAME)
public class AliumModule extends ReactContextBaseJavaModule {
  public static final String NAME = "RNAlium";
  private static String URL = "";
  private static ReactApplicationContext reactApplicationContext;

  public AliumModule(ReactApplicationContext reactContext) {
    super(reactContext);
    reactApplicationContext = reactContext;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(a * b);
  }

  @ReactMethod
  public void config(String url) {
    Alium.config(reactApplicationContext.getCurrentActivity().getApplication(),url);
  }

  @ReactMethod
  public void trigger(String screenName, ReadableMap customerVariables) {
    Map variables=new HashMap();
    ReadableMapKeySetIterator iterator=customerVariables.keySetIterator();
    while(iterator.hasNextKey()){
      String key=iterator.nextKey();
      variables.put(key, customerVariables.getString(key));
      Log.e("variables", variables.get(key).toString());
    }

    SurveyParameters surveyParameters=new SurveyParameters(screenName, variables);
    Alium.trigger(reactApplicationContext.getCurrentActivity(), surveyParameters);
  }

  @ReactMethod
  public void stop(String screenName){
    Alium.stop(screenName);
  }
}
