import { getActiveChild } from "services/apiChildren";
import { useQuery } from "@tanstack/react-query";
import { getCurrentProfile } from "services/apiProfiles";
import { getCurrentUser } from "services/authApi";

export function useGetActiveChild() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const { data: currentProfile } = useQuery({
    queryKey: ["profiles", user],
    queryFn: () => getCurrentProfile(user.id),
  });

  const { data, isLoading } = useQuery({
    queryKey: ["activeChild", currentProfile],
    queryFn: () =>
      currentProfile[0].usertype !== "Teacher"
        ? getActiveChild(currentProfile[0]?.activeChild)
        : () => {},
  });

  return { data, isLoading };
}
