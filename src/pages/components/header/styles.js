import styled from 'styled-components';
import {colors, metrics} from '../../../styles';

import Icon from 'react-native-vector-icons/Ionicons';

import {getStatusBarHeight} from 'react-native-status-bar-height';

export const ViewHeader = styled.View`
  display: flex;
  height: ${54 + parseInt(getStatusBarHeight(), 5)};
  border-bottom-width: 1;
  border-bottom-color: ${colors.whiteTransparent};
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  background-color: #00CC00;
  padding-bottom: 15px;
`;

export const ViewTitle = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: ${metrics.baseMargin * 2}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: Helvetica-Bold;
  color: ${colors.white};
`;

export const Iconf = styled(Icon)`
  justify-content: flex-end;
  margin-right: ${metrics.baseMargin * 2}px;
  /* border-bottom-color: #000;
  border: 1px; */
`;

export const ProfileTouch = styled.TouchableOpacity``;

export const ProfileTouchBack = styled.TouchableOpacity``;

export const View = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;
