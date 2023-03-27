import { Container, Title, ColorTitleProps, DeleteButton, DeleteButtonIcon} from './styles'

type Props = ColorTitleProps & {
    title: string
    onDelete: () => void
}

export const ChartOfAccountItem = ({title, tintColor = 'primary', onDelete, ...props}: Props) => {    

    return (
        <Container {...props}>
            <Title tintColor={tintColor}>{title}</Title>
            
            <DeleteButton onPress={onDelete}>
                <DeleteButtonIcon name="delete-outline" />
            </DeleteButton>            
        </Container>
    )
}