import { useNavigation } from '@react-navigation/native';

import { 
    Container, 
    BackButton, 
    BackIcon, 
    Title, 
    ActionButton, 
    AddButtonIcon, 
    ConfirmButtonIcon 
} from './styles'

type Props = {
    showBackButton?: boolean;
    title: string;
    onAdd?: () => void;
    onSave?: () => void;
    buttonConfirm?: 'add' | 'save';
}

export const Header = ({ showBackButton = false, title, onAdd = () => {}, onSave = () => {}, buttonConfirm = 'add' }: Props) => {

    const navigation = useNavigation()

    const handleNavigationBack = () => {
        navigation.goBack();
    }
    return (
        <Container>
            {showBackButton && (
                <BackButton onPress={handleNavigationBack}>
                    <BackIcon name="arrow-back-ios" />
                </BackButton>
            )} 
            <Title>{title}</Title>
            
            {buttonConfirm === 'add' && (
                <ActionButton onPress={onAdd}>
                    <AddButtonIcon name="add" />
                </ActionButton>
            )}
            {buttonConfirm === 'save' && (
                <ActionButton onPress={onSave}>
                    <ConfirmButtonIcon name="check" />
                </ActionButton>                   
                )}                 
        </Container>
    )
}
