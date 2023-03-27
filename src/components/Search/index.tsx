import { TextInputProps } from 'react-native'
import { Container, Input, Icon } from './styles'

import { useTheme } from 'styled-components'

type Props = TextInputProps &{
    setValues: (value: string) => void;
}

export const Search = ({setValues, ...rest}: Props) => {
    const {COLORS} = useTheme();
    return (
        <Container>
            <Icon name="search"  />
            <Input 
                {...rest}
                placeholder="Pesquisar conta" 
                placeholderTextColor={COLORS.GRAY_LIGHT}
                onChangeText={setValues}
            />        
        </Container>
    )
}