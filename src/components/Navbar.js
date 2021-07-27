function NavBar(props) {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <nav
        className="relative mx-2 lg:mx-32 flex items-center justify-between py-4 px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <h3 class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-3xl text-green-400">
              <span class="md:inline">Nimble </span>
            </h3>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
