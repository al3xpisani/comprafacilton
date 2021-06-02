import styled from 'styled-components';
import {colors, metrics} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const ProductsView = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px;
  border-color: #fff;
  margin-left: ${metrics.baseMargin * 1}px;
  margin-right: ${metrics.baseMargin * 1}px;
  border-bottom-width: 3px;
`;
export const Iconf = styled(Icon)`
  justify-content: flex-start;
  flex-direction: row;
  margin-right: ${metrics.baseMargin * 1}px;
  padding: ${metrics.baseMargin * 1}px;
  /* border-bottom-color: #000;
  border: 1px; */
`;

export const AddCartImg = styled.TouchableOpacity``;

export const ViewButton = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px;
  border-color: #fff;
  margin-left: ${metrics.baseMargin * 2}px;
  border-bottom-width: 3px;
`;
