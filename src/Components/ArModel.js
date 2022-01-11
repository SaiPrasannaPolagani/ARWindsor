
import React, { Component, useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import { Card } from "react-native-elements/dist/card/Card";
import Expo from "expo";
//import * as THREE from "three";
import { THREE } from "expo-three";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
//import GLTFLoader from "three-gltf-loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Asset } from "expo-asset";
import { WebView } from 'react-native-webview';


export default function ArModel({route, navigation}) {
const { clicked, arModel } = route.params;
const [foodItem, setFoodItem] = useState(clicked);
const [model, setModel] = useState(arModel);


return (
        <View style={styles.container}>
          <WebView source={{ html: model}} />
        </View>
       );
}      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    backgroundColor: "#F5FCFF",
  }
});


//  if(foodItem == 'Croissant')
//  {
//    console.log("model", arModel);
//    return (
//   <View style={styles.container}>
//   <WebView source={{ html: model}} />
// </View>
//    );

// //  return (
//       // <GLView style={{ flex: 1 }} onContextCreate={onContextCreateLemonade} />
//       // navigation.navigate('testAr', { name: 'Jane' })
//     // );
//  }

//  if(foodItem == 'Noodles')
//  {
//  return (
//       <GLView style={{ flex: 1 }} onContextCreate={onContextCreateNoodles} />
//     );
//  }

//  if(foodItem == 'Hamburger')
//  {
//  return (
//       <GLView style={{ flex: 1 }} onContextCreate={onContextCreateHamburger} />
//     );
//  }

//  else
//  {
//    return(
//      <View>
//        <Text> No AR Model present</Text>
//      </View>
//    )
//  }
//  }

 

// const onContextCreateLemonade = async (gl) => {
//   var model;
//     // 1. Scene

//     // const asset = Asset.fromModule(require("./Models/Food.glb"));
//     const asset = Asset.fromURI("https://arwindsor.blob.core.windows.net/3dmodel/donut.glb");
//     await asset.downloadAsync();
    

//     console.log("test", asset);

//     var scene = new THREE.Scene();
//     // 2. Camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       gl.drawingBufferWidth / gl.drawingBufferHeight,
//       0.1,
//       1000
//     );
//     // 3. Renderer
//     const renderer = new Renderer({ gl });

//     renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

//     var light = new THREE.DirectionalLight(0xffffff, 1.0);
//     light.position.set(0, 1, 3);
//     scene.add(light);

//     const loader = new GLTFLoader();
//     loader.load(
//       asset.localUri,
//       function (gltf) {
//         model = gltf.scene;
//         scene.add(model);
//       },
//       function (xhr) {},
//       function (error) {}
//     );
    
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     //scene.add(cube);

//     camera.position.z = 2;
//     camera.position.y = 0;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (model) {
//        model.rotation.y += 0.004;
//       }
//       renderer.render(scene, camera);
//       gl.endFrameEXP();
//     };
//     animate();
//   };

//   const onContextCreateNoodles = async (gl) => {
//   var model;
//     // 1. Scene

//     // const asset = Asset.fromModule(require("./Models/Noodles.glb"));
//     await asset.downloadAsync();

//     var scene = new THREE.Scene();
//     // 2. Camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       gl.drawingBufferWidth / gl.drawingBufferHeight,
//       0.1,
//       1000
//     );
//     // 3. Renderer
//     const renderer = new Renderer({ gl });

//     renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

//     var light = new THREE.DirectionalLight(0xffffff, 1.0);
//     light.position.set(0, 1, 3);
//     scene.add(light);

//     const loader = new GLTFLoader();
//     loader.load(
//       asset.localUri,
//       function (gltf) {
//         model = gltf.scene;
//         scene.add(model);
//       },
//       function (xhr) {},
//       function (error) {}
//     );
    
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     //scene.add(cube);

//     camera.position.z = 2;
//     camera.position.y = 0;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (model) {
//        model.rotation.y += 0.004;
//       }
//       renderer.render(scene, camera);
//       gl.endFrameEXP();
//     };
//     animate();
//   };


//   const onContextCreateHamburger = async (gl) => {
//   var model;
//     // 1. Scene

//     // const asset = Asset.fromModule(require("./Models/burger.glb"));
//     await asset.downloadAsync();

//     var scene = new THREE.Scene();
//     // 2. Camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       gl.drawingBufferWidth / gl.drawingBufferHeight,
//       0.1,
//       1000
//     );
//     // 3. Renderer
//     const renderer = new Renderer({ gl });

//     renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

//     var light = new THREE.DirectionalLight(0xffffff, 1.0);
//     light.position.set(0, 1, 3);
//     scene.add(light);

//     const loader = new GLTFLoader();
//     loader.load(
//       asset.localUri,
//       function (gltf) {
//         model = gltf.scene;
//         scene.add(model);
//       },
//       function (xhr) {},
//       function (error) {}
//     );
    
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     //scene.add(cube);

//     camera.position.z = 2;
//     camera.position.y = 0;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (model) {
//        model.rotation.y += 0.004;
//       }
//       renderer.render(scene, camera);
//       gl.endFrameEXP();
//     };
//     animate();
//   };


