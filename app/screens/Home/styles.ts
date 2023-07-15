import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@app/theme';

let {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  search: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  banner: {
    width: width * 0.92,
    height: 200,
    marginTop: 8,
    marginBottom: 16,
    alignSelf: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sectionHeaderText: {
    fontWeight: '700',
    color: colors.text,
    fontSize: 16,
  },
  moreLinkText: {color: colors.secondary, fontSize: 14},
  moreLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
});

export default styles;
