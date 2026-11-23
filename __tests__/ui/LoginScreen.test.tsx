
import { fireEvent, render } from "@testing-library/react-native";

import LoginScreen from "../../src/screens/LoginScreen";
import useLoginViewModel from "../../src/viewmodels/useLoginViewModel";

jest.mock("../../src/viewmodels/useLoginViewModel");

const mockNavigate = jest.fn();
const mockReplace = jest.fn();

const mockViewModel = {
  email: "",
  setEmail: jest.fn(),
  password: "",
  setPassword: jest.fn(),
  showPassword: false,
  setShowPassword: jest.fn(),
  error: "",
  handleLogin: jest.fn(),
};

const mockNavigation = {
  navigate: mockNavigate,
  replace: mockReplace,
  goBack: jest.fn(),
  setOptions: jest.fn(),
  dispatch: jest.fn(),
  isFocused: jest.fn(() => true),
  canGoBack: jest.fn(() => true),
  getId: jest.fn(),
  getParent: jest.fn(),
  getState: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
} as any;

const mockRoute = {
  key: "Login-test",
  name: "Login",
  params: undefined,
} as any;

describe("LoginScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useLoginViewModel as jest.Mock).mockReturnValue({
      ...mockViewModel,
    });
  });

  it("deve renderizar o título CineList", async () => {
    const { getByText } = await render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />
    );

    expect(getByText("CineList")).toBeTruthy();
  });

  it("deve renderizar a descrição da tela", async () => {
    const { getByText } = await render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />
    );

    expect(
      getByText(/Seus filmes favoritos em um só lugar/)
    ).toBeTruthy();
  });

  it("deve renderizar os campos de e-mail e senha", async () => {
    const { getByPlaceholderText } = await render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />
    );

    expect(
      getByPlaceholderText("Digite seu e-mail")
    ).toBeTruthy();

    expect(
      getByPlaceholderText("Digite sua senha")
    ).toBeTruthy();
  });

  it("deve atualizar o e-mail ao digitar", async () => {
    const { getByPlaceholderText } = await render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />
    );

    fireEvent.changeText(
      getByPlaceholderText("Digite seu e-mail"),
      "teste@email.com"
    );

    expect(mockViewModel.setEmail).toHaveBeenCalledWith(
      "teste@email.com"
    );
  });

  it("deve atualizar a senha ao digitar", async () => {
    const { getByPlaceholderText } = await render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />
    );

    fireEvent.changeText(
      getByPlaceholderText("Digite sua senha"),
      "123456"
    );

    expect(mockViewModel.setPassword).toHaveBeenCalledWith("123456");
  });

  it("deve solicitar a exibição da senha ao pressionar Mostrar", async () => {
    const { getByText } = await render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />
    );

    fireEvent.press(getByText("Mostrar"));

    expect(mockViewModel.setShowPassword).toHaveBeenCalledWith(true);
  });

  it("deve exibir uma mensagem de erro quando houver falha", async () => {
    (useLoginViewModel as jest.Mock).mockReturnValue({
      ...mockViewModel,
      error: "E-mail ou senha inválidos.",
    });

    const { getByText } = await render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />
    );

    expect(
      getByText("E-mail ou senha inválidos.")
    ).toBeTruthy();
  });

  it("deve navegar para MainTabs quando o login for válido", async () => {
    mockViewModel.handleLogin.mockReturnValue(true);

    const { getByText } = await render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />
    );

    fireEvent.press(getByText("Entrar"));

    expect(mockViewModel.handleLogin).toHaveBeenCalled();
    expect(mockReplace).toHaveBeenCalledWith("MainTabs");
  });

  it("não deve navegar quando o login for inválido", async () => {
    mockViewModel.handleLogin.mockReturnValue(false);

    const { getByText } = await render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />
    );

    fireEvent.press(getByText("Entrar"));

    expect(mockViewModel.handleLogin).toHaveBeenCalled();
    expect(mockReplace).not.toHaveBeenCalled();
  });

  it("deve executar o login ao pressionar Enter no campo de senha", async () => {
    mockViewModel.handleLogin.mockReturnValue(false);

    const { getByPlaceholderText } = await render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />
    );

    fireEvent(
      getByPlaceholderText("Digite sua senha"),
      "submitEditing"
    );

    expect(mockViewModel.handleLogin).toHaveBeenCalled();
  });
});
