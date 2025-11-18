import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingTop: 40,
  },

  // Search section
  searchGroup: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
  },
  searchControl: {
    marginTop: 4,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: "#34967C",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  // Filters row
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  filterContainer: {
    width: 80,
    marginRight: 12,
    alignItems: "center",
    gap: 4,
  },

  // Listings
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  paginationContainer: {
    paddingVertical: 16,
    alignItems: "center",
  },
  showMoreButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
  },
  showMoreButtonText: {
    fontSize: 14,
    color: "#333",
  },
});
