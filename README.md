# react-native-alium

A React Native wrapper for the **Alium Android SDK**.

## Installation

```sh
npm install react-native-alium
```

## Usage

### Configure the SDK

Import the `config` method from `react-native-alium`:

```js
import { config } from 'react-native-alium';
```

Call the `config` method:

```js
config('your_project_url');
```

This method should be the **first** method called when initializing the Alium SDK.  
It sets the project key or URL and must be invoked as early as possible in your application's lifecycle.

You can call it at the project entry point (`index.js`).

### Trigger Surveys

Use `trigger` with the screen name to display surveys.

Import `trigger`:

```js
import { trigger } from 'react-native-alium';
```

Trigger a survey:

```js
trigger('your_screen_name', {});
```

### Passing Custom Parameters to a Survey

```js
trigger('your_screen_name', { key: 'value' });
```

### Passing Parameters Using the Parameter Builder

```js
import { triggerWithParams, SurveyParametersBuilder } from 'react-native-alium';

let params = new SurveyParametersBuilder('home')
  .addDim(1, 'yusera')
  .addDim(2, '')
  .addDim(3, '9029')
  .addCustom('name', 'aluim')
  .build();

triggerWithParams(params);
```

## API Reference

### `config(projectUrl: string): void`

Initializes the Alium SDK.

**Parameters:**

| Name       | Type   | Description                                       |
| ---------- | ------ | ------------------------------------------------- |
| projectUrl | string | The project URL or key for the Alium SDK project. |

**Example:**

```js
import { config } from 'react-native-alium';

config('your_project_url');
```

> Must be called **first** when initializing the SDK. Typically at `index.js`.

### `trigger(screenName: string, params?: object): void`

Displays a survey for a given screen.

**Parameters:**

| Name       | Type   | Description                                     |
| ---------- | ------ | ----------------------------------------------- |
| screenName | string | The name of the screen to show survey for.      |
| params     | object | Optional key-value pairs for survey parameters. |

**Example:**

```js
import { trigger } from 'react-native-alium';

trigger('home_screen', { userType: 'premium' });
```

### `triggerWithParams(params: object): void`

Displays a survey using a **parameter object** created by `SurveyParametersBuilder`.

**Parameters:**

| Name   | Type   | Description                                                    |
| ------ | ------ | -------------------------------------------------------------- |
| params | object | A survey parameter object built via `SurveyParametersBuilder`. |

**Example:**

```js
import { triggerWithParams, SurveyParametersBuilder } from 'react-native-alium';

const params = new SurveyParametersBuilder('home')
  .addDim(1, 'yusera')
  .addDim(2, '')
  .addDim(3, '9029')
  .addCustom('name', 'alium')
  .build();

triggerWithParams(params);
```

### `SurveyParametersBuilder(screenName: string)`

Builder class to create custom survey parameters.

**Methods:**

| Method                                   | Parameters                                           | Description                                                  |
| ---------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| `.addDim(index: number, value: string)`  | `index` — dimension index, `value` — dimension value | Adds a dimension parameter.                                  |
| `.addCustom(key: string, value: string)` | `key` — parameter name, `value` — parameter value    | Adds a custom key-value parameter.                           |
| `.build()`                               | None                                                 | Returns a complete parameter object for `triggerWithParams`. |

**Example:**

```js
import { SurveyParametersBuilder } from 'react-native-alium';

const params = new SurveyParametersBuilder('home')
  .addDim(1, 'yusera')
  .addDim(2, '')
  .addDim(3, '9029')
  .addCustom('name', 'alium')
  .build();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
