import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import SafeAreaView, { SafeAreaProvider } from "react-native-safe-area-view";
import { Searchbar } from "react-native-paper";

import { ResturantInfoCard } from "../components/resturantInfoCard.component";

export const ResturantsScreen = (): React.ReactElement => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.list}>
          <ResturantInfoCard />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 10,
  },
  list: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
  },
});
