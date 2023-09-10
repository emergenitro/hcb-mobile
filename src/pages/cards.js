import { FlatList, View } from "react-native";
import PaymentCard from "../components/paymentCard";
import useSWR from "swr";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function CardsPage() {
  const { data: cards } = useSWR("/user/cards");
  const tabBarHeight = useBottomTabBarHeight();

  if (cards) {
    return (
      <FlatList
        data={cards}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        scrollIndicatorInsets={{ bottom: tabBarHeight }}
        renderItem={({ item }) => (
          <PaymentCard
            card={item}
            style={{ marginHorizontal: 20, marginVertical: 8 }}
          />
        )}
      />
    );
  }
}
