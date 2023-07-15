import {StyleSheet} from 'react-native';
import {colors} from '@app/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imgContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headingText: {
    fontSize: 30,
    color: colors.text,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    marginVertical: 16,
  },
});

export default styles;
