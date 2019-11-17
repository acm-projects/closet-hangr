import React from "react";
import { FlatList, View, Platform, Dimensions, Image, Text } from "react-native";
import * as backEndFunctions from './backend/back_end_functions'
import uuid from 'uuid/v4'

export const ITEM_WIDTH = 1.0 * Dimensions.get('window').width * 11/16
export const ITEM_MARGINS = 1.0 * Dimensions.get('window').width*3/32
export const ITEM_TOTAL_SIZE = ITEM_WIDTH + ITEM_MARGINS*2

function Item({ uri }) {
  return (
    <View>
      <Image source={{uri: uri}} style = {{width: ITEM_WIDTH, height: ITEM_WIDTH, marginHorizontal: ITEM_MARGINS}}/>
    </View>
  );
}

class Paginator extends React.PureComponent {
constructor(props) {  
  super(props);
  this.flatList = null 
  this.offset = 0
}

componentDidMount() {
  this.setState({
    width: null, height: null 
  })
}

getWrappableData = (data) => {
  let wrappableData = data
  if(wrappableData.length == 1 && wrappableData[0] != undefined) {
    let bufferItem = {id: 'n', uri: wrappableData[0].uri}
    wrappableData.unshift(bufferItem)
    bufferItem = {id: 'n-1', uri: wrappableData[0].uri}
    wrappableData.unshift(bufferItem)
    bufferItem = {id: '0', uri: wrappableData[0].uri}
    wrappableData.push(bufferItem)
    bufferItem = {id: '1', uri: wrappableData[0].uri}
    wrappableData.push(bufferItem)

    return wrappableData
  }
  else if(wrappableData.length > 1 && wrappableData[0] != undefined) {
    //Add the last item in the list to the beginning of the list
    if(wrappableData[0].id != 'n' && wrappableData[1].id != 'n')
    {
      let bufferItem = {id: 'n', uri: wrappableData[wrappableData.length-1].uri}
      wrappableData.unshift(bufferItem)
    }
    //Add the 2nd to last item in the list to the beginning of the list
    if (wrappableData[1].id != 'n-1' && wrappableData[0].id != 'n-1' )
    {
      let bufferItem = {id: 'n-1', uri: 'https://fbs8083.files.wordpress.com/2019/01/blank-white-square-thumbnail.jpg'}
      wrappableData.unshift(bufferItem)
    }
    //Add the 3rd item in the list (original 1st item) to the end of the list
    if (wrappableData[wrappableData.length-1].id != '0' && wrappableData[wrappableData.length-2].id != '0')
    {
      let bufferItem = {id: '0', uri: wrappableData[2].uri}
      wrappableData.push(bufferItem)
    }
    //Add 4th item in the list (original 2nd item) to teh end of the list
    if (wrappableData[wrappableData.length-1].id != '1' && wrappableData[wrappableData.length-2].id != '1')
    {
      let bufferItem = {id: '1', uri: 'https://fbs8083.files.wordpress.com/2019/01/blank-white-square-thumbnail.jpg'}
      wrappableData.push(bufferItem)
    }
    return wrappableData
  }

  return data
}

render() {
  return (
    <View>
      <FlatList
        {...this.props}
        ref={ref => (this.flatList = ref)}  
        data={this.getWrappableData(this.props.data)}
        renderItem={({item})=><Item uri={item.uri}/> } 
        getItemLayout={(data, index) => (
          { length: ITEM_TOTAL_SIZE, offset: ITEM_TOTAL_SIZE * index, index }
        )}
        initialScrollIndex = {2}
        horizontal = {true}
        pagingEnabled = {true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={this.props.contentContainerStyle} 
        keyExtractor={item => item.id}
        initialNumToRender={1}
        marginHorizontal = {(Dimensions.get('window').width - ITEM_TOTAL_SIZE)/2}
        removeClippedSubviews = {true}
        
        onLayout={ ({nativeEvent}) => {
          const {width, height} = nativeEvent.layout
          this.setState({
            width, height
          })
          }
        }

        onScroll={ ({ nativeEvent }) => {
          const { x } = nativeEvent.contentOffset
          this.offset = x;
          if(x > ((this.props.data.length-2) * this.state.width)) {
            //Move seamlessly to the first unique element (the first element that does have a copy)
            this.flatList.scrollToOffset({offset: x - ((this.props.data.length-2) * this.state.width) + (2*this.state.width), animated: false})
          }
          else if(x < this.state.width)
          {
            //Move seamlessly to the last unique element in the list
            this.flatList.scrollToOffset({offset: ((this.props.data.length-3)*this.state.width) - (this.state.width-x), animated: false})
          }
        } }  
      />
   </View>
  );
 }
}
export default Paginator;