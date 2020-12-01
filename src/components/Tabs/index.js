import React from 'react';

import { Container, TabsContainer, TabItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs(){
    return(
        <Container>
            <TabsContainer>
                <TabItem>
                    <Icon name="settings-input-antenna" size={24} color="#FFF" />
                    <TabText>Alterar Credencias</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="view-headline" size={24} color="#FFF" />
                    <TabText>Historico de Acessos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="security" size={24} color="#FFF" />
                    <TabText>Segurança</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="room" size={24} color="#FFF" />
                    <TabText>Ativar Roaming</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabText>Bloquear Credencial</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}