import {StyleSheet} from 'react-native';
import {colors} from '@app/theme';

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 14,
    backgroundColor: colors.gray,
    paddingLeft: 16,
  },
  errorText: {
    color: colors.highlight,
    fontSize: 14,
    marginTop: 8,
  },
});

export default styles;
