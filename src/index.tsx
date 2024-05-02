import React from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  circleImage: {
    borderWidth: 2,
    borderColor: "white",
  },
  overflow: {
    backgroundColor: "#b6c0ca",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 18,
  },
  overflowLabel: {
    color: "#fff",
    fontSize: 14,
    letterSpacing: -1,
    marginLeft: 3,
    fontWeight: "bold",
  },
  circle: {},
});

interface CircleProps {
  borderColor: string;
  imageStyle: any;
  circleStyle: StyleSheet;
  circleSize: number;
  face: any;
  offset: number;
}

export function Circle({
  borderColor,
  imageStyle,
  circleSize,
  face,
  offset,
}: CircleProps) {
  const innerCircleSize = circleSize * 2;
  const marginRight = circleSize * offset;

  return (
    <Animated.View style={{ marginRight: -marginRight }}>
      <Image
        style={[
          styles.circleImage,
          {
            width: innerCircleSize,
            height: innerCircleSize,
            borderRadius: circleSize,
            borderColor: borderColor,
          },
          imageStyle,
        ]}
        source={{ uri: face.imageUrl }}
      />
    </Animated.View>
  );
}

export function renderFacePile(faces = [], numFaces) {
  const entities = [...faces.reverse()];
  if (!entities.length)
    return {
      facesToRender: [],
      overflow: 0,
    };

  const facesWithImageUrls = entities.filter((e) => e.imageUrl);
  if (!facesWithImageUrls.length)
    return {
      facesToRender: [],
      overflow: 0,
    };

  const facesToRender = facesWithImageUrls.slice(0, numFaces);
  const overflow = entities.length - facesToRender.length;

  return {
    facesToRender,
    overflow,
  };
}

interface FacePileProps {
  faces: any[];
  circleSize: number;
  hideOverflow: boolean;
  containerStyle: any;
  circleStyle: any;
  imageStyle: any;
  overflowStyle: any;
  overflowLabelStyle: any;
  numFaces: number;
  offset: number;
  borderColor: string;
}

export default function FacePile({
  faces,
  hideOverflow = false,
  containerStyle,
  circleStyle,
  imageStyle,
  overflowStyle,
  overflowLabelStyle,
  borderColor,
  circleSize = 20,
  numFaces = 4,
  offset = 1,
}: FacePileProps) {
  function _renderOverflowCircle(overflow) {
    const innerCircleSize = circleSize * 1.8;
    const marginLeft = circleSize * offset - circleSize / 1.6;

    return (
      <View style={[styles.circle, circleStyle]}>
        <View
          style={[
            styles.overflow,
            {
              width: innerCircleSize,
              height: innerCircleSize,
              borderRadius: circleSize,
              marginLeft: marginLeft,
            },
            overflowStyle,
          ]}
        >
          <Text
            style={[
              styles.overflowLabel,
              {
                fontSize: circleSize * 0.7,
              },
              overflowLabelStyle,
            ]}
          >
            +{overflow}
          </Text>
        </View>
      </View>
    );
  }

  function _renderFace(face, index) {
    if (face && !face.imageUrl) return null;

    return (
      <Circle
        key={face.id || index}
        face={face}
        circleStyle={circleStyle}
        borderColor={borderColor}
        imageStyle={imageStyle}
        circleSize={circleSize}
        offset={offset}
      />
    );
  }

  const { facesToRender, overflow } = renderFacePile(faces, numFaces);

  return (
    <View style={[styles.container, containerStyle]}>
      {overflow > 0 && !hideOverflow && _renderOverflowCircle(overflow)}
      {Array.isArray(facesToRender) && facesToRender.map(_renderFace)}
    </View>
  );
}
