import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      console.log(user);
      toast.success("User credentials successfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateUser, isUpdating };
}
