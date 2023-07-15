import {StyleSheet} from 'react-native';
import theme from '@app/theme';

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
