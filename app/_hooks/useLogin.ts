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
    const accessToken = localStorage.getItem("access-token");
    const response = await userAPI.loginAPI(LoginInputValues, accessToken);

    if (response.response.ok) {
      const { access, refresh } = response.data;
      setLoggedIn(true);
      localStorage.setItem("access-token", access);
      localStorage.setItem("refresh-token", refresh);
      router.push(routes.HOME);
    } else {
      alert(response.data.non_field_errors[0]);
    }
  };

  return { register, handleSubmit, onSubmit };
}

export default useLogin;
