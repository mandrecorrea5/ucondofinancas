import { TextInput, TextInputProps } from 'react-native'

import { Container, Label, TInput } from './styles';

type Props = TextInputProps & {
    label: string;
    inputRef?: React.RefObject<TextInput>;
}

export const Input = ({label,inputRef, ...rest }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TInput 
        ref={inputRef}
        {...rest} 
      />
    </Container>
  );
};