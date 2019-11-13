import React from 'react';
import { View, Text,Platform} from 'react-native';


class App extends React.Component {
    render() {
        console.disableYellowBox=true;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' , marginLeft:20}}>
                
              <Text>
                  USe AR
              </Text>

            </View>
        )
    }
}
export default App;