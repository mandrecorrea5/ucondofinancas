import styled, {css} from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
    width: 90%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-bottom: 32px;
`;

export const BackButton = styled.TouchableOpacity`  
    margin-right: 5px;  
`;

export const BackIcon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 20,
    color: theme.COLORS.WHITE,
}))``;

export const Title = styled.Text`
    flex: 1;
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const ActionButton = styled.TouchableOpacity``;

export const AddButtonIcon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.WHITE,
}))``;

export const ConfirmButtonIcon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 22,
    color: theme.COLORS.WHITE,
}))``;

