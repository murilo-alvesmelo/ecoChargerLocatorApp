import {Platform} from 'react-native';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const requestLocationPermission = async () => {
  let permission;

  if (Platform.OS === 'ios') {
    permission = PERMISSIONS.IOS.LOCATION_ALWAYS;
  } else {
    permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  }

  const result = await request(permission);

  if (result === RESULTS.GRANTED) {
    return true;
  } else {
    return false;
  }
};

export default requestLocationPermission;
