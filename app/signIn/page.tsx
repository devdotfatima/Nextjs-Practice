"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import GoogleSignInButton from "../components/GoogleSignInButton";
import GitSignInButton from "../components/GitSignInButton";

const SignInPage = () => {
  const searchParams = useSearchParams();
  const [name, setName] = useState<FormDataEntryValue | string>("");
  const [email, setEmail] = useState<FormDataEntryValue | string>("");
  const [password, setPassword] = useState<FormDataEntryValue | string>("");
  const router = useRouter();

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const callbackUrl: any = searchParams.get("callbackUrl");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    const data = { email: email, password: password, name: name };
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/register";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      alert("This email already exists");
      return;
    }
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();

    signIn("credentials", {
      ...data,
      redirect: false,
      //   callbackUrl: callbackUrl,
    }).then((callback) => {
      if (callback?.error) {
        alert(callback.error);
      }

      if (callback?.url) {
        router.refresh();
        router.push(callbackUrl);
      }
    });
  };

  return (
    <div className="flex min-h-full bg-slate-50 dark:bg-slate-700 dark:text-white flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="bg-indigo-50 dark:bg-slate-600/100	 rounded sm:w-1/2 w-full mx-auto   p-5 pb-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  onChange={(e) => {
                    setName(e.currentTarget.value);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                Sign up
              </button>
            </div>
          </form>
          <h3 className="mt-5 text-lg text-center  font-bold text-gray-500 dark:text-gray-100">
            OR
          </h3>
          <GoogleSignInButton />
          <GitSignInButton />
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 dark:text-indigo-500 hover:text-indigo-500"
            >
              Alredy have an account?{" "}
              <span className="font-bold text-indigo-800 dark:text-white ">
                <Link href={"/login?callbackUrl=" + callbackUrl}> Login.</Link>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
