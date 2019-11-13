import React from 'react';
import { View, Text,Platform } from 'react-native';
import ARandroid from './ARandroid';
import ARios from './ARios';
class App extends React.Component {
    render() {
        console.disableYellowBox=true;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
               {Platform.OS=='android'
               ?
               <ARandroid/>
               :
               <ARios/>
            }
            {/* <ARios/> */}
            </View>
        )
    }
}
export default App;