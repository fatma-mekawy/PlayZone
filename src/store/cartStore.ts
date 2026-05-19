import { create } from "zustand"

interface CartItem {
  id: number
  name: string
  sport: string
  location: string
  image: string
  pricePerHour: number
  hours: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (item) => set((state) => {
    const exists = state.items.find((i) => i.id === item.id)
    if (exists) {
      return {
        items: state.items.map((i) =>
          i.id === item.id ? { ...i, hours: i.hours + item.hours } : i
        ),
      }
    }
    return { items: [...state.items, item] }
  }),

  removeItem: (id) => set((state) => ({
    items: state.items.filter((i) => i.id !== id),
  })),

  clearCart: () => set({ items: [] }),
}))

export interface FavCourt {
  id: number;
  name: string;
  sport: string;
  location: string;
  image: string;
  pricePerHour: number;
  rating: number;
}

interface FavStore {
  favs: FavCourt[];
  toggleFav: (court: FavCourt) => void;
  isFav: (id: number) => boolean;
}

export const useFavStore = create<FavStore>((set, get) => ({
  favs: [],
  toggleFav: (court) =>
    set((state) => {
      const exists = state.favs.find((f) => f.id === court.id);
      return exists
        ? { favs: state.favs.filter((f) => f.id !== court.id) }
        : { favs: [...state.favs, court] };
    }),
  isFav: (id) => get().favs.some((f) => f.id === id),
}));