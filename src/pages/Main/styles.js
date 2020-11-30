import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background: #8B10AE;
    padding-top: ${getStatusBarHeight()}px;
`;