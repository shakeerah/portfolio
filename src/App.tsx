import './App.css';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="App ">
      <div className="">
        {/* Navigation */}
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            {/* Logo */}
            <div className="flex lg:flex-1">
              <button className="-m-1.5 p-1.5">
                <span className="font-serif sr-only"> Simply Shakirah </span>
                <img
                  className="h-16 w-auto hover:opacity-50"
                  src="/simply_shakirah_logo_f.gif"
                  alt=""
                />
              </button>
            </div>

            {/* mobile menu  Open icon */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/*  menu  Items */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
              <a
                href="/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Contact
              </a>

              <button className="text-sm font-semibold leading-6 text-gray-900">
                Resume <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </nav>

          {/*  Mobile menu  Tray  */}
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-fuchsia-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                {/* mobile menu tray logo */}
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only"> Simply Shakirah </span>
                  <img
                    className="h-8 w-auto"
                    src="/simply_shakirah_logo_f.gif"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate px-4 pt-14 lg:px-8">
          <div className="max-w-5xl py-32 sm:py-48 lg:py-56 px-8 md:pl-32">
            <div className="flex">
              <div className="text-lg py-1 leading-6 text-gray-600">I am</div>
            </div>
            <div className="">
              <h1 className="text-3xl tracking-tighter text-gray-900 sm:text-6xl">
                Shakirah{' '}
                <span className="font-body py-4 text-6xl md:text-9xl block">
                  {' '}
                  and i build things
                </span>
              </h1>
              <h2 className="max-w-lg font-mono mt-6 leading-8 text-gray-600">
                I am a Software Engineer/Product Engineer that bridges the Gap
                between the Technology and the Solution
              </h2>
              <div className="mt-10 flex gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
