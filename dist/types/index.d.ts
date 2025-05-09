import { StyleProp, ViewStyle } from "react-native";
export interface PinInputProps {
    pinLength?: number;
    value: string;
    onChange?: (newValue: string) => void;
    blinkingSpeed?: number;
    cursorColor?: string;
    containerStyle?: StyleProp<ViewStyle>;
    pinStyle?: StyleProp<ViewStyle>;
    activePinStyle?: ViewStyle;
    showCursor?: boolean;
    secureTextEntry?: boolean;
    shouldOnlyAcceptNumbers?: boolean;
}
