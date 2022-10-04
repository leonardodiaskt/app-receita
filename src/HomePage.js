import {
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

const numColumns = 2;

const imagens = [
  {
    name: "Vegetariano",
    img: require("../assets/vegetarian.jpg"),
  },
  {
    name: "Lanches",
    img: require("../assets/burger.jpg"),
  },
  {
    name: "Massas",
    img: require("../assets/massa.jpg"),
  },
  {
    name: "Sobremesas",
    img: require("../assets/sobremesa.jpg"),
  },
  {
    name: "Marinha",
    img: require("../assets/frutosdomar.jpg"),
  },
  {
    name: "Carnes",
    img: require("../assets/carne.jpg"),
  },
];

export default function HomePage({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <ScrollView style={{ marginTop: 50 }}>
          <Text
            style={{ textAlign: "center", fontSize: 28, fontWeight: "bold" }}
          >
            Tipos de Pratos
          </Text>

          <FlatList
            data={imagens}
            numColumns={numColumns}
            keyExtractor={(item) => item.name}
            // renderItem={({item}) => <Image style={styles.cardImg} source={item.img}/>}
            renderItem={({ item }) => (
              <View style={styles.cards}>
                <View style={styles.cardsImg}>
                  <Text style={styles.texNome}>{item.name}</Text>
                  <TouchableOpacity
                    style={{ alignItems: "center", justifyContent: "center" }}
                    onPress={() => navigation.navigate(item.name)}
                  >
                    <Image style={styles.imgCard} source={item.img} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            ListFooterComponent={<Text/>}
          />

        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  cards: {
    flexDirection: "row",
  },
  cardsImg: {
    width: 180,
    height: 180,
    marginTop: 40,

    paddingLeft: 10,
  },
  imgCard: {
    width: "100%",
    height: "100%",

    alignItems: "center",

    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
    cursor: 'pointer',
  },

  buttonAdd: {
    width: 60,
    height: 60,
    bottom: 30,
    left: 20,
    backgroundColor: "#EB5656",
    justifyContent: "center",
    position: "absolute",
    borderRadius: 50,
    alignItems: "center",
  },
  texNome:{
    fontSize: 20
  }

});
