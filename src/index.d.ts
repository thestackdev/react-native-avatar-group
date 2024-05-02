import React from "react";
import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

interface CircleProps {
  borderColor: string;
  imageStyle?: StyleProp<ViewStyle>;
  circleStyle?: StyleProp<ViewStyle>;
  circleSize: number;
  face: { imageUrl: string };
  offset: number;
}

export function Circle(props: CircleProps): JSX.Element;

interface FacePileProps {
  faces: Array<{ imageUrl: string; id?: string }>;
  circleSize?: number;
  hideOverflow?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  circleStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ViewStyle>;
  overflowStyle?: StyleProp<ViewStyle>;
  overflowLabelStyle?: StyleProp<TextStyle>;
  numFaces?: number;
  offset?: number;
  borderColor?: string;
}

export default function FacePile(props: FacePileProps): JSX.Element;
