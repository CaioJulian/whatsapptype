import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {

    componentWillMount(){
        this.props.contatosUsuarioFetch();
        this.criaFonteDados( this.props.contatos )
    }

    componentWillReceiveProps(nextProps){
        this.criaFonteDados( nextProps.contatos )
    }

    criaFonteDados( contatos ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.fonteDados = ds.cloneWithRows(contatos)
    }

    render() {
        return (
            <ListView
                enableEmptySections     
                dataSource={this.fonteDados}
                renderRow={data => (
                        <View style={{flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#CCC" }} >
                            <Text style={{ fontSize: 25}} >{data.nome}</Text>
                            <Text style={{ fontSize: 18}} >{data.email}</Text>
                        </View>
                    )
                }

            />
        )
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid }
    }) 
    return { contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);