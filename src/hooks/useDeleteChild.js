import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteChild as deleteChildApi } from "services/apiChildren";
import { useGetChildren } from "./useGetChildren";

export function useDeleteChild() {
  const queryClient = useQueryClient();

  const { refetch } = useGetChildren();

  const { mutate: deleteChild, ispending: isDeleting } = useMutation({
    mutationFn: deleteChildApi,
    onSuccess: () => {
      toast.success("child deleted Successfuly");
      refetch();
      queryClient.invalidateQueries({
        queryKey: ["children"],
      });
    },
    onError(err) {
      toast.error(err.message);
    },
  });

  return { deleteChild, isDeleting };
}
