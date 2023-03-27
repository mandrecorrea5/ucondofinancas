import { SafeAreaView, TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
    width: 100%;
    
    flex: 1;    
    justify-content: center;
    align-items: flex-start;

    margin-bottom: 10px;

    border-radius: 10px;
`;

const Label = styled.Text`
    margin-bottom: 3px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_STRONG};
        font-family: ${theme.FONT_FAMILY.MEDIUM};
    `}
`;

const InputContainer = styled(TouchableOpacity)`
    width: 100%;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 10px;
`;

const TextValue = styled.Text`
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
`;

const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_DARK,
    size: 24,
}))`
    margin-right: 10px;
`;

const ModalContainer = styled(SafeAreaView)`
    flex: 1;
    padding: 16px
`;

const ModalHeader = styled.View`    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

`;

const ModalCancelButtonText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.PURPLE_DARK};
    `}
`;

const ModalTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.PURPLE_DARK};
    `}
`;

const ModalBody = styled.Text`
    flex: 1;
    width: 100%;
    
`;

const ModalContainerItems = styled(TouchableOpacity)`
    width: 100%;
    justify-content: center;
    align-items: center;

`;

const ModalBodyTextOptions = styled.Text`
    width: 100%;    
    margin-bottom: 15px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.PURPLE};
    `}
`;

export {
    Container,
    Label,
    InputContainer,
    TextValue,
    Icon,
    ModalContainer,
    ModalHeader,
    ModalCancelButtonText,
    ModalTitle,
    ModalBody,
    ModalContainerItems,
    ModalBodyTextOptions
}