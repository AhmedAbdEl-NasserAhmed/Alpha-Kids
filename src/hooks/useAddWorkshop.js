import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addWorkshop as addWorkshopApi } from "services/apiWorkshops";

export function useAddWorkshop() {
  const queryClient = useQueryClient();

  const { mutate: addWorkshop, isPending } = useMutation({
    mutationFn: addWorkshopApi,
    mutationKey: ["workshops"],
    onSuccess: () => {
      toast.success("Workshop added");

      queryClient.invalidateQueries("workshops");
    },
  });

  return { addWorkshop, isPending };
}
