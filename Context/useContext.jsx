import { Children, createContext, useEffect, useRef, useState } from "react";
import { useGetDogs } from "../src/Components/useFecthData";
import { updateDogsLikes } from "../src/services/getTeam";

const ContentContext = createContext();

function ContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDogForm, setShowDogForm] = useState(null);
  // const [dogs, setDogs] = useState(initailDog);

  const { setDogs, dogs } = useGetDogs();

  const observerRef = useRef(null);

  const toggleLike = async (dogId) => {
    try {
      setIsLoading(true);
      const updatedDogs = dogs.map((dog) =>
        dog.id === dogId ? { ...dog, likes: !dog.likes } : dog,
      );

      setDogs(updatedDogs);

      const updatedDog = updatedDogs.find((d) => d.id === dogId);
      if (!updatedDog) throw new Error("Dog not found");

      await updateDogsLikes(dogId, { likes: updatedDog.likes });
    } catch (error) {
      console.error("Failed to update like", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const obsOptions = {
      root: null,
      threshold: 0,
      // rootMargin: "-200px 0px 0px 0px",
    };

    const obsCallBack = ([entry]) => {
      setSticky(!entry.isIntersecting);
    };

    const currentRef = observerRef.current;
    const observer = new IntersectionObserver(obsCallBack, obsOptions);
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = observerRef.current;
      if (!current) return;

      const observer = new IntersectionObserver(([entry]) => {
        setSticky(!entry.isIntersecting);
      });

      observer.observe(current);

      return () => observer.disconnect();
    }, 50); // Delay helps with remount timing

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1200) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(sticky, "sticky");
  console.log(showDogForm, "form");

  return (
    <ContentContext.Provider
      value={{
        sticky,
        setSticky,
        menuOpen,
        setMenuOpen,
        observerRef,
        toggleLike,
        dogs,
        showDogForm,
        setShowDogForm,
        isLoading,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export { ContextProvider, ContentContext };
