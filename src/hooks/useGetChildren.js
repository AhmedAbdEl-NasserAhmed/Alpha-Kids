import { useQuery } from "@tanstack/react-query";
import { getChildren } from "services/apiChildren";
import { getCurrentUser } from "services/authApi";

export function useGetChildren() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const response = useQuery({
    queryKey: ["children", user],
    queryFn: () => getChildren(user.id),
  });

  return response;
}
