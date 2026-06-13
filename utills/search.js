export function searchProducts(query = "", list = []) {
  try {
    const regex = RegExp(query, "i");
    return list.filter((product) => regex.test(product.name));
  } catch (error) {
    console.error("Invalid Regular Expression:", error.message);
    return [];
  }
}
