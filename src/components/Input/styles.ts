import styled, {css} from "styled-components/native";
import {TextInput} from "react-native";

export const Container = styled.View`
    width: 100%;
    
    flex: 1;    
    justify-content: center;
    align-items: flex-start;

    margin-bottom: 10px;

    border-radius: 10px;
`

export const Label = styled.Text`
    margin-bottom: 3px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_STRONG};
        font-family: ${theme.FONT_FAMILY.MEDIUM};
    `}
`;

export const TInput = styled(TextInput)`
    width: 100%;

    flex: 1;
    
    min-height: 43px;
    max-height: 43px;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.WHITE};
        color: ${theme.COLORS.GRAY_DARK};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}

    border-radius: 10px;
    padding: 8px 16px;
`