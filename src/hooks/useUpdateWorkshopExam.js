import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updataWorkshopExam as updataWorkshopExamAPi } from "services/apiWorkshops";

export function useUpdateWokrshopExam() {
  const queryClient = useQueryClient();

  const { mutate: updateWorkshopExam, isPending } = useMutation({
    mutationFn: updataWorkshopExamAPi,
    mutationKey: ["workshops"],
    onSuccess: () => {
      toast.success("Exam Updated");
      queryClient.invalidateQueries(["workshops"]);
    },
  });

  return { updateWorkshopExam, isPending };
}
