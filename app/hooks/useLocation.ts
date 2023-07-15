import {useState, useEffect} from 'react';
import {PermissionsAndroid, PermissionStatus} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

const useLocation = () => {
  const [hasPermission, setHasPermission] = useState<PermissionStatus | null>(
    null,
  );
  const [location, setLocation] = useState<GeoPosition>({
    coords: {},
  } as GeoPosition);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'This app requires your location',
          message: 'Allow app to access your location?',
          buttonNegative: 'No',
          buttonPositive: 'Yes',
        },
      );
      setHasPermission(granted);
    } catch (error) {
      console.log('Permission request error:', error);
      setHasPermission('denied');
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (hasPermission === 'granted') {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          setLocation(position);
        },
        error => {
          console.log(error.code, error.message);
          setLocation({coords: {}} as GeoPosition);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [hasPermission]);

  const handlePermissionRequest = () => {
    requestLocationPermission();
  };

  return {location, hasPermission, handlePermissionRequest};
};

export default useLocation;
