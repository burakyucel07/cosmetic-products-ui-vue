<template>
  <div class="pt-4">
    <h1 class="text-4xl mb-3">Cosmetic Shop</h1>
    <p class="text-lg mb-6">
      Cosmetic shop has a great variation of cosmetic products. Cleaning,
      scents, moisturizers, and more. Please don't hesitate to check our
      products.
    </p>
  </div>

  <div class="pt-12 pr-8 pb-12 pl-8 bg-slate-200 text-gray-900 my-8 mx-2">
    <h1 class="text-4xl font-bold mb-4">We hate animal testing!</h1>
    <p class="text-3xl">
      We're awesome.
      <RouterLink to="/products" class="underline">Shop now!</RouterLink>
    </p>
  </div>

  <div class="pt-6 pr-8 pb-16 pl-8 bg-slate-200 text-gray-900 my-8 mx-2">
    <h1 class="text-9xl text-center font-extrabold mb-4">Sale! %50</h1>
    <div class="text-3xl text-center m-0">
      <RouterLink to="/products" class="underline">Shop now!</RouterLink>
    </div>
  </div>

  <h1 class="text-4xl mb-3">Our Newly Added Products</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div
      class="mx-3 my-3 bg-gradient-to-b from-white to-slate-300 rounded-lg py-4 px-4"
    ></div>
    <div
      class="mx-3 my-3 bg-gradient-to-b from-white to-slate-300 rounded-lg py-4 px-4"
    ></div>
    <div
      class="mx-3 my-3 bg-gradient-to-b from-white to-slate-300 rounded-lg py-4 px-4"
    ></div>
    <div
      class="mx-3 my-3 bg-gradient-to-b from-white to-slate-300 rounded-lg py-4 px-4"
    ></div>
  </div>
</template>
