import { SubmitHandler, useForm } from "react-hook-form";
import userAPI from "../_services/user/api";

function useLogin() {
  const { register, handleSubmit } = useForm<LoginInputValues>();
  const onSubmit: SubmitHandler<LoginInputValues> = async (
    LoginInputValues: LoginInputValues
  ) => {
    await userAPI.loginAPI(LoginInputValues);
  };

  return { register, handleSubmit, onSubmit };
}

export default useLogin;
