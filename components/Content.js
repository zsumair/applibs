import React from "react";

function Content() {
  return (
    <div>
      <main role="main" id="MainContent">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-6 text-center lg:py-12">
            <h5 className="text-md font-bold text-gray-900 sm:text-4xl pb-4">
              Find Libraries for React
            </h5>
            {/* <h2 className="mt-4 text-gray-700">Find Libraries for React</h2> */}
            <ul className="inline-flex md:flex flex-wrap mx-auto gap-2 p-4">
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  UI Components
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Animations
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Charts
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Tables
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Maps
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Carousels
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Images
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Audio/Video
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Notifications
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Form utilities
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Seo
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">
                  Dev utilities
                </button>
              </li>
            </ul>
          </div>
        </section>
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-12">
          <div className="space-y-4">
            <h2 className="text-lg font-bold sm:text-xl">Marketing</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <a
                title="Tailwind CSS Marketing Components - Announcements"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/announcements"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      📣
                    </span>
                    <p className="mt-4 text-lg font-medium">Announcements</p>
                    <p className="mt-1 text-xs">8 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Banners"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/banners"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🏴&zwj;☠️
                    </span>
                    <p className="mt-4 text-lg font-medium">Banners</p>
                    <p className="mt-1 text-xs">3 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Blog Cards"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/blog-cards"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      📰
                    </span>
                    <p className="mt-4 text-lg font-medium">Blog Cards</p>
                    <p className="mt-1 text-xs">8 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Buttons"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/buttons"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      👆
                    </span>
                    <p className="mt-4 text-lg font-medium">Buttons</p>
                    <p className="mt-1 text-xs">16 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Cards"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/cards"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🃏
                    </span>
                    <p className="mt-4 text-lg font-medium">Cards</p>
                    <p className="mt-1 text-xs">16 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - CTAs"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/ctas"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      👋
                    </span>
                    <p className="mt-4 text-lg font-medium">CTAs</p>
                    <p className="mt-1 text-xs">5 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - FAQs"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/faqs"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🤔
                    </span>
                    <p className="mt-4 text-lg font-medium">FAQs</p>
                    <p className="mt-1 text-xs">5 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Footers"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/footers"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      ⚽️
                    </span>
                    <p className="mt-4 text-lg font-medium">Footers</p>
                    <p className="mt-1 text-xs">13 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Forms"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/forms"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      📝
                    </span>
                    <p className="mt-4 text-lg font-medium">Forms</p>
                    <p className="mt-1 text-xs">4 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Navigation"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/navigations"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🗺
                    </span>
                    <p className="mt-4 text-lg font-medium">Navigation</p>
                    <p className="mt-1 text-xs">7 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Popups"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/popups"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      👋
                    </span>
                    <p className="mt-4 text-lg font-medium">Popups</p>
                    <p className="mt-1 text-xs">8 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Sections"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/sections"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🧱
                    </span>
                    <p className="mt-4 text-lg font-medium">Sections</p>
                    <p className="mt-1 text-xs">6 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Stats"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/stats"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      📊
                    </span>
                    <p className="mt-4 text-lg font-medium">Stats</p>
                    <p className="mt-1 text-xs">1 Component</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Tabs"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/tabs"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🗂
                    </span>
                    <p className="mt-4 text-lg font-medium">Tabs</p>
                    <p className="mt-1 text-xs">4 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Marketing Components - Testimonials"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/marketing/testimonials"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      👌
                    </span>
                    <p className="mt-4 text-lg font-medium">Testimonials</p>
                    <p className="mt-1 text-xs">7 Components</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold sm:text-xl">eCommerce</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <a
                title="Tailwind CSS eCommerce Components - Carts"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/ecommerce/carts"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🛒
                    </span>
                    <p className="mt-4 text-lg font-medium">Carts</p>
                    <p className="mt-1 text-xs">3 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS eCommerce Components - Checkouts"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/ecommerce/checkouts"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🧾
                    </span>
                    <p className="mt-4 text-lg font-medium">Checkouts</p>
                    <p className="mt-1 text-xs">1 Component</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS eCommerce Components - Collection Cards"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/ecommerce/collection-cards"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🙋&zwj;♀️
                    </span>
                    <p className="mt-4 text-lg font-medium">Collection Cards</p>
                    <p className="mt-1 text-xs">4 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS eCommerce Components - Collection Filters"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/ecommerce/collection-filters"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🎛️
                    </span>
                    <p className="mt-4 text-lg font-medium">
                      Collection Filters
                    </p>
                    <p className="mt-1 text-xs">2 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS eCommerce Components - Featured Sections"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/ecommerce/featured-sections"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🌟
                    </span>
                    <p className="mt-4 text-lg font-medium">
                      Featured Sections
                    </p>
                    <p className="mt-1 text-xs">2 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS eCommerce Components - Product Cards"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/ecommerce/product-cards"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🙋&zwj;♀️
                    </span>
                    <p className="mt-4 text-lg font-medium">Product Cards</p>
                    <p className="mt-1 text-xs">6 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS eCommerce Components - Product Collections"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/ecommerce/product-collections"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🛍
                    </span>
                    <p className="mt-4 text-lg font-medium">
                      Product Collections
                    </p>
                    <p className="mt-1 text-xs">6 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS eCommerce Components - Products"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/ecommerce/products"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🧸
                    </span>
                    <p className="mt-4 text-lg font-medium">Products</p>
                    <p className="mt-1 text-xs">2 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS eCommerce Components - Quantity Inputs"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/ecommerce/quantity-inputs"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      ➕
                    </span>
                    <p className="mt-4 text-lg font-medium">Quantity Inputs</p>
                    <p className="mt-1 text-xs">5 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS eCommerce Components - Reviews"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/ecommerce/reviews"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      ✨
                    </span>
                    <p className="mt-4 text-lg font-medium">Reviews</p>
                    <p className="mt-1 text-xs">1 Component</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold sm:text-xl">Application UI</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <a
                title="Tailwind CSS Application UI Components - Alerts"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/alerts"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      📣
                    </span>
                    <p className="mt-4 text-lg font-medium">Alerts</p>
                    <p className="mt-1 text-xs">4 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Badges"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/badges"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🥁
                    </span>
                    <p className="mt-4 text-lg font-medium">Badges</p>
                    <p className="mt-1 text-xs">6 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Breadcrumbs"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/breadcrumbs"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🍞
                    </span>
                    <p className="mt-4 text-lg font-medium">Breadcrumbs</p>
                    <p className="mt-1 text-xs">2 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Button Groups"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/button-groups"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      👆
                    </span>
                    <p className="mt-4 text-lg font-medium">Button Groups</p>
                    <p className="mt-1 text-xs">5 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Dropdowns"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/dropdown"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      💧
                    </span>
                    <p className="mt-4 text-lg font-medium">Dropdowns</p>
                    <p className="mt-1 text-xs">3 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Error Pages"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/error-pages"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🥲
                    </span>
                    <p className="mt-4 text-lg font-medium">Error Pages</p>
                    <p className="mt-1 text-xs">4 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Header"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/headers"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🐤
                    </span>
                    <p className="mt-4 text-lg font-medium">Header</p>
                    <p className="mt-1 text-xs">4 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Inputs"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/inputs"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🔌
                    </span>
                    <p className="mt-4 text-lg font-medium">Inputs</p>
                    <p className="mt-1 text-xs">6 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Login/Register Forms"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/login-forms"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🪧
                    </span>
                    <p className="mt-4 text-lg font-medium">
                      Login/Register Forms
                    </p>
                    <p className="mt-1 text-xs">2 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Pagination"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/pagination"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🔢
                    </span>
                    <p className="mt-4 text-lg font-medium">Pagination</p>
                    <p className="mt-1 text-xs">4 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Radio Groups"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/radio-groups"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      📻
                    </span>
                    <p className="mt-4 text-lg font-medium">Radio Groups</p>
                    <p className="mt-1 text-xs">7 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Side Menu"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/side-menu"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🎮
                    </span>
                    <p className="mt-4 text-lg font-medium">Side Menu</p>
                    <p className="mt-1 text-xs">2 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Stats"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/stats"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      📊
                    </span>
                    <p className="mt-4 text-lg font-medium">Stats</p>
                    <p className="mt-1 text-xs">6 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Steps"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/steps"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🪜
                    </span>
                    <p className="mt-4 text-lg font-medium">Steps</p>
                    <p className="mt-1 text-xs">6 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Tables"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/tables"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🍽
                    </span>
                    <p className="mt-4 text-lg font-medium">Tables</p>
                    <p className="mt-1 text-xs">6 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Toggles"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/toggles"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🎚
                    </span>
                    <p className="mt-4 text-lg font-medium">Toggles</p>
                    <p className="mt-1 text-xs">4 Components</p>
                  </div>
                </div>
              </a>
              <a
                title="Tailwind CSS Application UI Components - Vertical Menu"
                className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
                href="/components/application-ui/vertical-menu"
              >
                <div className="rounded-lg border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-6">
                    <span aria-hidden="true" role="img" className="text-xl">
                      🍟
                    </span>
                    <p className="mt-4 text-lg font-medium">Vertical Menu</p>
                    <p className="mt-1 text-xs">9 Components</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Content;
