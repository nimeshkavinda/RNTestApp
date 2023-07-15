import {StyleSheet} from 'react-native';
import theme from '@app/theme';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.darkGray,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 16,
  },
  locationText: {},
  notificationButton: {
    padding: 10,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadius,
    elevation: 8,
    shadowColor: theme.colors.darkGray,
  },
});

export default styles;
