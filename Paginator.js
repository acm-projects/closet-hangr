import React from "react";
import { FlatList, View, Platform, Dimensions } from "react-native";
import * as backEndFunctions from './back_end_functions'
import uuid from 'uuid/v4'

class Paginator extends React.PureComponent {
constructor(props) {  
  super(props);
  this.flatList = null
}

componentDidMount() {
  this.setState({
    width: null, height: null
  })
}

getWrappableData = (data) => {
  let wrappableData = data
  if(data.length > 0 && data[0] != undefined) {
    //Add the last item in the list to the beginning of the list
    if(data[0].id != 'n' && data[1].id != 'n')
    {
      let bufferItem = {id: 'n', uri: data[data.length-1].uri}
      wrappableData.unshift(bufferItem)
    }
    //Add the 2nd to last item in the list to the beginning of the list
    if (data[1].id != 'n-1' && data[0].id != 'n-1' )
    {
      let bufferItem = {id: 'n-1', uri: 'https://fbs8083.files.wordpress.com/2019/01/blank-white-square-thumbnail.jpg'}
      wrappableData.unshift(bufferItem)
    }
    //Add the 3rd item in the list (original 1st item) to the end of the list
    if (data[data.length-1].id != '0' && data[data.length-2].id != '0')
    {
      let bufferItem = {id: '0', uri: data[2].uri}
      wrappableData.push(bufferItem)
    }
    //Add 4th item in the list (original 2nd item) to teh end of the list
    if (data[data.length-1].id != '1' && data[data.length-2].id != '1')
    {
      let bufferItem = {id: '1', uri: 'https://fbs8083.files.wordpress.com/2019/01/blank-white-square-thumbnail.jpg'}
      wrappableData.push(bufferItem)
    }
    return wrappableData
  }

  return data
}

  scrollAnimation = async event => {
    await backEndFunctions.sleep(3000)
    this.flatList.scrollToOffset({animated: true, offset: 2*this.state.width })
  }



render() {
  return (
    <View>
      <FlatList
        {...this.props}
        ref={ref => (this.flatList = ref)}  
        data={this.getWrappableData(this.props.data)}
        getItemLayout={(data, index) => (
          { length: Dimensions.get('window').width, offset: Dimensions.get('window').width * index, index }
        )}
        initialScrollIndex = {this.props.data.length-1}
        renderItem={this.props.renderItem}
        horizontal = {true}
        pagingEnabled = {true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={this.props.contentContainerStyle} 
        keyExtractor={this.props.keyExtractor}
        initialNumToRender={1}
        
        onLayout={ ({nativeEvent}) => {
          const {width, height} = nativeEvent.layout;
          this.setState({
            width, height,
          })
          this.scrollAnimation()
          }
        }

        onScroll={ ({ nativeEvent }) => {
          const { x } = nativeEvent.contentOffset;
          if(x > ((this.props.data.length-2) * this.state.width) && x < (this.props.data.length * this.state.width)) {
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