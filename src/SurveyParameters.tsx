// // SurveyParameters.ts

// export class SurveyParameters {
//   screenName: string;
//   customerVariables: Record<string, string>;

//   constructor(
//     screenName: string,
//     customerVariables: Record<string, string> = {}
//   ) {
//     this.screenName = screenName;
//     this.customerVariables = { ...customerVariables };
//   }

//   // Private builder-based constructor
//   static fromBuilder(builder: SurveyParametersBuilder) {
//     return new SurveyParameters(builder.screenName, builder.customerVariables);
//   }
// }

// export class SurveyParametersBuilder {
//   screenName: string;
//   customerVariables: Record<string, string> = {};

//   constructor(screenName: string) {
//     this.screenName = screenName;
//   }

//   addDim(number: number, value: string | null | undefined) {
//     if (value != null) {
//       this.customerVariables[`dim${number}`] = value;
//     }
//     // return this;
//   }

//   addCustom(key: string, value: string | null | undefined) {
//     if (value != null) {
//       this.customerVariables[key] = value;
//     }
//     return this;
//   }

//   private clean() {
//     Object.keys(this.customerVariables).forEach((key) => {
//       const value = this.customerVariables[key];
//       if (!value || value.trim().length === 0) {
//         delete this.customerVariables[key];
//       }
//     });
//   }

//   build() {
//     this.clean();
//     return SurveyParameters.fromBuilder(this);
//   }
// }
