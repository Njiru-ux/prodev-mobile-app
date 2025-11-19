import { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { PropertyListingType } from "@/constants/data";
import { Feather } from "@expo/vector-icons";

type Props = {
  listing: PropertyListingType;
};

const PropertyListingCard: FC<Props> = ({ listing }) => {
  return (
    <View style={styles.card}>
      <Image source={listing.image} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.locationText}>{listing.location}</Text>
          <View style={styles.ratingRow}>
            <Feather name="star" size={14} color="#FFB800" />
            <Text style={styles.ratingText}>{listing.rating.toFixed(1)}</Text>
          </View>
        </View>

        <Text style={styles.titleText} numberOfLines={2}>
          {listing.title}
        </Text>

        <Text style={styles.metaText}>
          {listing.beds} beds · {listing.baths} baths
        </Text>

        <Text style={styles.priceText}>
          ${listing.pricePerNight}{" "}
          <Text style={styles.priceSubText}>night</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 4,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationText: {
    fontSize: 13,
    color: "#666",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 13,
    color: "#333",
  },
  titleText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },
  metaText: {
    fontSize: 13,
    color: "#777",
  },
  priceText: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },
  priceSubText: {
    fontSize: 13,
    color: "#555",
    fontWeight: "400",
  },
});

export default PropertyListingCard;
