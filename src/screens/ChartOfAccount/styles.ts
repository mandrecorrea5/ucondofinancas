import styled, {css} from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
    flex: 1;    
    align-items: center;

    padding-top: 40px;

    background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
`;

export const Content = styled.View`    
    width: 100%;

    flex: 1;
    align-items: flex-start;
    justify-content: center;

    margin-top: 32px;
    padding: 0 15px;

    border-top-left-radius: 24px;
    border-top-right-radius: 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const ContentFlatList = styled.View`
    width: 100%;
    height: 90%;

    align-items: center;
    justify-content: center;
     
    border: 1px solid black
`;

export const HeaderList = styled.View`

    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: 32px 0 12px;    
`;

export const Title = styled.Text`
    flex: 1;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_DARK};
    `}
`;

export const NumberOfRecords = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_LIGHT};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `};
`;