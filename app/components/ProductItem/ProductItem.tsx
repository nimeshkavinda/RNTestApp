import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Icon} from '@app/components';
import theme from '@app/theme';
import styles from './styles';

export interface ProductItemProps {
  id: number;
  title: string;
  price: string;
  rating: string;
  discount: string;
  imgUrl: string;
  onPress?: () => void;
  onAddToCart?: () => void;
}

export function ProductItem({
  //   id,
  title,
  price,
  rating,
  discount,
  imgUrl,
  onPress,
  onAddToCart,
}: ProductItemProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.productItem} onPress={onPress}>
      <View style={styles.discount}>
        <Text style={styles.discountText}>{discount}</Text>
      </View>
      <Image
        style={styles.productImg}
        resizeMode="cover"
        source={{uri: imgUrl}}
      />
      <View style={styles.rating}>
        <Icon name="star" color={theme.colors.secondary} size={16} />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <Text style={styles.titleText} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.productItemFooter}>
        <View style={styles.priceContainer}>
          <Text style={[styles.priceText, styles.halfOpacity]}>{price}</Text>
          <Text style={styles.priceText}>{price}</Text>
        </View>
        <TouchableOpacity onPress={onAddToCart}>
          <LinearGradient
            colors={['#ff9005', theme.colors.secondary, '#FF4E00']}
            style={styles.addToCartButton}>
            <Icon color={theme.colors.white} size={16} name="plus" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
