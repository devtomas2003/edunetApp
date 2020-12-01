import React from 'react';

import { Container, TabsContainer, TabItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs({ translateY }){
    return(
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 310],
                    outputRange: [0, 30],
                    extrapolate: 'clamp'
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 310],
                outputRange: [1, 0.3],
                extrapolate: 'clamp'
            })
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="edit" size={24} color="#FFF" />
                    <TabText>Alterar Credencial</TabText>
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
                    <Icon name="local-airport" size={24} color="#FFF" />
                    <TabText>Configurar Roaming</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabText>Bloquear Credencial</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}