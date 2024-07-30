import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {styleMap} from './styleMap';
import {StyleSheet} from 'react-native';

type Location = {
  latitude: number;
  longitude: number;
};

export default function MapEco({location}: {location: Location}) {
  return (
    <MapView
      style={style.container}
      provider={PROVIDER_GOOGLE}
      customMapStyle={styleMap}
      initialRegion={{
        latitude: -23.5505,
        longitude: -46.6333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}>
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title="Você"
        description="Sua localização"
      />
    </MapView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
