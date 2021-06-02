import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useGlobalContext} from '../../context/GlobalContext';
import {mappable} from '../../mapping/customMap';

// eslint-disable-next-line prettier/prettier
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import * as React from 'react';
import {
  AddCartImg,
  Iconf,
  ProductsView,
  ViewButton,
} from '../ProductsList/styles';

import Header from '../components/header/Header';
import {Section} from '../components/section/Section';

export const ProductsCart: React.FC = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {cartWish, setCartWish} = useGlobalContext();

  const removeCart = (item: mappable) => {
    if (cartWish !== undefined) {
      setCartWish(cartWish.filter(index => index !== item));
    }
    // console.log('cart wish removed', cartWish && cartWish.length);
  };

  const navigateBack = () => {
    navigation.navigate('home');
  };

  // console.log('products', cartWish);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header
        title="Compra fácil Ton"
        hasCartItems={false}
        showBack={true}
        navigateBack={navigateBack}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Sua Lista de Compras">
          {cartWish &&
            cartWish.map(item => {
              // console.log('products', cartWish);
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
                    <Text> {item.productName}</Text>
                    <Text> R$ {item.price.min}</Text>
                    <ViewButton>
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
    </SafeAreaView>
  );
};
