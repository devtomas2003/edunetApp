import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Perfil, Nav, NavItem, NavText, NavButton, SignOutButton, SignOutButtonText } from './styles';

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
                    <NavButton onPress={() => { }}>
                        <NavText>Ajuda-me</NavText>
                    </NavButton>
                </NavItem>
                <NavItem>
                    <Icon name="explore" size={20} color="#FFF" />
                    <NavButton onPress={() => { }}>
                        <NavText>Mapa da rede</NavText>
                    </NavButton>
                </NavItem>
                <NavItem>
                    <Icon name="perm-data-setting" size={20} color="#FFF" />
                    <NavButton onPress={() => { }}>
                        <NavText>Configurar rede</NavText>
                    </NavButton>
                </NavItem>
                <NavItem>
                    <Icon name="app-settings-alt" size={20} color="#FFF" />
                    <NavButton onPress={() => { }}>
                        <NavText>Configurar APP</NavText>
                    </NavButton>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => { }}>
                <SignOutButtonText>TERMINAR SESSÃO</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}