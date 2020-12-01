import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Perfil, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }){
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1]
            })
        }}>
            <Perfil>Perfil: Alunos</Perfil>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Ajuda-me</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="explore" size={20} color="#FFF" />
                    <NavText>Mapa da rede</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="perm-data-setting" size={20} color="#FFF" />
                    <NavText>Configurar rede</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="app-settings-alt" size={20} color="#FFF" />
                    <NavText>Configurar APP</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>TERMINAR SESSÃO</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}