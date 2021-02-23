import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ShimmerContentListHero = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 18,
          marginLeft: 80,
        }}
      >
        <View
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
          }}
        />

        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 120, height: 20, borderRadius: 4 }} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export { ShimmerContentListHero };
