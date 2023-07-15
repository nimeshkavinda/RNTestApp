import React from 'react';
import {
  Image,
  SectionList,
  Text,
  TouchableOpacity,
  View,
  SectionListRenderItem,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {HomeStackParamList} from '../../routes/HomeStack';
import {Header, TextInput, Icon, ProductItem} from '@app/components';
import {colors} from '@app/theme';
import styles from './styles';
import {SECTIONS} from '../../data/mockData';
import type {Banner, Product, Section} from '../../data/mockData';

const NO_OF_COLUMNS = 2;

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = ({}: Props) => {
  const renderBanner = () => {
    return (
      <Image
        style={styles.banner}
        resizeMode="cover"
        source={require('@proj/assets/banner.png')}
      />
    );
  };

  const renderSectionHeader = ({section}: any) => {
    if (section.title === 'Banner') {
      return null;
    }

    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
        <TouchableOpacity style={styles.moreLink}>
          <Text style={styles.moreLinkText}>Shop More</Text>
          <Icon name="arrow-right" size={16} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderProduct: SectionListRenderItem<Product | Banner, Section> = ({
    index,
    section,
  }) => {
    if (section.title === 'Banner') {
      return null;
    }

    if (index % NO_OF_COLUMNS !== 0) {
      return null;
    }

    const products: Product[] = section.data.filter(
      (item): item is Product => 'price' in item,
    );

    const items: JSX.Element[] = products
      .slice(index, index + NO_OF_COLUMNS)
      .map(item => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          discount={item.discount}
          imgUrl={item.imgUrl}
        />
      ));

    return <View style={styles.productContainer}>{items}</View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TextInput
        icon="magnify"
        placeholder="Search for items"
        style={styles.search}
      />
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item: any, index: number) => item.id + index}
        ListHeaderComponent={renderBanner}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
};

export default Home;
