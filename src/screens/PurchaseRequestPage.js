import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export function PurchaseRequestPage({ navigation }){

	const [value, onChangeText] = React.useState('');
	const [val, onChangeItem] = React.useState('');
	const [valuepapers, onChangeTextdesc] = React.useState('');

    return(
        <View style={{ flex: 1, marginTop: 20}}>
            <View style={{
				marginLeft: 20,
				marginRight: 20,
            	}}>
                <Text style={{
					marginLeft: 20,
					fontWeight: "bold",
					fontSize: 15,
				}}>Item No</Text>
            	<TextInput
					style={{
						marginTop:5,
						marginLeft: 20,
						marginRight: 20,
						borderBottomColor: '#000000',
						borderBottomWidth: 1,
						height: 50,
						borderColor: 'gray',
						borderWidth: 1,
						textAlign: 'left',
						paddingLeft: 20,
					}}
				onChangeText={(text) => onChangeText(text)}
				value={value}
				placeholder="Enter Item No......"
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
				}}>Category</Text>
            	
				<DropDownPicker
						items={[
							{ label: 'Year 6', value: 'Year 6' },
							{ label: 'Year 7', value: 'Year 7' },
							{ label: 'Year 8', value: 'Year 8' },
							{ label: 'Year 9', value: 'Year 9' },
							{ label: 'Year 10', value: 'Year 10' },
							{ label: 'Year 11', value: 'Year 11' },
							{ label: 'Year 12', value: 'Year 12' },
							{ label: 'Year 13', value: 'Year 13' },
						]}
						containerStyle={{ height: 60 }}
						style={{ backgroundColor: '#fafafa',  marginLeft: 20,
						marginRight: 20, marginTop:5}}
						placeholder={'Select Category'}
						itemStyle={{
							justifyContent: 'flex-start',
						}}
						dropDownStyle={{ backgroundColor: '#fafafa' }}
						onChangeItem={(val) =>
							onChangeItem({
								val: val,
							})
						}
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
				}}>Notes</Text>
            	
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
				onChangeText={(textdesc) => onChangeTextdesc(textdesc)}
				value={valuepapers}
				placeholder="Write notes here......"
				numberOfLines={2}
				multiline={false}
			/>
            </View>

				<View style={{

					justifyContent: "space-evenly",
					flexDirection: 'row',
					marginTop: 20

					}}>
					<TouchableOpacity style={{
						backgroundColor: '#0388fc',
						padding: 15,
						marginLeft: 20,
						marginRight: 20,
						marginTop: 10,
						borderRadius: 5,
						width: 115,
						
					}}  onPress={() => Alert.alert('Successfully submitted')} >
						<Text style={{color: "white", fontWeight: "bold", textAlign: "center"}}>Inquire</Text>
					</TouchableOpacity>

					<TouchableOpacity style={{
						backgroundColor: '#0388fc',
						padding: 15,
						marginLeft: 20,
						marginRight: 20,
						marginTop: 10,
						borderRadius: 5,
						
						
					}}  onPress={() => Alert.alert('Successfully submitted')} >
					<Text style={{color: "white", fontWeight: "bold", textAlign: "center"}}> View Inquire</Text>
					</TouchableOpacity>
				</View>
			

        </View>
    )
}