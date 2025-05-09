# rn-awesome-pin-input

A customizable and animated PIN input component built with React Native and Reanimated.

![Alt text](https://github.com/Dhia-Ben-Hamouda/rn-awesome-pin-input/blob/main/src/assets/preview.gif)

## ✨ Features

- Custom PIN length
- Cursor animation with blinking effect
- Supports secure (dot-style) input
- Customizable styles
- Restrict to numeric input only (optional)
- Fully controlled component

---

## 📦 Installation

```bash
npm install rn-awesome-pin-input
# or
yarn add rn-awesome-pin-input
```

Then install the required peer dependencies:

```bash
npm install react-native-reanimated
```

---

## 🚀 Usage

```tsx
import PinInput from "rn-awesome-pin-input";

export default function App() {
  const [code, setCode] = useState("");

  return(
    <PinInput
      value={code}
      onChange={setCode}
      pinLength={6}
      showCursor={true}
      secureTextEntry={false}
    />;
  )
}
```

---

## 🔧 Props

| Prop                      | Type                      | Default      | Description                           |
| ------------------------- | ------------------------- | ------------ | ------------------------------------- |
| `value`                   | `string`                  | **Required** | The current value of the PIN input.   |
| `onChange`                | `(value: string) => void` | `undefined`  | Callback when the value changes.      |
| `pinLength`               | `number`                  | `6`          | Number of digits in the PIN.          |
| `blinkingSpeed`           | `number`                  | `500`        | Speed of the blinking cursor in ms.   |
| `cursorColor`             | `string`                  | `"#555"`     | Color of the cursor.                  |
| `containerStyle`          | `StyleProp<ViewStyle>`    | `undefined`  | Style for the container view.         |
| `pinStyle`                | `StyleProp<ViewStyle>`    | `undefined`  | Style for each pin cell.              |
| `activePinStyle`          | `ViewStyle`               | `undefined`  | Style for the active pin cell.        |
| `showCursor`              | `boolean`                 | `true`       | Whether to show the blinking cursor.  |
| `secureTextEntry`         | `boolean`                 | `false`      | Mask input values (like password).    |
| `shouldOnlyAcceptNumbers` | `boolean`                 | `true`       | Restrict input to numeric characters. |

---

## 📚 Contributing

Issues and pull requests are welcome! Please open an issue first to discuss major changes.

Made with ❤️ by Dhia Ben Hamouda
