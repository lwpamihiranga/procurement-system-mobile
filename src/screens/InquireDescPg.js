import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, Button } from 'react-native';



export function InquireDescPg({ navigation }){

    const [valuepapers, onChangeTextdescin] = React.useState('');

    return(
        <View style={{ flex: 1, marginTop: 20}}>


            	<View style={{
				marginLeft: 20,
				marginRight: 20,
				marginTop: 30
            	}}>
                <Text style={{
					marginLeft: 20,
					fontWeight: "bold",
					fontSize: 15,
				}}>Item Descriptions</Text>
            	
				<TextInput
				style={{
					marginLeft: 20,
					marginRight: 20,
					marginTop: 10,
					borderBottomColor: '#000000',
					borderBottomWidth: 1,
					height: 100,
					borderColor: 'gray',
					borderWidth: 1,
					textAlign: 'left',
					paddingLeft: 20,
				}}
				onChangeText={(textdesc) => onChangeTextdescin(textdesc)}
				value={valuepapers}
				placeholder="Write notes here......"
				numberOfLines={2}
				multiline={false}
				/>
				
            </View>





            <View style={{
				marginLeft: 20,
				marginRight: 20,
				marginTop: 30
            	}}>
                <Text style={{
					marginLeft: 20,
					fontWeight: "bold",
					fontSize: 15,
				}}>Reply</Text>
            	
				<TextInput
				style={{
					marginLeft: 20,
					marginRight: 20,
					marginTop: 10,
					borderBottomColor: '#000000',
					borderBottomWidth: 1,
					height: 100,
					borderColor: 'gray',
					borderWidth: 1,
					textAlign: 'left',
					paddingLeft: 20,
				}}
				onChangeText={(textdesc) => onChangeTextdescin(textdesc)}
				value={valuepapers}
				placeholder="Write notes here......"
				numberOfLines={2}
				multiline={false}
				/>
				
            </View>



            <View>
            <TouchableOpacity style={{
						backgroundColor: '#0388fc',
						padding: 15,
						marginLeft: 39,
						marginRight: 39,
						marginTop: 80,
						borderRadius: 5,	
					}} onPress={() => Alert.alert('Successfully submitted')} >
                        
					<Text style={{color: "white", fontWeight: "bold", textAlign: "center"}}> Reply</Text>
					</TouchableOpacity>
                </View>
        </View>
    )
}