
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useGlobalContext} from '../../context/GlobalContext';

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

export const ProductsCart: React.FC = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {cartWish, setCartWish} = useGlobalContext();

  const removeCart = item => {
    if (cartWish !== undefined) {
      setCartWish(cartWish.filter(index => index !== item));
    }
    // console.log('cart wish removed', cartWish && cartWish.length);
  };

  const navigateBack = () => {
    navigation.navigate('home');
  };

  console.log('products', cartWish);
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
