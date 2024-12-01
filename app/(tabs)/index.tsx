import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import JobsScreen from "@/components/JobsScreen";

export default function Home() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <JobsScreen />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 25,
    paddingVertical: 50,
  },
});
