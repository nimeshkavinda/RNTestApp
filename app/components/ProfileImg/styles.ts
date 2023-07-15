import {StyleSheet} from 'react-native';
import theme from '@app/theme';

const styles = StyleSheet.create({
  profileImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 36,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.darkGray,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  profileImg: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 8,
    color: theme.colors.text,
  },
  role: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.text,
  },
});

export default styles;
