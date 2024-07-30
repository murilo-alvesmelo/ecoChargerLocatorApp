import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {styleMap} from './styleMap';

export default function MapEco({location}) {
  return (
    <MapView
      style={{flex: 1}}
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
