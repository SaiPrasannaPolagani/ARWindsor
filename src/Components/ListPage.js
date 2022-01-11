import React, { useState} from "react";
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Image, SafeAreaView, TextInput} from "react-native";
import Separator from "./Separator";

export default function ListPage({ route, navigation }) {
  const { restData, foodData, tourismData } = route.params;
  const [resData, setResData] = useState(restData);
  const [fooData, setfooData] = useState(foodData);
  const [tourData, setTourData] = useState(tourismData);
  const [filData, setfilData] = useState(resData);
  const [search, setsearch] = useState("");

  const dataFilter = resData;
  console.log(dataFilter);
  // const cuisineData = dataFilter.map((item) => {
  //   return item.cuisine;
  // });
  // console.log(cuisineData);

  const searchFilter = (text) => {
    if (text) {
      const newData = dataFilter.filter((item) => {
        const itemData = item.cuisine
          ? item.cuisine.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilData(newData);
      setsearch(text);
    } else {
      setfilData(resData);
      setsearch(text);
    }
  };

  return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          {!tourData &&
        <TextInput
          style={styles.textInputStyle}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          onChangeText={(text) => searchFilter(text)}
        />
          }
          <FlatList
            data={tourismData ? tourData : filData  }
            keyExtractor={item => tourData? item.tname : item.name}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={
                () => {
                  !tourismData ? 
                  navigation.navigate('menu', 
                    { 
                      title: item.name, 
                      restParam: resData,
                      foodParam: fooData, 
                      restParamId: item.uid 
                    })
                    :
                    navigation.navigate('TourismDestination', 
                    { 
                      title: item.tname,
                      desc: item.tdesc, 
                      img: item.timg, 
                      model: item.tmodel, 
                      url: item.turl 
                    })
                  }
                  }
            >
            <View style={styles.row}>
              <View style={styles.imageHeader}>
                <Image 
                  source={{ uri: tourismData ? item.timg : item.imgUrl }} 
                  style={styles.ImageIconStyle} 
                />
              </View>
                   
              <View style={styles.contentInfo}>
                <Text style={styles.nameText}>{tourismData ? item.tname : item.name}</Text>
                     
                <Text style={styles.contentText}>{tourismData ? item.taddr : item.loc}</Text>
                { !tourismData &&
                  <Text style={styles.contentText}>{`Cuisine: ${item.cuisine}`}</Text>
                }
              </View>
            </View>
             <Separator />
          </TouchableOpacity>
        )}
      />
      </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500'
  },
  row: {
    paddingRight: 4,
    paddingLeft: 4,
    paddingVertical: 4,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  nameText: {
    fontWeight: '800',
    fontSize: 20,
    color: '#000',
    flexWrap: 'wrap',
    flexShrink: 1,
    marginBottom: 4,
  },
  contentText: {
    color: '#949494',
    fontSize: 16,
    marginTop: 2,
    marginBottom: 4,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  SeparatorLine :{
    width: '100%',
},
  
ImageIconStyle: {
  padding: 20,
  margin: 0,
  height: 120,
  width: 120,
  resizeMode: "stretch",
  alignContent: "flex-start",
  marginLeft: 10,
},
contentInfo: {
  alignContent: "flex-end",
  marginLeft: 20,
  flex : 1,
},
textInputStyle: {
  height: 40,
  borderWidth: 1,
  paddingLeft: 20,
  margin: 5,
  borderColor: "#009688",
  backgroundColor: "#FFFFFF",
}
});


