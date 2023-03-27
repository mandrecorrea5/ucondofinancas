import React, { useState } from 'react';
import { Modal, Text, View, StyleSheet, Button } from 'react-native';
import { 
    TextConfirmation, 
    TextConfirmationHighlight, 
    Icon, 
    ButtonsContainer, 
    ButtonCancel, 
    ButtonCancelText,
    ButtonConfirm,
    ButtonConfirmText,
    ButtonsContent
} from './styles';

type Props = {
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    textConfirmation: string;
    textHighlight: string;
    iconName: string;
}

const ModalConfirmation = ({ 
    visible, 
    onConfirm, 
    onCancel, 
    textConfirmation, 
    textHighlight,
    iconName 
} : Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onCancel();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Icon name={iconName}  />
            <TextConfirmation>
                {textConfirmation}                 
            </TextConfirmation>    
            <TextConfirmationHighlight>
                {` ${textHighlight}`}
            </TextConfirmationHighlight>      
          <ButtonsContainer>
            <ButtonsContent>
            <ButtonCancel onPress={onCancel}>
                <ButtonCancelText>Não!</ButtonCancelText>
            </ButtonCancel>
            <ButtonConfirm onPress={onConfirm}>
                <ButtonConfirmText>Com certeza</ButtonConfirmText>
            </ButtonConfirm>            
            </ButtonsContent>
          </ButtonsContainer>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },  
});

export { ModalConfirmation } 
