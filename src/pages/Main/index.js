import React from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main(){
    let offset = 0;
    const translateY = new Animated.Value(0);
    const animatedEvent = Animated.event(
        [
            {
                nativeEvent:{
                    translationY: translateY
                }
            }
        ],
        { useNativeDriver: true }
    );

    function onHandlerStateChange(event){
        if(event.nativeEvent.oldState === State.ACTIVE){
            let opened = false;
            const { translationY } = event.nativeEvent;
            offset += translationY;
            if(translationY >= 100){
                opened = true;
            }else{
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }
            Animated.timing(translateY, {
                toValue: opened ? 310 : 0,
                duration: 200,
                useNativeDriver: true
            }).start(() => {
                offset = opened ? 310 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    return (
        <Container>
            <Header />
            <Content>
                <Menu translateY={translateY} />
                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChange}
                >
                <Card style={{
                    transform: [{
                        translateY: translateY.interpolate({
                            inputRange: [-350, 0, 310],
                            outputRange: [-50, 0, 310],
                            extrapolate: 'clamp'
                        })
                    }]
                }}>
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
                </PanGestureHandler>
            </Content>
            <Tabs translateY={translateY} />
        </Container>
    );
}