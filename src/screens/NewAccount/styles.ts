import { KeyboardAvoidingView, ScrollView } from 'react-native'
import styled from "styled-components/native";
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
    
    padding: 25px 15px;

    border-top-left-radius: 24px;
    border-top-right-radius: 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY};    
`;

export const Form = styled(KeyboardAvoidingView)`
    min-height: 65%;
    width: 100%;

    justify-content: flex-start;
    align-items: flex-start;
`;

export const FormScrollView = styled(ScrollView)`
    width: 100%;
`;