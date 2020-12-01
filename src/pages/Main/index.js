import React from 'react';

import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tabs from '../../components/Tabs';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main(){
    return (
        <Container>
            <Header />
            <Content>
                <Card>
                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666" />
                        <Icon name="visibility-off" size={28} color="#666" />
                    </CardHeader>
                    <CardContent>
                        <Title>Estado da credencial</Title>
                        <Description>Ativa</Description>
                    </CardContent>
                    <CardFooter>
                        <Annotation>A ultima autenticação foi local, tendo ocorrido no dia 26/10/20 às 16:48</Annotation>
                    </CardFooter>
                </Card>
            </Content>
            <Tabs />
        </Container>
    );
}