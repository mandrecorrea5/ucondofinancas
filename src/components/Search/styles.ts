import { TextInput } from "react-native";
import styled, {css} from "styled-components/native";
import {MaterialIcons} from "@expo/vector-icons";

export const Container = styled.View`
    width: 90%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

    height: 56px;    
`;

export const Input = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_ULTRA_LIGHT};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}

    border-radius: 50px;
    padding:16px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_ULTRA_LIGHT,
    size: theme.FONT_SIZE.LG,
    }))`      

    justify-content: center;
    align-items: center;
    
    margin-left: 12px;
`;
