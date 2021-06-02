import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';
import Toast from 'react-native-simple-toast';

import {
  ProductsView,
  AddCartImg,
  Iconf,
  ViewButton,
  TextProductName,
} from './styles';

import {Section} from '../section/Section';
import Header from '../header/Header';
import {mappable, mapProducts} from '../../../../src/mapping/customMap';

// eslint-disable-next-line prettier/prettier
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {useGlobalContext} from '../../../context/GlobalContext';
import {useNavigation} from '@react-navigation/native';

interface childProps {
  title: string;
  showBack?: boolean;
  products?: mapProducts | undefined;
  enableAddButton?: boolean;
}
export const SectionDetails: React.FC<childProps> = ({
  title,
  showBack,
  products,
  enableAddButton = true,
}) => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {cartWish, setCartWish} = useGlobalContext();

  const addCart = (item: mappable) => {
    // console.log('cart added', cartWish);
    if (cartWish !== undefined) {
      if (!cartWish.find(cart => cart === item)) {
        setCartWish([...cartWish, item]);
      } else {
        Toast.show('Esse item já foi adicionado ao carrinho.');
      }
    }
  };

  const removeCart = (item: mappable) => {
    if (cartWish !== undefined) {
      setCartWish(cartWish.filter(index => index !== item));
    }

    // console.log('cart removed', cartWish && cartWish.length);
  };
  const showCart = () => {
    navigation.navigate('cart');
  };

  const navigateBack = () => {
    navigation.navigate('home');
  };

  // console.log('details...............................', products);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header
        title={title}
        hasCartItems={
          cartWish !== undefined && cartWish.length !== 0 ? true : false
        }
        showCart={showCart}
        showBack={showBack}
        navigateBack={navigateBack}
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
                        {enableAddButton && (
                          <AddCartImg onPress={() => addCart(item)}>
                            <Iconf
                              name={'add-circle-outline'}
                              size={38}
                              color="#000"
                            />
                          </AddCartImg>
                        )}
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
