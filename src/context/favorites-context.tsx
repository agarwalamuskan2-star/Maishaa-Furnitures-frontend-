"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface FavoriteItem {
  id: number;
  title: string;
  price: string;
  mainImage: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: Omit<FavoriteItem, "id" | "title" | "price" | "mainImage"> & { id: number; title: string; price: string; mainImage: string }) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
  favoritesCount: number;
  toggleFavorite: (item: Omit<FavoriteItem, "id" | "title" | "price" | "mainImage"> & { id: number; title: string; price: string; mainImage: string }) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("maishaa-favorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (e) {
        console.error("Failed to parse favorites from localStorage");
      }
    }
    setIsLoaded(true);
  }, []);

  // Save favorites to localStorage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("maishaa-favorites", JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const addToFavorites = (item: Omit<FavoriteItem, "quantity">) => {
    setFavorites((prev) => {
      if (prev.some((i) => i.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((i) => i.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((i) => i.id === id);
  };

  const toggleFavorite = (item: Omit<FavoriteItem, "quantity">) => {
    if (isFavorite(item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  const favoritesCount = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        favoritesCount,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
