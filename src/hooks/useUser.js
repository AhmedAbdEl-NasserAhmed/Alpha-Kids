import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "services/authApi";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
  });

  return {
    user,
    isLoading,
    isAuthenticated: user?.role === "authenticated",
  };
}
