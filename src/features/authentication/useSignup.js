import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        `Account ${user.user.email} successfully created! Please log in.`,
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
