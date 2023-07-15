import {StyleSheet} from 'react-native';
import theme from '@app/theme';

const styles = StyleSheet.create({
  menuContainer: {
    borderRadius: 16,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.darkGray,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    margin: 20,
    paddingHorizontal: 16,
  },
  menuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  borderBottom: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    color: theme.colors.text,
    fontSize: 14,
  },
  icon: {
    padding: 8,
    borderRadius: 8,
    marginRight: 12,
  },
});

export default styles;
