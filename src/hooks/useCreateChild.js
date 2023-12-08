import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createChild as createChildApi } from "services/apiChildren";

export function useCreateChild() {
  const queryCLient = useQueryClient();

  const { mutate: createChild, isPending } = useMutation({
    mutationFn: createChildApi,

    onSuccess: () => {
      queryCLient.invalidateQueries({
        queryKey: ["children"],
      });
    },
  });

  return { createChild, isPending };
}
