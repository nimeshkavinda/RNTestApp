import {StyleSheet, Dimensions} from 'react-native';
import theme from '@app/theme';

const styles = StyleSheet.create({
  productItem: {
    width: Dimensions.get('window').width / 2 - 24,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.darkGray,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: theme.borderRadius,
    borderBottomLeftRadius: theme.borderRadius,
    borderBottomRightRadius: theme.borderRadius,
    margin: 8,
    justifyContent: 'space-between',
  },
  productImg: {
    width: '100%',
    height: 130,
    borderTopLeftRadius: theme.borderRadius,
    borderTopRightRadius: theme.borderRadius,
  },
  halfOpacity: {opacity: 0.5},
  discount: {
    zIndex: 1,
    position: 'absolute',
    top: 10,
    backgroundColor: theme.colors.text,
  },
  discountText: {
    color: theme.colors.white,
    fontSize: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  rating: {
    zIndex: 1,
    position: 'absolute',
    right: 10,
    top: 120,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 2,
    shadowColor: theme.colors.darkGray,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  ratingText: {fontSize: 12, color: theme.colors.secondary},
  titleText: {
    fontSize: 16,
    color: theme.colors.text,
    fontWeight: '400',
    marginVertical: 12,
    marginLeft: 8,
    marginRight: 16,
  },
  productItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceContainer: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    marginTop: 4,
  },
  addToCartButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderTopLeftRadius: theme.borderRadius,
    borderBottomRightRadius: theme.borderRadius,
  },
});

export default styles;
