import React, {Fragment} from 'react';
import {
  ViewHeader,
  Title,
  Iconf,
  ViewTitle,
  ProfileTouch,
  ProfileTouchBack,
} from './styles';

interface childProps {
  title: string;
  hasCartItems: boolean;
  showBack?: boolean;
  showCart?: () => void;
  navigateBack?: () => void;
}

const Header: React.FC<childProps> = ({
  title,
  hasCartItems = false,
  showBack,
  showCart,
  navigateBack,
}) => (
  <Fragment>
    <ViewHeader>
      <ViewTitle>
        {showBack && (
          <ProfileTouchBack onPress={navigateBack}>
            <Iconf name={'arrow-back-outline'} size={28} color="#fff" />
          </ProfileTouchBack>
        )}
        <Title>{title}</Title>
        <ProfileTouch disabled={!hasCartItems} onPress={showCart}>
          <Iconf
            name={hasCartItems ? 'cart' : 'cart-outline'}
            size={28}
            color="#fff"
          />
        </ProfileTouch>
      </ViewTitle>
    </ViewHeader>
  </Fragment>
);

export default Header;
