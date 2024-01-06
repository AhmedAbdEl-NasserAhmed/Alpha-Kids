import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateInsertActiveChildWorkshops as updateInsertActiveChildWorkshopsApi } from "services/apiWorkshops";

export function useUpdateInsertActiveWorkshops() {
  const queryClient = useQueryClient();

  const { mutate: updateInsertActiveChildWorkshops, isPending } = useMutation({
    mutationFn: updateInsertActiveChildWorkshopsApi,
    mutationKey: ["activeChildWorkshops"],
    onSuccess: () => {
      toast.success("workshop updated");
      queryClient.invalidateQueries({
        queryKey: ["activeChildWorkshops"],
      });
    },
  });

  return { updateInsertActiveChildWorkshops, isPending };
}
