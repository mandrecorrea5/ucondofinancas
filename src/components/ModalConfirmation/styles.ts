import styled, {css} from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    color: theme.COLORS.RED,
    size: theme.FONT_SIZE.XXL,
    }))`      

    justify-content: center;
    align-items: center;
    
    margin-left: 12px;
`;

export const TextConfirmation = styled.Text`
    text-align: center;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;

export const TextConfirmationHighlight = styled.Text`
    margin-left: 5px;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const ButtonsContainer = styled.View`    
    width: 60%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;    
`;

export const ButtonsContent = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonCancel = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;    
    background-color: transparent;    
`;

export const ButtonCancelText = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.RED};
    `}
`;

export const ButtonConfirm = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;    
    background-color: ${({theme}) => theme.COLORS.RED};
    border-radius: 20px;
    min-height: 40px;
    padding: 0 10px;
`;

export const ButtonConfirmText = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`;