import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons';

export type ColorTitleProps = {
    tintColor?: 'primary' | 'secundary';
} 

export const Container = styled.View`
    width: 100%;
    height: 56px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 16px;

    padding: 0 16px;

    margin-bottom: 12px;
      
`;

export const Title = styled.Text<ColorTitleProps>`
    flex: 1;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;        
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}

    color: ${({ theme, tintColor }) => tintColor === 'primary' ? theme.COLORS.PRIMARY : theme.COLORS.SECUNDARY};
`;

export const DeleteButton = styled(TouchableOpacity)``;

export const DeleteButtonIcon = styled(MaterialIcons).attrs(({ theme }) => ({    
    size: 24,
    color: theme.COLORS.GRAY_LIGHT,
}))``;
