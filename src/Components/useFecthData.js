import { useEffect, useState } from "react";
import {
  getBlogPosts,
  getDogs,
  getPost,
  getTeamMembers,
} from "../services/getTeam";

export function useFecthTeam() {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchTeam() {
      try {
        setIsLoading(true);
        const data = await getTeamMembers();

        console.log(data, "team");
        setTeam(data);
      } catch (err) {
        setError(err.message || "something went wrong");
        console.log(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTeam();
  }, []);

  return { team, isLoading, error };
}

export function useGetDogs() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    async function fecthDogs() {
      try {
        setIsLoading(true);
        const data = await getDogs();
        setDogs(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fecthDogs();
  }, []);

  return { setDogs, dogs, isLoading, error };
}

export function useGetblogPost() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fecthPosts() {
      try {
        setIsLoading(true);
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message || "something went wrong");
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fecthPosts();
  }, []);

  return { posts, isLoading, error };
}

export function useGetPost(id) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function fecthPosts() {
      try {
        setIsLoading(true);
        const data = await getPost(id);
        setPost(data);
      } catch (error) {
        setError(error.message || "something went wrong");
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fecthPosts();
  }, [id]);

  return { post, isLoading, error };
}
