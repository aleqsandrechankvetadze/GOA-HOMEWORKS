import React from "react";

export default function App() {
  return (
    <div>
      <button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
      <br />
      <br />
      <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
        Save changes
      </button>
      <br />
      <br />
      <form>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Username</span>
          <input
            type="text"
            value="tbone"
            disabled
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
      </form>
      <br />
      <br />
      <a
        href="#"
        class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div class="flex items-center space-x-3">
          <svg
            class="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          ></svg>
          <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">
            New project
          </h3>
        </div>
        <p class="text-slate-500 group-hover:text-white text-sm">
          Create a new project from a variety of starting templates.
        </p>
      </a>
      <br />
      <br />
      <ul role="list">
        <li class="group/item hover:bg-slate-100 ...">
          <div>
            <p>person</p>
          </div>
          <a
            class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..."
            href="tel:"
          >
            <span class="group-hover/edit:text-gray-700 ...">Call</span>
            <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ..."></svg>
          </a>
        </li>
      </ul>
      <br />
      <br />
      <form>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Email</span>
          <input type="email" class="peer ..." />
          <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
      </form>
      <br />
      <br />
      <fieldset>
        <legend>Published status</legend>

        <input
          id="draft"
          class="peer/draft"
          type="radio"
          name="status"
          checked
        />
        <label for="draft" class="peer-checked/draft:text-sky-500">
          Draft
        </label>

        <input
          id="published"
          class="peer/published"
          type="radio"
          name="status"
        />
        <label for="published" class="peer-checked/published:text-sky-500">
          Published
        </label>

        <div class="hidden peer-checked/draft:block">
          Drafts are only visible to administrators.
        </div>
        <div class="hidden peer-checked/published:block">
          Your post will be publicly visible on your site.
        </div>
      </fieldset>
      <br />
      <br />
      <label class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
        <svg fill="currentColor"></svg>
        Google Pay
        <input type="radio" class="checked:border-indigo-500 ..." />
      </label>
      <br />
      <br />
      <fieldset>
        <legend>Today</legend>

        <div>
          <label class="peer ...">
            <input type="checkbox" name="todo[1]" checked />
            Create a to do list
          </label>
          <svg class="peer-has-[:checked]:hidden ..."></svg>
        </div>
      </fieldset>
      <br />
      <br />
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input
          type="email"
          name="email"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
      </label>
      <br />
      <br />
      <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
        gamarjoba salami
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span class="relative text-white">zdarova</span>
        </span>
        privet sdrastuviwe
      </blockquote>
      <br />
      <br />
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </label>
      <br />
      <br />
      <form class="flex items-center space-x-6">
        <div class="shrink-0">
          <img
            class="h-16 w-16 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          />
        </div>
        <label class="block">
          <span class="sr-only">Choose profile photo</span>
          <input
            type="file"
            class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          />
        </label>
      </form>
      <br />
      <br />
      <ul
        role="list"
        class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400"
      >
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>

      <br />
      <br />
      <p
        class="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left
"
      >
        Well, let me tell you something, funny boy. Y'know that little stamp,
        the one that says "New York Public Library"? Well that may not mean
        anything to you, but that means a lot to me. One whole hell of a lot.
      </p>

      <br />
      <br />

      <form>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">
            Social Security Number
          </span>
          <input class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
          <p class="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
            We need this to steal your identity.
          </p>
        </label>
      </form>
      <br />
      <br />
      
    </div>
  );
}
