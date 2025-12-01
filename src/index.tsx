import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-alium' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Alium = NativeModules.Alium
  ? NativeModules.Alium
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function config(url: String): void {
  return Alium.config(url);
}
interface Variables {
  [key: string]: any;
}

export function trigger(screen: String, customerParameters: Variables): void {
  Alium.trigger(screen, customerParameters ? customerParameters : {});
}

export function triggerWithParams(params: SurveyParameters): void {
  Alium.trigger(params.screenName, params.customerVariables);
}
// SurveyParameters.ts

export class SurveyParameters {
  screenName: string;
  customerVariables: Record<string, string>;

  constructor(
    screenName: string,
    customerVariables: Record<string, string> = {}
  ) {
    this.screenName = screenName;
    this.customerVariables = { ...customerVariables };
  }

  // Private builder-based constructor
  static fromBuilder(builder: SurveyParametersBuilder) {
    return new SurveyParameters(builder.screenName, builder.customerVariables);
  }
}

export class SurveyParametersBuilder {
  screenName: string;
  customerVariables: Record<string, string> = {};

  constructor(screenName: string) {
    this.screenName = screenName;
  }

  addDim(number: number, value: string | null | undefined) {
    if (value != null) {
      this.customerVariables[`dim${number}`] = value;
    }
    return this;
  }

  addCustom(key: string, value: string | null | undefined) {
    if (value != null) {
      this.customerVariables[key] = value;
    }
    return this;
  }

  private clean() {
    Object.keys(this.customerVariables).forEach((key) => {
      const value = this.customerVariables[key];
      if (!value || value.trim().length === 0) {
        delete this.customerVariables[key];
      }
    });
  }

  build() {
    this.clean();
    return SurveyParameters.fromBuilder(this);
  }
}
