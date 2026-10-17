
import { CommonActions, useNavigation } from "@react-navigation/native";

export default function useProfileViewModel() {
  const navigation = useNavigation();

  function logout() {
    navigation.getParent()?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }],
      })
    );
  }

  return {
    logout,
  };
}
