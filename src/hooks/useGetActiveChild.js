import { getActiveChild } from "services/apiChildren";
import { useUser } from "./useUser";
import { useQuery } from "@tanstack/react-query";

export function useGetActiveChild() {
  const { user } = useUser();

  const data = useQuery({
    queryKey: ["profiles"],
    queryFn: () => getActiveChild(user.id),
  });

  return data;
}
