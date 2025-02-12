import { useUserStore } from "./useStore";

export const ZustandUserDetails = () => {
  //   const { user, logIn, logOut, updateDemoString } = useUserStore();
  const user = useUserStore((state) => state.user);
  const logIn = useUserStore((state) => state.logIn);
  const logOut = useUserStore((state) => state.logOut);
  const updateDemoString = useUserStore((state) => state.updateDemoString);

  const handleLogin = async (userId: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await response.json();
    logIn(user);
  };
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <br />

      <button onClick={() => handleLogin("1")}>Log In</button>
      <button onClick={logOut}>Log Out</button>
      <br />

      <button onClick={() => updateDemoString("Hello world" + Math.random())}>
        Update Demo String
      </button>
    </div>
  );
};
