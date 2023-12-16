import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { setActiveChild as setActiveChildApi } from "services/apiChildren";

export function useSetActiveChild() {
  const queryClient = useQueryClient();

  const { mutate: activeChild, isPending } = useMutation({
    mutationFn: setActiveChildApi,
    onSuccess: () => {
      toast.success("child Selected Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["profiles"],
      });
    },
    onError(err) {
      toast.error(err.message);
    },
  });

  return { activeChild, isPending };
}
