# React Native Avatar Group

React Native AvatarGroup is a simple and customizable component that displays a group of circular avatars or images with an optional overflow count indicator.

<div align="center">
  <img src="assets/screenshot.jpeg" alt="React Native Group Avatar" width="200"/>
</div>

## Installation

```
npm install react-native-avatar-group --save
```

or

```
yarn add react-native-avatar-group
```

## Usage

```jsx
import AvatarGroup from "react-native-avatar-group";

const faces = [
  { id: 1, imageUrl: "https://example.com/avatar1.jpg" },
  { id: 2, imageUrl: "https://example.com/avatar2.jpg" },
  { id: 3, imageUrl: "https://example.com/avatar3.jpg" },
  { id: 4, imageUrl: "https://example.com/avatar4.jpg" },
  { id: 5, imageUrl: "https://example.com/avatar5.jpg" },
];

<AvatarGroup
  faces={faces}
  circleSize={40}
  numFaces={4}
  offset={1.2}
  borderColor="white"
/>;
```

## Props

| Prop                 | Type     | Default | Description                                                        |
| -------------------- | -------- | ------- | ------------------------------------------------------------------ |
| `faces`              | `array`  | `[]`    | An array of objects containing the `id` and `imageUrl` of the face |
| `circleSize`         | `number` | `20`    | The size of the circular avatars                                   |
| `numFaces`           | `number` | `4`     | The maximum number of avatars to display before showing overflow   |
| `offset`             | `number` | `1`     | The offset between each avatar                                     |
| `borderColor`        | `string` | `white` | The border color of the circular avatars                           |
| `hideOverflow`       | `bool`   | `false` | Whether to hide the overflow count indicator                       |
| `containerStyle`     | `any`    | `null`  | Additional styles for the container view                           |
| `circleStyle`        | `any`    | `null`  | Additional styles for the circular avatar                          |
| `imageStyle`         | `any`    | `null`  | Additional styles for the avatar image                             |
| `overflowStyle`      | `any`    | `null`  | Additional styles for the overflow count indicator circle          |
| `overflowLabelStyle` | `any`    | `null`  | Additional styles for the overflow count label                     |

## Example

```jsx
import React from "react";
import { View } from "react-native";
import AvatarGroup from "react-native-avatar-group";

const faces = [
  { id: 1, imageUrl: "https://example.com/avatar1.jpg" },
  { id: 2, imageUrl: "https://example.com/avatar2.jpg" },
  { id: 3, imageUrl: "https://example.com/avatar3.jpg" },
  { id: 4, imageUrl: "https://example.com/avatar4.jpg" },
  { id: 5, imageUrl: "https://example.com/avatar5.jpg" },
];

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AvatarGroup
        faces={faces}
        circleSize={50}
        numFaces={3}
        offset={1.5}
        borderColor="black"
        overflowStyle={{ backgroundColor: "green" }}
        overflowLabelStyle={{ color: "white" }}
      />
    </View>
  );
};

export default App;
```

This example will render an Avatar Group component with a maximum of 3 avatars displayed, with a circle size of 50, an offset of 1.5 between each avatar, black border color, green background color for the overflow count indicator, and white text color for the overflow count label.

## Contributing

Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md) when submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
