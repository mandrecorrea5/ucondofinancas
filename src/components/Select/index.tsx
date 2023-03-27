import { AccountDTO } from "@models/AccountDTO";
import { useState } from "react";
import { Modal, TouchableOpacity, Text, FlatList } from "react-native";
import { 
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
} from "./styles";

type Props = {
    label: string;
    options: string[];    
    onChange: (value: string) => void;
    textValue?: string;
};

export const Select = ({ label, options, onChange, textValue}: Props) => {

  const [modalOpened, setModalOpened] = useState(false);

  const renderOptions = (item: any) => {    
    return (
      <ModalContainerItems 
        onPress={() =>{
          onChange(item)
          setModalOpened(false)
        }}>
        <ModalBodyTextOptions>{item}</ModalBodyTextOptions>
      </ModalContainerItems>
    )
  }

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer onPress={() => setModalOpened(true)}>

        <TextValue 
          numberOfLines={1}>
            {textValue || 'Selecione uma opção'}
        </TextValue>
        
        <Icon name="arrow-drop-down" />
      </InputContainer>
      <Modal 
        animationType="slide" 
        visible={modalOpened} 
        onRequestClose={() => setModalOpened(false)}
      >
        <ModalContainer>
          <ModalHeader>
            <TouchableOpacity onPress={() => setModalOpened(false)}>
              <Icon name="chevron-left" />
            </TouchableOpacity>
            
            <ModalTitle>{label}</ModalTitle>

            <TouchableOpacity onPress={() => setModalOpened(false)}>
              <ModalCancelButtonText>Cancelar</ModalCancelButtonText>
            </TouchableOpacity>
          </ModalHeader>

          <ModalBody>
            <FlatList
              data={options || []}
              keyExtractor={item => item}
              renderItem={({ item }) => renderOptions(item)}
            />
          </ModalBody>          
        </ModalContainer>
      </Modal>
    </Container>
  );
};

