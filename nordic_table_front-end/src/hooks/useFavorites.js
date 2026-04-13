import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET - fetch favorite stay IDs on mount
  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/myList", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setFavoriteIds(data.favorites || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  // POST / DELETE - toggle favorite stay ID
  const toggleFavorite = async (id) => {
    const stringId = String(id);
    const isCurrentlyFavorite = favoriteIds.includes(stringId);

    setLoading(true);
    try {
      if (isCurrentlyFavorite) {
        await fetch(`/api/myList/${stringId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setFavoriteIds((prev) => prev.filter((fid) => fid !== stringId));
      } else {
          
        await fetch("/api/myList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ stayId: stringId }),
        });
        setFavoriteIds((prev) => [...prev, stringId]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { favoriteIds, toggleFavorite, loading, error };
};

//! how to use in component:

// return (
//   <>
//     <FavoritesHero />
//     <ListSummary count={favoriteIds.length} />
//     {loading && <p>Loading...</p>}
//     {error && <p>Error: {error}</p>}
//     <FavoritesPages favoriteIds={favoriteIds} toggleFavorite={toggleFavorite} />
//   </>
// );
