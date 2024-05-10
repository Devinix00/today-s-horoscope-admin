import { SubmitHandler, useForm } from "react-hook-form";
import userAPI from "../_services/user/api";
import LOGIN_RES from "../(login)/constants";
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

    switch (response.data.message) {
      case LOGIN_RES.SUCCESS:
        setLoggedIn(true);
        router.push(routes.HOME);
        return;

      case LOGIN_RES.WRONG_PASSWORD:
        alert(LOGIN_RES.WRONG_PASSWORD);
        return;

      case LOGIN_RES.INVALID_ADMIN:
        alert(LOGIN_RES.INVALID_ADMIN);
        return;

      default:
        break;
    }
  };

  return { register, handleSubmit, onSubmit };
}

export default useLogin;
