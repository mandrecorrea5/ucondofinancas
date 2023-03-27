import { Container, LoadingIndicator } from './styles'

type Props = {
    size?: number | 'small' | 'large';
}

export const Loading = ({ size = 'small' }: Props) => {
    return (
        <Container>
            <LoadingIndicator size={size} />
        </Container>
    );
};