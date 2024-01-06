import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updataWorkshopExamFinished as updataWorkshopExamFinishedApi } from "services/apiWorkshops";

export function useUpdateWorkshopExamFinished() {
  const queryClient = useQueryClient();

  const { mutate: updataWorkshopExamFinished, isPaending } = useMutation({
    mutationKey: ["activeChildWorkshops"],
    mutationFn: updataWorkshopExamFinishedApi,
    onSuccess: () => {
      toast.success(" you can have the exam again");
      queryClient.invalidateQueries(["activeChildWorkshops"]);
    },
  });

  return { updataWorkshopExamFinished, isPaending };
}
