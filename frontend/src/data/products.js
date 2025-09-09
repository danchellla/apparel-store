// Product data is now stored in localStorage and initialized from this file if not present
const defaultProducts = [
  // Collection
  {
    id: 1,
    name: "Luxury Silk Shirt",
    price: 120,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    category: "collection",
    description: "A premium silk shirt for a luxurious feel.",
    details: ["100% silk", "Hand-stitched", "Slim fit", "Available in multiple colors"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Designer Denim Jacket",
    price: 250,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    category: "collection",
    description: "Classic denim jacket with a modern twist.",
    details: ["Premium denim", "Unisex", "Machine washable"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Premium Leather Boots",
    price: 300,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "collection",
    description: "Handcrafted boots for all occasions.",
    details: ["Genuine leather", "Water resistant", "Durable sole"],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: 4,
    name: "Elegant Evening Dress",
    price: 400,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    category: "collection",
    description: "Make a statement at any event.",
    details: ["Silk blend", "Floor length", "Available in red and black"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 5,
    name: "Urban Explorer Backpack",
    price: 90,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    category: "collection",
    description: "Versatile backpack for city and travel.",
    details: ["Waterproof", "Laptop sleeve", "Multiple pockets"],
    sizes: []
  },
  {
    id: 6,
    name: "Minimalist Watch",
    price: 180,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "collection",
    description: "Sleek and modern timepiece.",
    details: ["Stainless steel", "Water resistant", "2-year warranty"],
    sizes: []
  },
  // Sale
  {
    id: 101,
    name: "Luxury Silk Shirt (Sale)",
    price: 90,
    oldPrice: 120,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    category: "sale",
    description: "A premium silk shirt for a luxurious feel, now on sale!",
    details: ["100% silk", "Hand-stitched", "Slim fit", "Available in multiple colors"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 102,
    name: "Designer Denim Jacket (Sale)",
    price: 180,
    oldPrice: 250,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    category: "sale",
    description: "Classic denim jacket with a modern twist, discounted!",
    details: ["Premium denim", "Unisex", "Machine washable"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 103,
    name: "Premium Leather Boots (Sale)",
    price: 220,
    oldPrice: 300,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "sale",
    description: "Handcrafted boots for all occasions, special price!",
    details: ["Genuine leather", "Water resistant", "Durable sole"],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: 104,
    name: "Classic Fedora Hat (Sale)",
    price: 45,
    oldPrice: 70,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    category: "sale",
    description: "Timeless fedora for any outfit.",
    details: ["Wool blend", "Adjustable size", "Available in black and brown"],
    sizes: ["M", "L"]
  },
  // New Arrivals
  {
    id: 201,
    name: "Modern Trench Coat",
    price: 350,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    category: "new",
    description: "Modern trench coat for all seasons.",
    details: ["Water resistant", "Belted waist", "Available in beige and navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 202,
    name: "Minimalist Sneakers",
    price: 180,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "new",
    description: "Minimalist sneakers for everyday comfort.",
    details: ["Breathable mesh", "Memory foam insole", "Unisex"],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: 203,
    name: "Classic Wool Scarf",
    price: 60,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    category: "new",
    description: "Classic wool scarf for warmth and style.",
    details: ["100% wool", "Soft touch", "Available in 3 colors"],
    sizes: []
  },
  {
    id: 204,
    name: "Aviator Sunglasses",
    price: 110,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "new",
    description: "Iconic aviator sunglasses with UV protection.",
    details: ["UV400 lenses", "Metal frame", "Unisex"],
    sizes: []
  },
  {
    id: 205,
    name: "Eco Tote Bag",
    price: 35,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    category: "new",
    description: "Reusable tote bag made from recycled materials.",
    details: ["Machine washable", "Large capacity", "Eco-friendly"],
    sizes: []
  },
];

export default defaultProducts;
