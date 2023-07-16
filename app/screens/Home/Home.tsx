import React, {useEffect, useState} from 'react';
import {
  Image,
  SectionList,
  Text,
  TouchableOpacity,
  View,
  SectionListRenderItem,
  RefreshControl,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {HomeStackParamList} from '../../routes/HomeStack';
import {Header, TextInput, Icon, ProductItem, Spinner} from '@app/components';
import {colors} from '@app/theme';
import styles from './styles';
import {SECTIONS} from '../../data/productTypes';
import type {Banner, Product, Section} from '../../data/productTypes';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getProfile} from '../../store/slices/auth';
import {getProducts} from '../../store/slices/product';

const NO_OF_COLUMNS = 2;

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = ({}: Props) => {
  const dispatch = useAppDispatch();
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {getProductsStatus} = useAppSelector(state => state.product);

  const onRefresh = () => {
    setIsRefreshing(true);
    dispatch(getProducts(page))
      .then(responseData => {
        setProductsData(responseData.payload.data.products);
        setPage(1);
        setIsRefreshing(false);
      })
      .catch(error => {
        console.error(error);
        setIsRefreshing(false);
      });
    dispatch(getProfile());
  };

  useEffect(() => {
    fetchProductsData();
    dispatch(getProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProductsData = () => {
    setIsLoading(true);
    dispatch(getProducts(page))
      .then(responseData => {
        const newProductsData = [
          ...productsData,
          ...responseData.payload.data.products,
        ];
        setProductsData(newProductsData);
        setPage(prevPage => prevPage + 1);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const handleLoadMore = () => {
    if (!isLoading) {
      fetchProductsData();
    }
  };

  const productsSection: Section = {
    title: 'Recommended For You',
    data: productsData,
  };

  const updatedSections: Section[] = [...SECTIONS, productsSection];

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
          key={item.code}
          id={item.code}
          title={item.name}
          price={item.price}
          rating={item.rate}
          discount={item.discount}
          imgUrl={item.images[0]?.url}
        />
      ));

    return <View style={styles.productContainer}>{items}</View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {getProductsStatus === 'loading' && <Spinner />}
      <TextInput
        icon="magnify"
        placeholder="Search for items"
        style={styles.search}
      />
      <SectionList
        sections={updatedSections}
        keyExtractor={(item: any) => item.code}
        ListHeaderComponent={renderBanner}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderProduct}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            colors={[colors.secondary]}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
