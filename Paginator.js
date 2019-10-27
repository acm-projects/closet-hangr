import React from "react";
import { FlatList, View, Platform, Dimensions } from "react-native";
import uuid from 'uuid/v4'

class Paginator extends React.Component {
constructor(props) {  
  super(props);
  this.flatList = null
}

getWrappableData = (data) => {
  if(data.length >= 2) {
    if(data[0] != undefined && data[data.length-2].id != '0') {
        let wrappableData = data
        let bufferItem = {id: '0', uri: data[0].uri}
        wrappableData.push(bufferItem)
        if(data[data.length-1].id != '1')
        {
          let bufferItem1 = {id: '1', uri: data[1].uri}
          wrappableData.push(bufferItem1)
        }
        return wrappableData
    }
  }
  return data
}

render() {
  return (
    <View>
      <FlatList
        {...this.props}
        data={this.getWrappableData(this.props.data)}
        renderItem={this.props.renderItem}
        horizontal = {true}
        pagingEnabled = {true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={this.props.contentContainerStyle} 
        keyExtractor={this.props.keyExtractor}
        getItemLayout={this.getItemLayout}
        
        onLayout={ ({nativeEvent}) => {
          const {width, height} = nativeEvent.layout;
          this.setState({
            width, height
          });
        } }

        onScroll={ ({ nativeEvent }) => {
          const { x } = nativeEvent.contentOffset;
          if(x >= ((this.props.data.length-2) * this.state.width)) {
            this.flatList.scrollToOffset({x: x-((this.props.data.length-2) * this.state.width), animated: false});
          }
        } }

        ref={ref => (this.flatList = ref)}    
      />
   </View>
  );
 }
}
export default Paginator;