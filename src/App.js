import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ShowBox from '../ShowBoxNativeView'

class App extends React.Component {
    // showModules=()=> {
    //     return (
    //         <View style={{ justifyContent: 'center', alignContent: 'center', backgroundColor:'black'}}>

    //             <ShowBox style={{width:10, height:120}}/>

    //         </View>
    //     )
    // }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                {/* <TouchableOpacity onPress={() => this.showModules()}> */}
                <Text>
                    Prees Here to see Native UI
                </Text>
                {/* </TouchableOpacity> */}
                <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', marginTop:20 }}>

                    <ShowBox exampleProp="Hassam" style={{ width: 120, height: 50}} />

                </View>


            </View>
        )
    }
}
export default App;