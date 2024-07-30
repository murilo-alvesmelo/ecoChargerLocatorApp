import {View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Banner from './Components/Banner';
import MapEco from '../../Components/MapEco';
import requestLocationPermission from '../../Controllers/HomeController';
import style from './style';
import BottomSheetEco from '../../Components/BottomSheet';
import {Text} from 'react-native-svg';

export default function HomeScreen() {
  const [location, setLocation] = useState({});
  const [locationPermission, setLocationPermission] = useState<boolean>(false);

  const getLocation = async () => {
    const granted = await requestLocationPermission();
    if (granted) {
      Geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        },
        error => {
          console.error(error);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    }
  };

  const askPermission = useCallback(async () => {
    const granted = await requestLocationPermission();
    if (granted) {
      setLocationPermission(true);
      getLocation();
    }
  }, []);

  useEffect(() => {
    askPermission();
  }, [askPermission]);

  return (
    <View style={style.container}>
      {!locationPermission ? <Banner askPermission={askPermission} /> : null}
      <View style={style.mapView}>
        <MapEco location={location} />
        <BottomSheetEco>
          <Text>OOi</Text>
        </BottomSheetEco>
      </View>
    </View>
  );
}
