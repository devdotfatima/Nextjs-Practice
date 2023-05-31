"use client";
import { useState, useCallback } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import GoogleSignInButton from "../components/GoogleSignInButton";
import GitSignInButton from "../components/GitSignInButton";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState<FormDataEntryValue | string>("");
  const [password, setPassword] = useState<FormDataEntryValue | string>("");

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = { email: email, password: password };
      const callbackUrl: any = searchParams.get("callbackUrl");
      signIn("credentials", {
        ...data,
        redirect: false,
        //   callbackUrl: callbackUrl,
      })
        .then((callback) => {
          if (callback?.error) {
            alert(callback.error);
          }

          if (callback?.url) {
            router.refresh();
            router.push(callbackUrl);
          }
        })
        .catch((error) => {
          alert(error);
        });
    },
    [email, password, searchParams, signIn, router]
  );

  return (
    <div className="flex min-h-full bg-slate-50 dark:bg-slate-700 dark:text-white flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="bg-indigo-50 dark:bg-slate-600/100	 rounded sm:w-1/2 w-full mx-auto   p-5 pb-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action=""
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 dark:text-indigo-500 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          <h3 className="mt-5 text-lg text-center  font-bold text-gray-500 dark:text-gray-100">
            OR
          </h3>
          <GoogleSignInButton />
          <GitSignInButton />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
