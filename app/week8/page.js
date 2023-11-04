import { useUserAuth } from "./_utils/auth-context";
 
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
await gitHubSignIn();
 
await firebaseSignOut();

export default function Page() {
  return (
    <main>
      <p>
        Welcome, {user.displayName} ({user.email})
      </p>;
    </main>
  )
}
