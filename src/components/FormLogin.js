import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class formLogin extends Component {
    
    _autenticarUsuario(){
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha});
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25 }} >WhatsApp Type</Text>
                </View>
                <View style={{ flex: 2 }} >
                    <TextInput
                        value={this.props.email}
                        style={{ fontSize: 20, height: 45 }}
                        placeholder='E-mail'
                        onChangeText={texto => this.props.modificaEmail(texto)}
                    />
                    <TextInput
                        secureTextEntry
                        value={this.props.senha}
                        style={{ fontSize: 20, height: 45 }}
                        placeholder='Senha'
                        onChangeText={texto => this.props.modificaSenha(texto)}
                    />
                    <TouchableHighlight onPress={() => Actions.formCadastro()} >
                        <Text style={{ fontSize: 16 }} >Ainda não tem cadastro? Cadastre-se</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 2 }}>
                    <Button
                        title="Acessar"
                        color='#115E54'
                        onPress={() => this._autenticarUsuario()}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, {modificaEmail, modificaSenha, autenticarUsuario})(formLogin);