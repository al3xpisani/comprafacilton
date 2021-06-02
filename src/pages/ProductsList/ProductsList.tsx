import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  ProductsView,
  AddCartImg,
  Iconf,
  ViewButton,
  TextProductName,
} from './styles';

// eslint-disable-next-line prettier/prettier
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header from '../components/header/Header';
import {mapProducts} from '../../mapping/customMap';
import faker from 'faker';
import {useGlobalContext} from '../../context/GlobalContext';

const Section: React.FC<{title?: string}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export const ProductsList: React.FC = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {cartWish, setCartWish} = useGlobalContext();
  const [products, setProducts] = useState<mapProducts | undefined>([]);

  useEffect(() => {
    faker.locale = 'pt_BR';
    const createProduct = () => {
      return {
        uuid: faker.datatype.uuid(),
        productName: faker.commerce.productName(),
        price: {min: Number(faker.commerce.price())},
        productDescription: faker.commerce.productDescription(),
        image: faker.image.image(),
      };
    };

    setProducts(new Array(10).fill(undefined).map(createProduct));
  }, []);

  const addCart = item => {
    console.log('cart added', cartWish);
    if (cartWish !== undefined) {
      setCartWish([...cartWish, item]);
    }
  };

  const removeCart = item => {
    if (cartWish !== undefined) {
      setCartWish(cartWish.filter(index => index !== item));
    }

    // console.log('cart removed', cartWish && cartWish.length);
  };

  const showCart = () => {
    navigation.navigate('cart');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header
        title="Compra fácil Ton"
        hasCartItems={
          cartWish !== undefined && cartWish.length !== 0 ? true : false
        }
        showCart={showCart}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="">
            {products &&
              products.map(item => {
                return (
                  <ProductsView key={item.uuid}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        width: 128,
                        height: 128,
                        borderRadius: 4,
                        overflow: 'hidden',
                      }}
                    />
                    <View>
                      <TextProductName numberOfLines={1}>
                        {' '}
                        {item.productName}
                      </TextProductName>
                      <Text style={{fontWeight: 'bold'}}>
                        {' '}
                        R$ {item.price.min}
                      </Text>
                      <ViewButton>
                        <AddCartImg onPress={() => addCart(item)}>
                          <Iconf
                            name={'add-circle-outline'}
                            size={38}
                            color="#000"
                          />
                        </AddCartImg>
                        <AddCartImg onPress={() => removeCart(item)}>
                          <Iconf
                            name={'close-circle-outline'}
                            size={38}
                            color="#000"
                          />
                        </AddCartImg>
                      </ViewButton>
                    </View>
                  </ProductsView>
                );
              })}
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
