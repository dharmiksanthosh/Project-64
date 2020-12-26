import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import dict from '../db'

export default class HomeScreen extends React.Component {
    constructor(){
        super();
        this.state={
          word:""
        }
      }
    getWord=(text)=>{
        var text = text.toLowerCase()
        try {
            var word = dict[text]["Word"]
            var lexicalCategory = dict[text]["lexicalCategory"]
            var def = dict[text]["definition"]
            this.setState({
                "word":word,
                "lexicalCategory":lexicalCategory,
                "definition":def
            })
        }
        catch (err) {
            alert("Sorry This word is not available for now")
            this.setState({
                'text':'',
                'isSearchPressed':false
            })
        }
    }
    render(){
        return(
            <View>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={text => {
                        this.setState({
                            text : text,
                            isSearchedPressed : false,
                            word : "Loading...",
                            lexicalCategory : '',
                            examples : [],
                            definition : ""
                        });
                    }}
                    value={this.state.text}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={ () => {
                        this.setState({ isSearchedPressed: true });
                        this.getWord(this.state.text)
                    }}>
                    <Text style={styles.butit}>Search</Text>
                </TouchableOpacity>
                <View style={styles.detCon}>
                    <Text style={styles.detit}>
                        Word :{" "}
                    </Text>
                    <Text style={{fontSize:18}}>
                        {this.state.text}
                    </Text>
                </View>
                <View style={styles.detCon}>
                    <Text style={styles.detit}>
                        Type :{" "}
                    </Text>
                    <Text style={{fontSize:18}}>
                        {this.state.lexicalCategory}
                    </Text>
                </View>
                <View style={styles.detCon}>
                    <Text style={styles.detit}>
                        Definition :{" "}
                    </Text>
                    <Text style={{fontSize:18}}>
                        {this.state.definition}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox:{
        width:400,
        height:50,
        marginTop:30,
        alignSelf:'center',
        textAlign:'center',
        borderWidth:5,
        borderColor:'#000',
        backgroundColor:'#fff'
    },
    button:{
        width:150,
        height:50,
        margin:20,
        padding:10,
        alignSelf:'center',
        textAlign:'center',
        borderWidth:3,
        borderRadius:10,
        borderColor:'#000',
        backgroundColor:'#fff'
    },
    butext:{
        fontSize:20,
        fontWeight:'bold'
    },
    detCon:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignSelf:'center',
        textAlign:'center',
        backgroundColor:'#fff'
    },
    detit:{
        fontSize:20,
        fontWeight:'bold'
    }
})