import { SubmitHandler, useForm } from "react-hook-form";
import userAPI from "../_services/user/api";
import routes from "../_constants/routes";
import { useRouter } from "next/navigation";
import useLoggedInStore from "../_stores/useLoggedInStore";

function useLogin() {
  const router = useRouter();
  const { setLoggedIn } = useLoggedInStore();
  const { register, handleSubmit } = useForm<LoginInputValues>();
  const onSubmit: SubmitHandler<LoginInputValues> = async (
    LoginInputValues: LoginInputValues
  ) => {
    const response = await userAPI.loginAPI(LoginInputValues);
    console.log(response.data);
    if (response.response.ok) {
      setLoggedIn(true);
      router.push(routes.HOME);
    } else {
      alert(response.data.non_field_errors[0]);
    }
  };

  return { register, handleSubmit, onSubmit };
}

export default useLogin;
