import { useQuery } from "@tanstack/react-query";
import { getChildren } from "services/apiChildren";
import { useUser } from "./useUser";

export function useGetChildren(config) {
  const { user } = useUser();

  const response = useQuery({
    queryKey: ["children"],
    queryFn: () => getChildren(user.id),
    enabled: config?.enabled || false,
    ...config,
  });

  return response;
}
