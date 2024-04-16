import { SignInButton, SignOutButton, SignedIn, SignedOut, clerkClient } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <SignedOut>
          <SignInButton
          mode='modal'
          afterSignInUrl='/'
          afterSignUpUrl='/'>
            <button>abc</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton/>
        </SignedIn>
      </div>
    </main>
  );
}